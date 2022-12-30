import React, {Fragment} from 'react';
import MenuItem from "../components/common/menubar/MenuItem";
import {Container} from "react-bootstrap";
import AllProfile from "../components/AllPRofile/AllProfile";

const AllProfilePage = () => {
    return (
        <Fragment>
            <MenuItem>
                <Container>
                    <AllProfile/>
                </Container>
            </MenuItem>
        </Fragment>
    );
};

export default AllProfilePage;
