import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT,
    SET_MESSAGE,
    IS_LOADING,
} from "./type";
import Auth from "../services/auth/service";
import { showErrorAlerts, showSuccessAlert } from "./alert";

export const register = (userData) => (dispatch) => {
    return Auth.register(userData).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: { user: response.data },
            });

            return Promise.resolve();
        },
        (error) => {
            const message = error.response.data.error;

            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            showErrorAlerts(message.errors);

            return Promise.reject();
        }
    );
};

export const login = (email, password) => (dispatch) => {
    return Auth.login(email, password).then(
        (response) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: response.data },
            });

            return Promise.resolve();
        },
        (error) => {
            const message = error.response.data.error;

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            showErrorAlerts(message.errors);

            return Promise.reject();
        }
    );
};

export const logout = () => (dispatch) => {
    Auth.logout().then(() => {
        dispatch({
            type: LOGOUT,
        });
    });
};

export const sendResetPasswordLink = (email) => (dispatch) => {
    dispatch({
        type: IS_LOADING,
        payload: true,
    });
    return Auth.sendResetPasswordLink(email).then(
        (response) => {
            dispatch({
                type: SET_MESSAGE,
                payload: response.message,
            });

            showSuccessAlert(response.message);

            dispatch({
                type: IS_LOADING,
                payload: false,
            });

            return Promise.resolve();
        },
        (error) => {
            const message = error.response.data.error;

            showErrorAlerts(message.errors);

            dispatch({
                type: IS_LOADING,
                payload: false,
            });

            return Promise.reject();
        }
    );
};

export const updatePassword = (data) => (dispatch) => {
    dispatch({
        type: IS_LOADING,
        payload: true,
    });

    return Auth.updatePassword(data).then(
        (response) => {
            showSuccessAlert(response.message);

            dispatch({
                type: IS_LOADING,
                payload: false,
            });

            return Promise.resolve();
        },
        (error) => {
            const message = error.response.data.error;

            showErrorAlerts(message.errors);

            dispatch({
                type: IS_LOADING,
                payload: false,
            });

            return Promise.reject();
        }
    );
};
