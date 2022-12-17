import * as React from "react";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Navbar from "../../../components/layouts/Navbar";
import Guest from "../../../components/layouts/Guest";
import { useHistory, Link } from "react-router-dom";
import { useState } from "react";
import { login } from "../../../actions/auth";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { message } = useSelector((state) => state.message);
    const { isLoggedIn } = useSelector((state) => state.auth);

    if (isLoggedIn) history.push("/");

    const handleLogin = () => {
        setLoading(true);
        dispatch(login(email, password))
            .then(() => {
                history.push("/");
            })
            .catch(() => {
                setLoading(false);
            });
    };

    return (
        <>
            <Guest>
                <Navbar />
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 12,
                            marginBottom: 16,
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
                            LOG IN
                        </Typography>
                        <Typography
                            component="span"
                            variant="span"
                            color={"primary"}
                        >
                            Sign in to your account
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <TextField
                                sx={{
                                    label: { color: "#1565c0" },
                                }}
                                className={"bg-blue-50 border-0"}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                value={email}
                                autoComplete="email"
                                autoFocus
                                error={!!message}
                            />
                            <TextField
                                sx={{
                                    label: { color: "#1565c0" },
                                }}
                                className={"bg-blue-50"}
                                margin="normal"
                                required
                                fullWidth
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                value={password}
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <LoadingButton
                                loading={loading}
                                onClick={handleLogin}
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </LoadingButton>
                            <div className={"text-center"}>
                                <Link
                                    to={"/password/reset"}
                                    className={"text-blue-500"}
                                >
                                    Forget Password?
                                </Link>
                            </div>
                            <div className={"my-4 px-4 text-center relative"}>
                                <div className={"flex justify-center"}>
                                    <div className={"absolute -mt-2.5"}>
                                        <span
                                            className={
                                                "bg-blue-300 text-white p-1"
                                            }
                                        >
                                            or
                                        </span>
                                    </div>
                                </div>

                                <div className={"border-t border-blue-300"} />
                            </div>
                            <div className={"text-center"}>
                                <Button
                                    onClick={() => {
                                        history.push("register");
                                    }}
                                    color={"secondary"}
                                    type="button"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, color: "white" }}
                                >
                                    Create Account
                                </Button>
                            </div>
                        </Box>
                    </Box>
                </Container>
            </Guest>
        </>
    );
};
export default Login;
