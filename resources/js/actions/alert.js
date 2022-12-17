import toast from "react-hot-toast";

export const showErrorAlerts = (errors) => {
    if (errors.length > 0) {
        errors.forEach((item) => {
            toast.error(item.message);
        });
    }
};

export const showErrorAlert = (error) => {
    toast.error(error.message);
};

export const showSuccessAlert = (message) => {
    toast.success(message);
};
