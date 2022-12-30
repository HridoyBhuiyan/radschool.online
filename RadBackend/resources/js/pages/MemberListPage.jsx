import React, {Fragment} from 'react';
import MenuItem from "../components/common/menubar/MenuItem";
import {Container} from "react-bootstrap";
import MemberList from '../components/MemberList/MemberList'
const MemberListPage = () => {
    return (
        <Fragment>
            <MenuItem>
                <MemberList/>
            </MenuItem>
        </Fragment>
    );
};

export default MemberListPage;
