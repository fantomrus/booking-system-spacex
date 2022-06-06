import React, {useEffect} from "react";
import {Outlet} from "react-router-dom"
import Header from "./header/header";
import Footer from "./footer/footer";
import {StyledEngineProvider} from '@mui/material/styles';
import {useDispatch} from "react-redux";
import {fetchLaunches} from "../redux/reducers/bookingReducers";
import "./layout.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Layout = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchLaunches())
    }, [])
    return (
        <StyledEngineProvider injectFirst>
            <Header/>
            <Box className={"content"}>
                <Typography variant="h4">
                    Система бронирования полетов Space-X
                </Typography>
                <Outlet/>
            </Box>
            <Footer/>
        </StyledEngineProvider>
    )
}
export default Layout