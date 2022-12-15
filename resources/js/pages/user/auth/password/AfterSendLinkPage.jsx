import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const AfterSendLinkPage = ({ setIsLinkSent }) => {
    return (
        <>
            <Box
                sx={{
                    marginTop: 28,
                    marginBottom: 32,
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
                    RESET PASSWORD LINK SENT!
                </Typography>
                <Typography component="span" variant="span" color={"primary"}>
                    Check your email to get the link
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography
                            component="span"
                            className={"text-center"}
                            variant="span"
                            color={"primary"}
                        >
                            If you haven't received email yet. You can resend
                            link by click button below
                        </Typography>
                    </Box>
                    <Button
                        onClick={() => {
                            setIsLinkSent(false);
                        }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Resend Reset Password Link
                    </Button>
                </Box>
            </Box>
        </>
    );
};
export default AfterSendLinkPage;
