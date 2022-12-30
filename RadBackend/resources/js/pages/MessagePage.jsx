import React, {Fragment} from 'react';
import MenuItem from "../components/common/menubar/MenuItem";
import {Container} from "react-bootstrap";
import Message from "../components/Message/Message";

const MessagePage = () => {
    return (
        <Fragment>
            <MenuItem>
                <Message/>
            </MenuItem>
        </Fragment>
    );
};

export default MessagePage;
