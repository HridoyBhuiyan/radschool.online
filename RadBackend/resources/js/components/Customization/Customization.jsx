import React, {Fragment, useState} from 'react';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAddressCard, faAt, faCalendarCheck, faClapperboard, faHome, faNewspaper, faPhone, faScaleBalanced, faTag } from "@fortawesome/free-solid-svg-icons";
import {ToastContainer} from "react-toastify";
import HomeTopBannerComponent from "./sub/HomeTopBannerComponent";
import FotterPhoneComponent from "./sub/FotterPhoneComponent";
import FooterEmailComponent from "./sub/FooterEmailComponent";
import FooterAddressComponent from "./sub/FooterAddressComponent";
import NewsLetterComponent from "./sub/NewsLetterComponent";
import PrivacySectionComponent from "./sub/PrivacySectionComponent";
import VideoSectionComponent from "./sub/VideoSectionComponent";

const Customization = () => {

    const [homeModal, setHomeModal] = useState(false)

    const [videoModal, setVideoModal]= useState(false);
    const [privacyModal, setPrivacyModal] = useState(false);
    const [newsLetterModal, setNewsLetterModal]=useState(false);
    const [addressModal, setAddressModal]=useState(false);
    const [emailModal, setEmailModal]=useState(false);
    const [phoneModal, setPhoneModal]=useState(false);

    const handleModalCall=(x)=>{
        if (x==1){setHomeModal(true)}
        else if(x==4){setVideoModal(true)}
        else if(x==5){setPrivacyModal(true)}
        else if(x==6){setNewsLetterModal(true)}
        else if(x==7){setAddressModal(true)}
        else if(x==8){setEmailModal(true)}
        else if(x==9){setPhoneModal(true)}
    }



    return (
        <Fragment>
            <div>
                <Container  className={"py-3 px-5"}>
                    <h5 className={"text-center py-3"} style={{color:"rgba(162,147,87,0.88)"}}>Update Company About</h5>
                    <Row>

                        <Col xl={4} lg={4} md={4} xs={6} sm={6} className={"py-4 d-flex justify-content-center align-items-center"}>
                            <Card style={{width:150, height:150, cursor:"pointer"}} className={"d-flex justify-content-center align-items-center"} onClick={()=>handleModalCall(1)}>
                                <FontAwesomeIcon icon={faHome} style={{color:"#13bc86"}} className={"p-1"}/>
                                <span className={"pt-2 "}>Home Top</span>
                            </Card>
                        </Col>


                        <Col xl={4} lg={4} md={4} xs={6} sm={6} className={"py-4 d-flex justify-content-center align-items-center"}>
                            <Card style={{width:150, height:150, cursor:"pointer"}} className={"d-flex justify-content-center align-items-center"} onClick={()=>handleModalCall(4)}>
                                <FontAwesomeIcon icon={faClapperboard} style={{color:"rgba(162,147,87,0.88)"}} className={"p-1"}/>
                                <span className={"pt-2 "}>Video Section</span>
                            </Card>
                        </Col>

                        <Col xl={4} lg={4} md={4} xs={6} sm={6} className={"py-4 d-flex justify-content-center align-items-center"}>
                            <Card style={{width:150, height:150, cursor:"pointer"}} className={"d-flex justify-content-center align-items-center"} onClick={()=>handleModalCall(5)}>
                                <FontAwesomeIcon icon={faScaleBalanced} style={{color:"#dc7777"}} className={"p-1"}/>
                                <span className={"pt-2 "}>Privacy</span>
                            </Card>
                        </Col>

                        <Col xl={4} lg={4} md={4} xs={6} sm={6} className={"py-4 d-flex justify-content-center align-items-center"}>
                            <Card style={{width:150, height:150, cursor:"pointer"}} className={"d-flex justify-content-center align-items-center"} onClick={()=>handleModalCall(6)}>
                                <FontAwesomeIcon icon={faNewspaper} style={{color:"#d1ad58"}} className={"p-1"}/>
                                <span className={"pt-2 "}>Newsletter</span>
                            </Card>
                        </Col>

                        <Col xl={4} lg={4} md={4} xs={6} sm={6} className={"py-4 d-flex justify-content-center align-items-center"}>
                            <Card style={{width:150, height:150, cursor:"pointer"}} className={"d-flex justify-content-center align-items-center"} onClick={()=>handleModalCall(7)}>
                                <FontAwesomeIcon icon={faAddressCard} style={{color:"#58afd1"}} className={"p-1"}/>
                                <span className={"pt-2 "}>Footer Address</span>
                            </Card>
                        </Col>

                        <Col xl={4} lg={4} md={4} xs={6} sm={6} className={"py-4 d-flex justify-content-center align-items-center"}>
                            <Card style={{width:150, height:150, cursor:"pointer"}} className={"d-flex justify-content-center align-items-center"} onClick={()=>handleModalCall(8)}>
                                <FontAwesomeIcon icon={faAt} style={{color:"#38b848"}} className={"p-1"}/>
                                <span className={"pt-2 "}>Footer Email</span>
                            </Card>
                        </Col>

                        <Col xl={4} lg={4} md={4} xs={6} sm={6} className={"py-4 d-flex justify-content-center align-items-center"}>
                            <Card style={{width:150, height:150, cursor:"pointer"}} className={"d-flex justify-content-center align-items-center"} onClick={()=>handleModalCall(9)}>
                                <FontAwesomeIcon icon={faPhone} style={{color:"rgba(162,147,87,0.71)"}} className={"p-1"}/>
                                <span className={"pt-2 "}>Footer Phone</span>
                            </Card>
                        </Col>

                    </Row>

                </Container>
            </div>


            <Modal show={homeModal} onHide={()=>setHomeModal(false)} className={'mt-5'}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Home Top</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <HomeTopBannerComponent/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setHomeModal(false)} className={"w-100"}>Close</Button>
                </Modal.Footer>
            </Modal>




            <Modal show={videoModal} onHide={()=>setVideoModal(false)} className={'mt-5'}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Video Section</Modal.Title>
                </Modal.Header>
                <Modal.Body><VideoSectionComponent/></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setVideoModal(false)} className={"w-100"}>Close</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={privacyModal} onHide={()=>setPrivacyModal(false)} className={'mt-5'}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Privacy Section</Modal.Title>
                </Modal.Header>
                <Modal.Body><PrivacySectionComponent/></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setPrivacyModal(false)} className={"w-100"}>Close</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={newsLetterModal} onHide={()=>setNewsLetterModal(false)} className={'mt-5'}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Newsletter Section</Modal.Title>
                </Modal.Header>
                <Modal.Body><NewsLetterComponent/></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setNewsLetterModal(false)} className={"w-100"}>Close</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={addressModal} onHide={()=>setAddressModal(false)} className={'mt-5'}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Address Section</Modal.Title>
                </Modal.Header>
                <Modal.Body><FooterAddressComponent/></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setAddressModal(false)} className={"w-100"}>Close</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={emailModal} onHide={()=>setEmailModal(false)} className={'mt-5'}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Email Section</Modal.Title>
                </Modal.Header>
                <Modal.Body><FooterEmailComponent/></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setEmailModal(false)} className={"w-100"}>Close</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={phoneModal} onHide={()=>setPhoneModal(false)} className={'mt-5'}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Phone Section</Modal.Title>
                </Modal.Header>
                <Modal.Body><FotterPhoneComponent/></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setPhoneModal(false)} className={"w-100"}>Close</Button>
                </Modal.Footer>
            </Modal>



            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>


        </Fragment>
    );
};

export default Customization;
