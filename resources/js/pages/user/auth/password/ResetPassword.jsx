import Guest from "../../../../components/layouts/Guest";
import Navbar from "../../../../components/layouts/Navbar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useQuery from "../../../../services/query/useQuery";
import { useState } from "react";
import { updatePassword } from "../../../../actions/auth";
import LoadingButton from "@mui/lab/LoadingButton";

const ResetPassword = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { token } = useParams();
    const query = useQuery();

    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const { status } = useSelector((state) => state.message);

    const handleUpdatePassword = () => {
        dispatch(
            updatePassword({
                email: query.get("email"),
                token: token,
                password: password,
                passwordConfirmation: passwordConfirmation,
            })
        ).then(() => {
            history.push("/login");
        });
    };

    return (
        <Guest>
            <Navbar />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 12,
                        marginBottom: 34,
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
                    <Typography
                        component="span"
                        variant="span"
                        color={"primary"}
                    >
                        Reset your password below
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            sx={{
                                label: { color: "#1565c0" },
                            }}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            value={password}
                            className={"bg-blue-50"}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="New Password"
                            type="password"
                            id="password"
                        />
                        <TextField
                            sx={{
                                label: { color: "#1565c0" },
                            }}
                            onChange={(e) => {
                                setPasswordConfirmation(e.target.value);
                            }}
                            value={passwordConfirmation}
                            className={"bg-blue-50"}
                            margin="normal"
                            required
                            fullWidth
                            name="password_confirmation"
                            label="Password Confirmation"
                            type="password"
                            id="password_confirmation"
                        />
                        <LoadingButton
                            type="button"
                            onClick={() => {
                                handleUpdatePassword();
                            }}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Reset Password
                        </LoadingButton>
                    </Box>
                </Box>
            </Container>
        </Guest>
    );
};
export default ResetPassword;
