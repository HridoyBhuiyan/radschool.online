import React, {Fragment, useEffect, useState} from 'react';
import {Col, Modal, Row} from "react-bootstrap";
import {Button, Card, Skeleton, TextField} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {Typography} from "@material-ui/core";
import ReactQuill from "react-quill";
import VanillaJsSupport from "../../support/VanillaJsSupport";
import {toast, ToastContainer} from "react-toastify";
const AllProfile = () => {
    const [modalState, setModalSate]=useState(false);
    const [data, setData]=useState([]);
    const [modalData, setModalData]=useState(null);
    const [currentID, setCurrentID]=useState(null);
    const [valueBio, setValueBio]=useState("");
    const [valueEducation, setValueEducation]=useState("");
    const [isLoading, setLoading]=useState(true);

    const getData = async ()=>{
        await axios.get("api/radUserAbout")
            .then(response=>setData(response.data))
    }
    const handleUpdate=()=>{
        let profilePhoto = document.getElementById("profilePhoto").files[0]
        let nameID = document.getElementById("nameID").value;
        let designationID = document.getElementById("designationID").value;
        let coverID = document.getElementById("coverID").value;
        let fbID = document.getElementById("fbID").value;
        let twID = document.getElementById("twID").value;
        let ldID = document.getElementById("ldID").value;

        let formData = new FormData();
        formData.append("profilePhoto",profilePhoto)
        formData.append("nameID", nameID)
        formData.append("designationID", designationID)
        formData.append("coverID",coverID)
        formData.append("fbID", fbID)
        formData.append("twID",twID)
        formData.append("ldID", ldID)
        formData.append("bio", valueBio)
        formData.append("education", valueEducation)
        formData.append("id", currentID)

        axios.post('updateProfileEachData',formData)
            .then(response=> {
                if (response.status==200){
                    toast.info('Profile Updated!', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })

                }
            })
        setModalSate(false)

    }


    const getModalState=async (id)=>{
        setCurrentID(id)
        setModalSate(true)
        await axios.get("api/radUserAbout/"+id)
            .then(response=>{
                setLoading(false)
              setModalData(response.data)
            })
    }


    const allUser= data.map((item, index)=>{
        return(
            <Col lg={4} xl={4} md={4} sm={12} key={index}>
                <Card className={'p-2 d-flex flex-column align-items-center'}>
                    {!item.thumbnail?<AccountCircle style={{fontSize:80, height:100}}/>
                        :
                        <img src={item.thumbnail} style={{fontSize:80, height:100}}/>
                    }
                    <Typography variant={"h5"} className={'mb-4'}>{item.name}</Typography>
                    <Button variant={"contained"} onClick={()=>getModalState(item.id)} className={"w-100"}>See & Edit Profile</Button>
                </Card>
            </Col>
        )
    })


    useEffect(()=>{
        getData()
    },[])


    return (
        <Fragment>
            <Row>
                {allUser}
            </Row>



            <Modal backdrop="static" show={modalState} onHide={()=>setModalState(false)} size={'xl'} className={"mt-5 rounded-1"}>

                <Modal.Body>
                    {isLoading==true?
                        <Skeleton animation="wave" width={"100%"} height={"100vh"} className={"m-0 p-0"}/>
                        :
                        <div>
                            <Row className={'mt-3'}  style={{minHeight:750}}>
                                <Col xl={4} lg={4} md={4} sm={12} xs={12}  style={{minHeight:750}}>
                                    <p className={'h4'}>Profile Image</p>
                                    {modalData && modalData.thumbnail==null? <AccountCircle/>:
                                        <img src={modalData && modalData.thumbnail} style={{maxHeight:250}}/>
                                    }
                                    <div className={"pt-3"}>
                                        <input id={"profilePhoto"} type="file"/>
                                        <TextField id="nameID" defaultValue={modalData && modalData.name} className={"mt-3"} label="Name" variant="outlined" />
                                        <br/>
                                        <TextField id="designationID" defaultValue={modalData && modalData.designation} className={"mt-3"} label="Designation" variant="outlined" />
                                        <br/>
                                        <TextField id="coverID" defaultValue={modalData && modalData.shortDetails} className={"mt-3"} label="Cover Details" variant="outlined" />
                                        <br/>
                                        <TextField id="fbID" defaultValue={modalData && modalData.fb_link} className={"mt-3"} label="Facebook ID" variant="outlined" />
                                        <br/>
                                        <TextField id="twID" defaultValue={modalData && modalData.tw_link} className={"mt-3"} label="Twitter ID" variant="outlined" />
                                        <br/>
                                        <TextField id="ldID" defaultValue={modalData && modalData.ld_link} className={"mt-3"} label="Linkedin ID" variant="outlined" />
                                    </div>

                                </Col>

                                <Col xl={8} lg={8} md={8} sm={12} xs={12}  style={{minHeight:750}}>
                                    <div>
                                        <p className={'h4'}>Bio_</p>
                                        <ReactQuill  modules={VanillaJsSupport.modules} formats={VanillaJsSupport.formats}  defaultValue={modalData && modalData.bio} style={{height:285}} onChange={(event)=>setValueBio(event)}/>
                                    </div>

                                    <div className={"pt-3"}>
                                        <p className={'h4 mt-5'}>Education_</p>
                                        <ReactQuill defaultValue={modalData && modalData.education} modules={VanillaJsSupport.modules} formats={VanillaJsSupport.formats} style={{height:285}} onChange={(event)=>setValueEducation(event)}/>
                                    </div>

                                </Col>
                            </Row>
                        </div>
                    }



                </Modal.Body>
                <Modal.Footer>
                    <div className={"w-100 d-flex align-items-center justify-content-around"}>

                        <Button variant="contained" className={"w-25 "} onClick={handleUpdate}>
                            Save Changes
                        </Button>
                        <Button variant="contained" className={"w-25 bg-danger "} onClick={()=>setModalSate(false)}>
                            Close
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>

            <ToastContainer/>


        </Fragment>
    );
};

export default AllProfile;
