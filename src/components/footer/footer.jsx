import React from "react";
import Box from "@mui/material/Box";
import "./footer.css"
import Typography from "@mui/material/Typography";
const Footer = () => {
    return (
        <Box className={"footer"}>
            <Typography>
                Разработанно в {(new Date()).getFullYear()} году
            </Typography>
        </Box>
    )
}
export default Footer