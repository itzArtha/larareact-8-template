<?php
namespace App\Exceptions\Traits;

use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

trait CustomResponseException
{
    /**
     * Convert an authentication exception into a response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Auth\AuthenticationException  $exception
     * @return \Illuminate\Http\Response
     */
    protected function unauthenticated($request, AuthenticationException $exception)
    {
        if (! $this->shouldCustomFormat($request)) {
            return parent::unauthenticated($request, $exception);
        }

        $title = $this->mapErrorTitle(Response::HTTP_UNAUTHORIZED);

        return response()->json([
            'error' => [
                'code'    => Response::HTTP_UNAUTHORIZED,
                'title'   => $title,
                'message' => $exception->getMessage(),
                'errors'  => []
            ]
        ], Response::HTTP_UNAUTHORIZED);
    }

    /**
     * Convert a validation exception into a JSON response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Validation\ValidationException  $exception
     * @return \Illuminate\Http\JsonResponse
     */
    protected function invalidJson($request, ValidationException $exception)
    {
        if (! $this->shouldCustomFormat($request)) {
            return parent::invalidJson($request, $exception);
        }

        $errors = [];

        foreach ($exception->errors() as $key => $message) {
            $errors[] = [
                'key'     => $key,
                'message' => $message[0]
            ];
        }

        return response()->json([
            'error' => [
                'code'    => (int) $exception->status,
                'title'   => $this->mapErrorTitle($exception->status),
                'message' => $exception->getMessage(),
                'errors'  => $errors,
            ]
        ], $exception->status);
    }

    /**
     * Prepare a JSON response for the given exception.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception|\Symfony\Component\HttpKernel\Exception\HttpExceptionInterface $e
     * @return \Illuminate\Http\JsonResponse
     */
    protected function prepareJsonResponse($request, $e)
    {
        if (! $this->shouldCustomFormat($request)) {
            return parent::prepareJsonResponse($request, $e);
        }

        $status  = $this->isHttpException($e) ? $e->getStatusCode() : 500;
        $message = $this->isHttpException($e) ? $e->getMessage() : 'Server Error';
        $title   = $this->mapErrorTitle($status);

        $errorsArray = [
            'error' => [
                'code'    => $status,
                'title'   => $title,
                'message' => $message,
                'errors'  => []
            ]
        ];

        if (config('app.debug')) {
            $errorsArray = array_merge($errorsArray, $this->convertExceptionToArray($e));
        }

        return new JsonResponse(
            $errorsArray,
            $status,
            $this->isHttpException($e) ? $e->getHeaders() : [],
            JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES
        );
    }

    /**
     * Map Error Exception Title
     *
     * @param int $status
     *
     * @return string
     */
    protected function mapErrorTitle(int $status)
    {
        switch ($status) {
            case Response::HTTP_BAD_REQUEST:
                return "Bad Request";

            case Response::HTTP_NOT_FOUND:
                return "Url Not Found";

            case Response::HTTP_FORBIDDEN:
                return "Access Forbidden";

            case Response::HTTP_METHOD_NOT_ALLOWED:
                return "Request Method Not Allow";

            case Response::HTTP_REQUEST_TIMEOUT:
                return "Request Timeout";

            case Response::HTTP_TOO_MANY_REQUESTS:
                return "Too Many Request";

            case Response::HTTP_UNPROCESSABLE_ENTITY:
                return "Validation Error";

            case Response::HTTP_UNAUTHORIZED:
                return "Authentication Failed";

            default:
                return "Server Error";
        }
    }

    /**
     * Determine if response need to use Timedoor format
     *
     * @param \Illuminate\Http\Request  $request
     *
     * @return bool
     */
    protected function shouldCustomFormat($request)
    {
        foreach ($this->urlPathPattern() as $pattern) {
            if ($request->routeIs($pattern)) {
                return true;
            }
        }

        return false;
    }

    /**
     * List of url path that use custom Exception Format. You can use Regex in the list
     *
     * @return array<string>
     */
    protected function urlPathPattern()
    {
        return [];
    }

    /**
     * Determine if the exception handler response should be JSON.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $e
     * @return bool
     */
    protected function shouldReturnJson($request, \Throwable $e)
    {
        return $request->expectsJson() || $this->shouldCustomFormat($request);
    }
}
