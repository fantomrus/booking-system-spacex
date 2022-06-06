import React from 'react';
import {Routes, Route} from "react-router-dom"
import BookingLaunches from "./bookingLaunches/bookingLaunсhes";
import PreviewLaunches from "./previewLaunches/previewLaunches";
import Layout from "./layout";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<BookingLaunches/>}/>
                    <Route path={"previewLaunches/:board/:id"} element={<PreviewLaunches/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;