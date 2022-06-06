import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import {Link} from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

const BookingLaunchesItem = (props) => {
    return (
        <Grid item xs={4}>
            <Typography variant="h6" className={"titleBoard"}>{props.titleBoard}</Typography>
            {props.paramDragAndDrop
                ?
                <Paper
                    onDragOver={(e) => props.dragOverHandler(e)}
                    onDrop={(e) => props.dropCardHandler(e, props.board)}
                    className={"board"}
                >
                    {props.launchesData.length > 0
                        ? props.launchesData.map(card =>
                            <Card
                                className={"card"}
                                key={card.id}
                                onDragStart={(e) => props.dragStartHandler(e, props.board, card)}
                                draggable={props.paramDragAndDrop}>
                                <CardContentItem card={card} board={props.board}/>
                            </Card>
                        ) : <BookingLaunchesPreload isLoadedData={props.isLoadedData}/>
                    }
                </Paper>
                :
                <Paper className={"board"}>
                    {props.launchesData.length > 0
                        ? props.launchesData.map(card =>
                        <Card key={card.id} className={"card"}>
                            <CardContentItem card={card} board={props.board}/>
                        </Card>
                    )   : <BookingLaunchesPreload isLoadedData={props.isLoadedData}/>
                    }
                </Paper>
            }
        </Grid>
    )
}

const BookingLaunchesPreload = (props) => {
    return (
        <>
            {!props.isLoadedData
                ?
                <Card>
                    <Skeleton className={"skeleton"}/>
                </Card>
                :
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div">
                    Данные не найдены
                </Typography>
            }
        </>
    )
}
const CardContentItem = (props) => {
    return (
        <CardActionArea>
            <CardContent className={"cardContent"}>
                <Typography gutterBottom variant="h6" component="div">{props.card.name}
                </Typography>
                <Typography className={"details"}>
                    {props.card.details}
                </Typography>
                <Typography className={"read"}>
                    <Link to={`/previewLaunches/${props.board}/${props.card.id}`}>Узнать подробности</Link>
                </Typography>
            </CardContent>
        </CardActionArea>
    )
}
export default BookingLaunchesItem