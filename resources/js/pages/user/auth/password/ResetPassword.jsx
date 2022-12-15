import Guest from "../../../../components/layouts/Guest";
import Navbar from "../../../../components/layouts/Navbar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const ResetPassword = () => {
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
                            className={"bg-blue-50"}
                            margin="normal"
                            required
                            fullWidth
                            name="password_confirmation"
                            label="Password Confirmation"
                            type="password"
                            id="password_confirmation"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Reset Password
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Guest>
    );
};
export default ResetPassword;
