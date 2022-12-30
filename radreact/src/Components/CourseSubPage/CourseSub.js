import React, {Fragment, useEffect, useState} from 'react';
import {Breadcrumb, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import AppURL from "../../Routes/AppURL";
import Loading from "../Loading";
import AppHead from "../AppHead";
const CourseSub = (props) => {
    const [data, setData]=useState([]);
    const [loading, setLoading]=useState(true);
    const getData=async ()=>{
        await axios.get(AppURL.getCourseDetails+props.params.name)
            .then(response=>{
                setData(response.data)
                setLoading(false)
            })
    }
    useEffect(()=>{
        getData()
    },[props.params.name])


    const showCourse = data.map((item, index)=>{
        return(
            <Col lg={4} xl={4} md={4} xs={12} sm={12} className={'py-4 d-flex justify-content-center align-items-center'} key={index}>
                <Link to={`/courses/`+item.id}>
                    <Card style={{ width: '22rem' }} className={'courseCard'}>
                        <Card.Img variant="top" src={AppURL.rootDomain+item.image} style={{ height: '200px' }} />
                        <Card.Body>
                            <Card.Title className="courseTitle">{item.course_name}</Card.Title>

                            <div className="cardMentor">
                                {item.description}
                            </div>

                            <Row>
                                <Col xl={6} sm={6} xs={6} lg={6}>
                                    <span className={'cardDate'}>From: </span>{item.course_start}
                                </Col>
                                <Col xl={6} sm={6} xs={6} lg={6}>
                                    <span className={'cardDate'}>To: </span>{item.course_end}
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        )
    })


    if (loading){
        return <Loading />
    }
    else {
        return (
            <Fragment>
                <AppHead pageTitle={"RAD School | "+props.params.name.toUpperCase() + " Courses"} seoTitle={"RAD School | "+props.params.name.toUpperCase() + " Courses"} pageDescription={"RAD School | "+props.params.name.toUpperCase() + " Courses"} seoDescription={"RAD School | "+props.params.name.toUpperCase() + " Courses"}/>
                <Container className={'mt-5 pt-5'}>
                    <Breadcrumb className={"bg-light rounded-1 px-3"}>
                        <Link to={"/"}  className={"breadcrumb-item py-3 d-flex align-items-center"}>Home</Link>
                        <Link to={"/courses"}  className={"breadcrumb-item py-3 d-flex align-items-center"}>Course</Link>
                        <Link to={"/course/category/"+props.params.name}  className={"breadcrumb-item py-3 d-flex align-items-center text-capitalize"} active={true}>{props.params.name}</Link>
                    </Breadcrumb>


                    <Row>
                        {showCourse}
                    </Row>
                </Container>
            </Fragment>
        );
    }
};

export default CourseSub;