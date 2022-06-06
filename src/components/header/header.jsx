import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import PublicIcon from '@mui/icons-material/Public';
import Typography from "@mui/material/Typography";
import './headerStyle.css'
import Box from "@mui/material/Box";

const Header = () => {
    return (
        <AppBar className="appBar">
            <Container>
                <Toolbar>
                    <PublicIcon/>
                    <Typography variant="h6">
                        Explore The Space
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header