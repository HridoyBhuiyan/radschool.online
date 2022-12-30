import React, {Fragment} from 'react';
import MenuItem from "../components/common/menubar/MenuItem";
import Course from "../components/Courses/Course";
import 'react-quill/dist/quill.snow.css';

const CoursePage = () => {
    return (
        <Fragment>
            <MenuItem>
                <Course/>
            </MenuItem>
        </Fragment>
    );
};

export default CoursePage;
