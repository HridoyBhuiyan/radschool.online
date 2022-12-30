import React, {Fragment} from 'react';
import MenuItem from "../components/common/menubar/MenuItem";
import {Container} from "react-bootstrap";
import SiteUpdate from "../components/SiteUpdate/SiteUpdate";

const SiteUpdatePage = () => {
    return (
        <Fragment>
            <MenuItem>
                <Container fluid={true}>
                    <SiteUpdate/>
                </Container>
            </MenuItem>
        </Fragment>
    );
};

export default SiteUpdatePage;
