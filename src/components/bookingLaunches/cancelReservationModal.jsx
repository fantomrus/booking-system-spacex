import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import './bookingLaunches.css'

const CancelReservationModal = (props) => {
    return (
        <Modal
            open={props.isOpenModal}
            onClose={() => props.openModeModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={"modal"}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Отмена бронирования
                </Typography>
                <Typography id="modal-modal-description" className={"textModal"}>
                    Вы действительно желаете отменить бронирование?
                </Typography>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={() => props.cancelReservation()}>Отменить бронирование</Button>
                    <Button onClick={() => props.openModeModal(false)}>Закрыть окно</Button>
                </ButtonGroup>
            </Box>
        </Modal>
    )
}
export default CancelReservationModal