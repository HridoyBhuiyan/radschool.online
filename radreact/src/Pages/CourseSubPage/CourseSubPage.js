import React, {Fragment, useEffect} from 'react';
import {Navbar} from "react-bootstrap";
import FooterNav from "../../Components/FooterNav";
import HeaderNav from "../../Components/HeaderNav";
import CourseSub from "../../Components/CourseSubPage/CourseSub";
import {useParams} from "react-router-dom";

const CourseSubPage = () => {
    const params = useParams();
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    return (
        <Fragment>
            <HeaderNav/>
            <CourseSub params={params}/>
            <FooterNav/>
        </Fragment>
    );
};

export default CourseSubPage;