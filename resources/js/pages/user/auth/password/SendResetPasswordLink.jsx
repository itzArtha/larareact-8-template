import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Navbar from "../../../../components/layouts/Navbar";
import Guest from "../../../../components/layouts/Guest";
import { useState } from "react";
import AfterSendLinkPage from "./AfterSendLinkPage";
import SendResetLinkForm from "./SendResetLinkForm";

const SendResetPasswordLink = () => {
    const [isLinkSent, setIsLinkSent] = useState(false);

    return (
        <>
            <Guest>
                <Navbar />
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    {isLinkSent ? (
                        <AfterSendLinkPage
                            setIsLinkSent={(value) => {
                                setIsLinkSent(value);
                            }}
                        />
                    ) : (
                        <SendResetLinkForm
                            setIsLinkSent={(value) => {
                                setIsLinkSent(value);
                            }}
                        />
                    )}
                </Container>
            </Guest>
        </>
    );
};
export default SendResetPasswordLink;
