import React, {Fragment} from 'react';
import MenuItem from "../components/common/menubar/MenuItem";
import Personalize from "../components/Personalize/Personalize";

const PersonalizePage = () => {
    return (
        <Fragment>
            <MenuItem>
                <Personalize/>
            </MenuItem>
        </Fragment>
    );
};

export default PersonalizePage;
