import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SendResetLinkForm = ({ setIsLinkSent }) => {
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
                    <Button
                        onClick={() => {
                            setIsLinkSent(true);
                        }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Send Reset Password Link
                    </Button>
                </Box>
            </Box>
        </>
    );
};
export default SendResetLinkForm;
