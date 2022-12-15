import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Navbar from "../../../components/layouts/Navbar";
import Guest from "../../../components/layouts/Guest";
import { useHistory, Link } from "react-router-dom";

const Register = () => {
    const history = useHistory();

    return (
        <>
            <Guest>
                <Navbar />
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 12,
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
                            CREATE ACCOUNT
                        </Typography>
                        <Typography
                            component="span"
                            variant="span"
                            color={"primary"}
                        >
                            It's quick and easy.
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
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                sx={{
                                    label: { color: "#1565c0" },
                                }}
                                className={"bg-blue-50"}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <div className={"text-center"}>
                                <Link to={"/login"} className={"text-blue-500"}>
                                    Already have an account?
                                </Link>
                            </div>
                        </Box>
                    </Box>
                </Container>
            </Guest>
        </>
    );
};
export default Register;
