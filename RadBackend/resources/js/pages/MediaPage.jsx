import React, {Fragment} from 'react';
import MenuItem from "../components/common/menubar/MenuItem";
import {Container} from "react-bootstrap";
import Media from '../components/Media/Media'
const MediaPage = () => {
    return (
        <Fragment>
            <MenuItem>
                <Container fluid={true}>
                    <Media/>
                </Container>
            </MenuItem>
        </Fragment>
    );
};

export default MediaPage;
