import React, {Fragment} from 'react';
import MenuItem from "../components/common/menubar/MenuItem";
import Home from "../components/HomePage/Home";
const HomePage = () => {

    return (
        <Fragment>

            <MenuItem>
                <Home/>
            </MenuItem>
        </Fragment>
    );
};

export default HomePage;
