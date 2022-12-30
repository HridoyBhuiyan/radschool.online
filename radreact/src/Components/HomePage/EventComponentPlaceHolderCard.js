import React, {Fragment, useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import radWorker from '../../Assets/Images/radWorker.webp'
import {Button, Card} from "@mui/material";
import {useNavigate} from "react-router-dom";
const EventComponentPlaceHolderCard = () => {
    const [greeting, setGreeting]=useState("");
    const [greetingColor, setGreetingColor]=useState({});
    const navigation = useNavigate()

    const getGreeting=()=> {
        const currentHour = new Date().getHours();
        if (currentHour >= 5.30 && currentHour < 11) {
            setGreeting("Good morning, Buddy !")
            setGreetingColor({bg:"rgba(2,253,6,0.16)",color:"#525151"})}
        else if (currentHour >= 11 && currentHour < 19) {
            setGreeting("Good Afternoon, Buddy !")
            setGreetingColor({bg:"rgba(245,160,2,0.33)",color:"#505050"})}
        else {
            setGreeting("Have a warm night buddy")
            setGreetingColor({bg:"rgba(114,114,114,0.16)",color:"#727070"})}}



    useEffect(()=>{
        getGreeting()
    },[])
    return (
        <Fragment>
            <Card className={"shadow-lg my-4 mb-5"}>
            <Row className={"p-0 m-0"}>
               <Col xl={9} lg={9} md={9} sm={12} className={"p-0 m-0"}>
                   <div style={{background:greetingColor.bg, color:greetingColor.color}} className={"p-3 h5"}>{greeting}</div>
                   <div className={"p-3 d-flex flex-column justify-content-center"}>
                       <p>Currently we dont have event available. But we love to see you engage with us , when our event is available, we can notify you. Check our contact page and drop your contact information. We want you on our next event.
                       </p>
                       <div>
                           <Button variant={"outlined"} color={"warning"} style={{background:"rgba(215,203,75,0.18)"}} className={"px-4 py-2"} onClick={()=>navigation("/contact")}>Contact US</Button>
                       </div>
                   </div>
               </Col>
               <Col xl={3} lg={3} md={3} sm={12} className={"p-0 m-0"}>
                       <img src={radWorker} width={"100%"}/>
               </Col>
            </Row>
            </Card>
        </Fragment>
    );
};

export default EventComponentPlaceHolderCard;