import React, {Fragment} from 'react';
import MenuItem from "../components/common/menubar/MenuItem";
import Application from '../components/ApplicationPage/Application'

const ApplicationPage = () => {
    return (
        <Fragment>
            <MenuItem>
                <Application/>
            </MenuItem>
        </Fragment>
    );
};

export default ApplicationPage;
