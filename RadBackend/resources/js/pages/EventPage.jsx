import React, {Fragment} from 'react';
import MenuItem from "../components/common/menubar/MenuItem";
import {Container} from "react-bootstrap";
import {ToastContainer} from "react-toastify";
import Event from "../components/Event/Event";

const EventPage = () => {
    return (
        <Fragment>
            <MenuItem>
                <Container>
                    <Event/>
                </Container>
            </MenuItem>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Fragment>
    );
};

export default EventPage;
