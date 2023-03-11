import React, {Fragment, useEffect, useState} from 'react';
import {Col, Modal, Row} from "react-bootstrap";
import {Button, Card, TextField} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {Typography} from "@material-ui/core";
import ReactQuill from "react-quill";
import VanillaJsSupport from "../../support/VanillaJsSupport";
import {toast, ToastContainer} from "react-toastify";

const AllProfile = () => {
    const [data, setData]= useState([]);
    const [modalState, setModalState]= useState(false);
    const [currentData, setCurrentData]= useState("");
    const [valueEducation, setValueEducation]= useState("");
    const [valueBio, setValueBio]= useState("");
    const [currentID, setCurrentID]= useState("");
    const getData=async ()=>{
        axios.get("api/radUserAbout")
            .then((response)=>{
                setData(response.data)
            })
    }


    const handleUpdate=()=>{
        let photo =document.getElementById("profilePhoto").files[0];
        let name =document.getElementById("nameID").value;
        let designation =document.getElementById("designationID").value;
        let cover =document.getElementById("coverID").value;
        let fb =document.getElementById("fbID").value;
        let tw =document.getElementById("twID").value;
        let ld =document.getElementById("ldID").value;

        let formData = new FormData()
        formData.append("id", currentID)
        formData.append("photo", photo)
        formData.append("name",name)
        formData.append("designation",designation)
        formData.append("cover",cover)
        formData.append("fb",fb)
        formData.append("tw",tw)
        formData.append("ld",ld)
        formData.append("education",valueEducation)
        formData.append("bio", valueBio)

        axios.post('updateProfileEachData', formData)
            .then((response)=>{
                if (response.status==200){
                    getData()
                    setModalState(false)
                }
                toast.success('Information Updated!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })

    }

    const handleModal=(item)=>{
        setModalState(true)
        setCurrentData(item)
        setCurrentID(item.id)
    }

    const allData = data.map((item, index)=>{
        return(
            <Col xl={4} lg={4} xxl={4} md={4} xs={12} sm={12} key={index}>
                <Card className={'d-flex flex-column align-items-center'} onClick={()=>handleModal(item)} role={"button"} style={{height:300}}>
                    {!item.thumbnail?
                        <AccountCircle style={{fontSize:80}} className={"my-3"}/>
                        :
                        <img src={item.thumbnail} style={{height:80, width:80}} className={"rounded-circle my-3"}/>
                    }

                    <Typography variant={'h4'} className={'pt-3 pb-2 text-center'}>{item.name}</Typography>
                    <Button variant={'contained'} className={'my-2 py-2'}>Check & Edit</Button>
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
                {allData}
            </Row>



            <Modal backdrop="static" show={modalState} onHide={()=>setModalState(false)} size={'xl'} className={"mt-5 rounded-1"}>
                <Modal.Body>
                    {console.log(currentData)}
                    <div>
                        <Row className={'mt-3'}  style={{minHeight:750}}>
                            <Col xl={4} lg={4} md={4} sm={12} xs={12}  style={{minHeight:750}}>
                                <p className={'h4'}>Profile Image</p>

                                {!currentData.thumbnail?
                                    <AccountCircle style={{fontSize:80}} className={"my-3"}/>
                                    :
                                    <img src={currentData.thumbnail} style={{height:80, width:80}} className={"rounded-circle my-3"}/>
                                }

                                <div className={"pt-3"}>
                                    <input id={"profilePhoto"} type="file"/>
                                    <TextField id="nameID" defaultValue={currentData.name} className={"mt-3"} label="Name" variant="outlined" />
                                    <br/>
                                    <TextField id="designationID" defaultValue={currentData.designation} className={"mt-3"} label="Designation" variant="outlined" />
                                    <br/>
                                    <TextField id="coverID" defaultValue={currentData.short_description} className={"mt-3"} label="Cover Details" variant="outlined" />
                                    <br/>
                                    <TextField id="fbID" defaultValue={currentData.facebook} className={"mt-3"} label="Facebook ID" variant="outlined" />
                                    <br/>
                                    <TextField id="twID" defaultValue={currentData.twitter} className={"mt-3"} label="Twitter ID" variant="outlined" />
                                    <br/>
                                    <TextField id="ldID" defaultValue={currentData.linkedin} className={"mt-3"} label="Linkedin ID" variant="outlined" />
                                </div>
                            </Col>

                            <Col xl={8} lg={8} md={8} sm={12} xs={12}  style={{minHeight:750}}>
                                <div>
                                    <p className={'h4'}>Bio_</p>
                                    <ReactQuill  modules={VanillaJsSupport.modules} formats={VanillaJsSupport.formats}  defaultValue={currentData.bio} style={{height:285}} onChange={(event)=>setValueBio(event)}/>
                                </div>

                                <div className={"pt-3"}>
                                    <p className={'h4 mt-5'}>Education_</p>
                                    <ReactQuill defaultValue={currentData.education} modules={VanillaJsSupport.modules} formats={VanillaJsSupport.formats} style={{height:285}} onChange={(event)=>setValueEducation(event)}/>
                                </div>

                            </Col>
                        </Row>
                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <div className={"w-100 d-flex align-items-center justify-content-around"}>

                        <Button variant="contained" className={"w-25 "} onClick={handleUpdate}>
                            Save Changes
                        </Button>
                        <Button variant="contained" className={"w-25 bg-danger "} onClick={()=>setModalState(false)}>
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
