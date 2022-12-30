import React, {Fragment} from 'react';
import MenuItem from "../components/common/menubar/MenuItem";
import {Container} from "react-bootstrap";
import FaqComponent from "../components/Faq/FaqComponent";

const FaqUpdatePage = () => {
    return (
        <Fragment>
            <MenuItem>
                <Container>
                    <FaqComponent/>
                </Container>
            </MenuItem>
        </Fragment>
    );
};

export default FaqUpdatePage;
