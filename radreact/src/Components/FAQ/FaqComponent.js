import React, {Fragment, useEffect, useState} from 'react';
import {Accordion, Breadcrumb, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import AppURL from "../../Routes/AppURL";
import Loading from "../Loading";
import AppHead from "../AppHead";

const FaqComponent = () => {
    const [data, setData]= useState([]);
    const [loading, setLoading]=useState(true);
    const getData=async ()=>{
        await axios.get(AppURL.getFaq)
            .then(response=>{
                setData(response.data)
                setLoading(false)
            })
    }


    const showFaq = data.map((item, index)=>{
        return(<Accordion.Item className={'faqAccordion rounded-0 border-1'} eventKey={index} key={index}>
                <Accordion.Header>{item.question}</Accordion.Header>
                <Accordion.Body className={'bg-light text-dark'}>
                    <div style={{fontSize:17}} dangerouslySetInnerHTML={{__html:item.answer}}/>
                </Accordion.Body>
            </Accordion.Item>
        )})

    useEffect(()=>{
        getData()
    },[])


    if (loading){
        return <Loading/>
    }
    else {
        return (
            <Fragment>
                <AppHead pageTitle={"RAD School | Frequently Asked Questions"} seoTitle={"RAD School | Frequently Asked Questions"} pageDescription={"RAD School | Frequently Asked Questions"} seoDescription={"RAD School | Frequently Asked Questions"}/>
                <Container className={'my-5 py-2'}>

                    <Breadcrumb className={"bg-light rounded-1 px-3 mt-5"}>
                        <Link to={"/"}  className={"breadcrumb-item py-3 d-flex align-items-center"}>Home</Link>
                        <Link to={"/courses"} className={"breadcrumb-item py-3 d-flex align-items-center"}>Freaquently asking question</Link>
                    </Breadcrumb>

                    <Accordion className={'mt-4'}>
                        {showFaq}
                    </Accordion>
                </Container>
            </Fragment>
        );
    }
};

export default FaqComponent;