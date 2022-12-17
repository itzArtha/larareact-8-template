import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { sendResetPasswordLink } from "../../../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useParams } from "react-router-dom";

const SendResetLinkForm = ({ setIsLinkSent }) => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");

    const { status } = useSelector((state) => state.message);

    const handleSendResetPassword = () => {
        dispatch(sendResetPasswordLink(email)).then(() => {
            setIsLinkSent(true);
        });
    };

    return (
        <>
            <Box
                sx={{
                    marginTop: 28,
                    marginBottom: 28,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography
                    component="h1"
                    sx={{ fontWeight: "bold" }}
                    variant="h5"
                    color={"primary"}
                >
                    RESET PASSWORD
                </Typography>
                <Typography component="span" variant="span" color={"primary"}>
                    We'll send you a link for reset your password
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        sx={{
                            label: { color: "#1565c0" },
                        }}
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className={"bg-blue-50 border-0"}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <LoadingButton
                        onClick={() => {
                            handleSendResetPassword();
                        }}
                        loading={status}
                        type="button"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Send Reset Password Link
                    </LoadingButton>
                </Box>
            </Box>
        </>
    );
};
export default SendResetLinkForm;
