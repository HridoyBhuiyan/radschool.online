import React, {Fragment} from 'react';
import {Container} from "react-bootstrap";
import MenuItem from "../components/common/menubar/MenuItem";
import SiteMeta from "../components/SiteMeta/SiteMeta";

const SiteMetaPage = () => {
    return (
        <Fragment>
            <MenuItem>
                <Container fluid={true}>
                    <SiteMeta/>
                </Container>
            </MenuItem>
        </Fragment>
    );
};

export default SiteMetaPage;
