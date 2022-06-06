import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


const PreviewLaunches = () => {
    const {board, id} = useParams()
    const selectorLaunches = useSelector((state) => state.bookingReducer[board])
    const filterLaunches = selectorLaunches.filter(item => item.id === id)
    const data = filterLaunches.shift()

    return (
        <>
            <Box>
                <Typography>
                    <Button variant="outlined">
                        <Link to={"/"}>Вернуться</Link>
                    </Button>
                </Typography>
                <Typography>{data.details}</Typography>
            </Box>
        </>
    )
}
export default PreviewLaunches