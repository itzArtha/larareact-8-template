import axios from "axios";

const API_URL = process.env.MIX_API_URL;

const login = (email, password) => {
    return axios
        .post(API_URL + "/login", {
            email: email,
            password: password,
        })
        .then((response) => {
            const user = response.data.data.user;

            if (user.access_token) {
                localStorage.setItem("user", JSON.stringify(user));
            }

            return response.data;
        });
};

const register = (userData) => {
    return axios
        .post(API_URL + "/register", {
            email: userData.email,
            unhcr_number: userData.unhcr,
            country: userData.country,
            birthdate: userData.birthdate,
            sex: userData.sex,
            password: userData.password,
        })
        .then((response) => {
            const user = response.data.data.user;

            if (user.access_token) {
                localStorage.setItem("user", JSON.stringify(user));
            }

            return response.data;
        });
};

const logout = () => {
    return axios
        .post(API_URL + "/logout")
        .then((response) => {
            const user = response.data.data.user;

            if (user.access_token) {
                localStorage.removeItem("user");
            }

            return response.data;
        })
        .catch((err) => {
            if (err.response.status === 403) {
                window.location.href = "/login";
            }
        });
};

const sendResetPasswordLink = (email) => {
    return axios
        .post(API_URL + "/password/email", {
            email: email,
        })
        .then((response) => {
            return response.data;
        });
};

const updatePassword = (data) => {
    return axios
        .post(API_URL + "/password/reset", {
            email: data.email,
            token: data.token,
            password: data.password,
            password_confirmation: data.passwordConfirmation,
        })
        .then((response) => {
            return response.data;
        });
};

export default {
    login,
    register,
    logout,
    sendResetPasswordLink,
    updatePassword,
};
