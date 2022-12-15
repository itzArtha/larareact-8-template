import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as url from "url";
import SimpleFooter from "../footer/SimpleFooter";

const Guest = ({ children }) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#1565c0",
            },
            secondary: {
                main: "#00c853",
            },
        },
    });

    return (
        <div
            style={{
                backgroundImage: `url(${
                    process.env.MIX_APP_URL + "/storage/assets/helpline_bg.png"
                })`,
                backgroundPosition: "left",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
                color: "#f5f5f5",
            }}
        >
            <div
                className="px-4"
                style={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: "rgba(255,255,255,0.9)",
                    color: "white",
                }}
            >
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
                <SimpleFooter />
            </div>
        </div>
    );
};

export default Guest;
