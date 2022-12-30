import React, {Fragment} from 'react';
import MenuItem from "../components/common/menubar/MenuItem";
import Customization from "../components/Customization/Customization";

const CustomizationPage = () => {
    return (
        <Fragment>
            <MenuItem>
                <Customization/>
            </MenuItem>
        </Fragment>
    );
};

export default CustomizationPage;
