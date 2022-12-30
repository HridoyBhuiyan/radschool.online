import React, {Fragment, useEffect, useState} from 'react';
import MaterialTable from "material-table";
import {Card, Skeleton} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Col, Container, Row} from "react-bootstrap";
import {faMessage, faPersonChalkboard, faTable, faUserPlus} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    const [data, setData]= useState([]);
    const [subscriberData, setSubscriberData] = useState([]);
    const [tableLoad, setTableLoad]=useState("overlay");
    const [otherLoad, setOtherLoad] = useState(false);


    const getData = async ()=>{
        await axios.get("/totalSubscriber")
            .then(x=>{
                if (x.status==200){
                    setData(x.data)
                    setOtherLoad(true)}
            })
            .catch(err=>{console.log(err)})
    }

    const getSubscriberData= async ()=>{
        await axios.get("/allSubscriber")
            .then(x=>{
                setSubscriberData(x.data)
                setTableLoad("none")
            })
            .catch(err=>{console.log(err)})
    }



    useEffect(()=>{
        getData()
        getSubscriberData()
    },[])

    const {sub, application, course, messege} = data && data;
    let column = [
        { title: 'Serial No:', field: "id" },
        { title: 'Email', field: 'email_id' },
    ]

    let tableData = subscriberData;
    let otherLoader =   <Skeleton width="100%" height={"100%"} variant="rectangular" animation={"wave"} />

    return (
        <Fragment>
            <h4 className={"text-center"} >Basic summary state of RadSchool</h4>

            <Container fluid={true}>
                <Row className={"py-3"}>

                    <Col lg={4} xl={4} md={4} sm={12}>

                        <MaterialTable
                            title="All Subscriber List"
                            columns={column}
                            data={tableData}
                            isLoading={true}
                            options={{
                                exportButton: true,
                                search:false,
                                paging:true,
                                pageSizeOptions:[10, 20, 50],
                                pageSize:12,
                                loadingType:tableLoad
                            }}
                        />


                    </Col>

                    <Col lg={8} xl={8} md={8} sm={12}>



                            <Card style={{background:"white", width:"350px",  height:"180px"}} className={'d-flex flex-column justify-content-center align-items-center mb-3'}>
                                {otherLoad==false?otherLoader:
                                    <>
                                        <div className={"h1"}>{sub}</div>
                                        <div className={"d-flex align-items-center justify-content-center"}>
                                            <div><FontAwesomeIcon icon={faUserPlus} className={"p-2 bg-info rounded-1"}/> </div>
                                            <div style={{marginLeft:"10px"}}><p className={"h2"}>Subscriber</p></div>
                                        </div>
                                    </>}
                            </Card>



                        <Card style={{background:"white", width:"350px",  height:"180px"}} className={'d-flex flex-column justify-content-center align-items-center mb-3'}>
                            {otherLoad==false?otherLoader:
                                <>
                                                    <div className={"h1"}>{application}</div>
                                                    <div className={"d-flex align-items-center justify-content-center"}>
                                                        <div><FontAwesomeIcon icon={faTable} className={"p-2 bg-info rounded-1"}/> </div>
                                                        <div style={{marginLeft:"10px"}}><p className={"h2"}>Application</p></div>
                                                    </div>
                                </>}
                        </Card>



                        <Card style={{background:"white", width:"350px",  height:"180px"}} className={'d-flex flex-column justify-content-center align-items-center mb-3'}>
                            {otherLoad==false?otherLoader:
                                <>
                                    <div className={"h1"}>{course}</div>
                                    <div className={"d-flex align-items-center justify-content-center"}>
                                        <div><FontAwesomeIcon icon={faPersonChalkboard} className={"p-2 bg-info rounded-1"}/> </div>
                                        <div style={{marginLeft:"10px"}}><p className={"h2"}>Course</p></div>
                                    </div>
                                </>}
                        </Card>



                        <Card style={{background:"white", width:"350px",  height:"180px"}} className={'d-flex flex-column justify-content-center align-items-center mb-3'}>
                            {otherLoad==false?otherLoader:
                                <>
                                                    <div className={"h1"}>{messege}</div>
                                                    <div className={"d-flex align-items-center justify-content-center"}>
                                                        <div><FontAwesomeIcon icon={faMessage} className={"p-2 bg-info rounded-1"}/> </div>
                                                        <div style={{marginLeft:"10px"}}><p className={"h2"}>Message</p></div>
                                                    </div>
                                </>}
                        </Card>



                    </Col>


                </Row>
            </Container>
        </Fragment>
    );
};

export default Home;
