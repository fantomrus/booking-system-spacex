import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {
    fetchLaunches,
    setBookingSuccess,
    setCurrentBoard,
    setCurrentCard,
    setLaunches,
    setMyLaunches, setOpenModal
} from "../../redux/reducers/bookingReducers";

import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert';
import Box from "@mui/material/Box";

import BookingLaunchesItem from "./bookingLaunchesItem";
import CancelReservationModal from "./cancelReservationModal";

const BookingLaunches = () => {
    const {
        launches,
        pastLaunches,
        myLaunches,
        currentBoard,
        isLoadedData,
        isOpenModal,
        snackbarBookingSuccess} = useSelector(state => state.bookingReducer)

    const dispatch = useDispatch()

    const dragStartHandler = (e, board, card) => {
        dispatch(setCurrentBoard(board))
        dispatch(setCurrentCard(card))
    }
    const dragOverHandler = (e) => {
        e.preventDefault()
    }
    const dropCardHandler = (e, board) => {
        if (currentBoard === board) {
            return
        }
        if (currentBoard === 'myLaunches') {
            dispatch(setOpenModal(true))
        }
        if (currentBoard === 'launches') {
            dispatch(setMyLaunches())
            dispatch(setBookingSuccess(true))
        }
    }
    const cancelReservation = () => {
        dispatch(setLaunches())
        dispatch(setOpenModal(false))
    }
    const functionConfigDragOnDrop = {
        dragStartHandler,
        dragOverHandler,
        dropCardHandler,
        paramDragAndDrop: true
    }
    const openModeModal = (payload) => {
        dispatch(setOpenModal(payload))
    }
    const openSnackBar = (payload) => {
        dispatch(setBookingSuccess(payload))
    }
    return (
        <Box>
            <Grid container spacing={3} >
                <Snackbar open={snackbarBookingSuccess} autoHideDuration={6000} onClose={() => openSnackBar(false)}>
                    <Alert onClose={() => openSnackBar(false)} severity="success" sx={{width: '100%'}}>
                        Вы успешно забронировали космический полёт
                    </Alert>
                </Snackbar>
                <CancelReservationModal
                    openModeModal={openModeModal}
                    cancelReservation={cancelReservation}
                    isOpenModal={isOpenModal}
                />
                <BookingLaunchesItem
                    launchesData={pastLaunches}
                    board={"pastLaunches"}
                    titleBoard={"Прошедшие полеты"}
                    paramDragAndDrop={false}
                    isLoadedData={isLoadedData}
                />
                <BookingLaunchesItem {...functionConfigDragOnDrop}
                                     launchesData={launches}
                                     board={"launches"}
                                     titleBoard={"Доступные полеты"}
                                     isLoadedData={isLoadedData}
                />
                <BookingLaunchesItem {...functionConfigDragOnDrop}
                                     launchesData={myLaunches}
                                     board={"myLaunches"}
                                     titleBoard={"Забронированные полеты"}
                                     isLoadedData={isLoadedData}
                />
            </Grid>
        </Box>
    )
}
export default BookingLaunches