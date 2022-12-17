<?php

namespace App\Http\Resources\Api\V1\User\Auth;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LoginResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'user'   => [
                'access_token' => $this->createToken($request->userAgent())->plainTextToken,
                'name' => $this->name,
                'email' => $this->email,
                'country' => $this->country,
                'sex' => $this->sex,
            ],
        ];
    }
}
