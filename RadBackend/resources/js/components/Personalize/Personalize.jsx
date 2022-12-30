import React, {useState} from 'react';
import {Col, Container, Row, Modal} from "react-bootstrap";
import {Button, Card, Skeleton, TextField} from "@mui/material";
import VanillaJsSupport from "../../support/VanillaJsSupport";
import ReactQuill from "react-quill";
import {toast, ToastContainer} from "react-toastify";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Personalize = () => {
    const [modalState, setModalState]=useState('');
    const [passwordModal, setPasswordModal]=useState(false);
    const [valueEducation, setValueEducation]=useState("");
    const [valueBio, setValueBio]=useState('');
    const [data, setData]=useState('');
    const getData=async ()=>{
        await axios.get("/getUserInfo")
            .then((response)=>{
                setData(response.data)
            })
            .catch(error=>{console.log(error)})
    }



    const handleUpdate=()=>{
        let photo = document.getElementById("profilePhoto").files[0];
        let name=document.getElementById('nameID').value
        let fb=document.getElementById('fbID').value
        let tw=document.getElementById('twID').value
        let ld=document.getElementById('ldID').value
        let designation = document.getElementById("designationID").value;
        let shortDetails = document.getElementById("coverID").value;

        let formData = new FormData()
        formData.append("photo",photo)
        formData.append("name",name)
        formData.append("fb",fb)
        formData.append("tw",tw)
        formData.append("designation", designation)
        formData.append("shortDetails", shortDetails)
        formData.append("ld",ld)
        formData.append("bio",valueBio)
        formData.append("education",valueEducation)
        let config = {headers: {"Content-Type": "multipart/form-data"}}
        axios.post("updateProfileData",formData,config)
            .then(response=>{
                if (response.status==200){
                    toast.success('Contact Page Have Updated!', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                    setModalState(false)
                    getData()
                }})
    }

    const handlePasswordChange=()=>{
        const oldPassID = document.getElementById("oldPassID").value;
        const newPassID = document.getElementById("newPassID").value;
        const postJSON = {oldPass:oldPassID, newPass:newPassID}

        axios.post("passwordChange", postJSON)
            .then(response=>{
                if (response.status==200){
                    toast.info(response.data, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setPasswordModal(false)
                }
                else if (response.status==206){
                    toast.warn(response.data.messege, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }

            }
            )}

    useState(()=>{
       getData()
    },[])






    if (data==""){
        return <Skeleton animation="wave" width={"100%"} height={"100vh"} className={"m-0 p-0"}/>
    }

    else{
        return (
            <Container fluid={true}>
                <Row className={'mt-3'}>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                        <Card className={'p-3'}>
                            <p className={'h4'}>Profile Image</p>

                            {!data.thumbnail? <AccountCircle/>:
                                <img src={data.thumbnail} style={{maxHeight:250}}/>
                            }

                            <div className={"pt-3"}>
                                <p className={"my-4 h6"}>Name : {data.name}</p>
                                <p className={"my-4 h6"}>Login Email : {data.email}</p>
                                <p className={"my-4 h6"}>Designation : {data.designation}</p>
                                <p className={"my-4 h6"}>Cover Details : {data.shortDetails}</p>
                                <p className={"my-4 h6"}>Facebook : {data.fb_link}</p>
                                <p className={"my-4 h6"}>Linkedin : {data.ld_link}</p>
                                <p className={"my-4 h6"}>Twitter : {data.tw_link}</p>
                            </div>
                            <Button variant={'contained'} className={"w-100 bg-info"} onClick={()=>setModalState(true)}>Update Profile</Button>
                            <Button variant={'contained'} className={"w-100 mt-3"} onClick={()=>setPasswordModal(true)}>Update Password</Button>
                        </Card>
                    </Col>

                    <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                        <Card className={'p-2'}>
                            <p className={'h4'}>Bio_</p>
                            {!data.bio?
                                <div className="container mt-5">
                                    <div className="alert alert-warning" role="alert">
                                        No data available. Please Update Your profile and add bio state.
                                    </div>
                                </div>
                                :
                                <div dangerouslySetInnerHTML={{__html: data.bio}}/>}


                        </Card>
                        <Card className={'p-2 mt-4'}>
                            <p className={'h4'}>Education_</p>

                            {!data.education?
                                <div className="container mt-5">
                                    <div className="alert alert-warning" role="alert">
                                        No data available. Please Update Your profile and add bio state.
                                    </div>
                                </div>
                                :
                                <div dangerouslySetInnerHTML={{__html: data.education}}/>}


                        </Card>
                    </Col>
                </Row>


                {/*modal for update profile data*/}
                <Modal backdrop="static" show={modalState} onHide={()=>setModalState(false)} size={'xl'} className={"mt-5 rounded-1"}>

                    <Modal.Body>
                        <div>
                            <Row className={'mt-3'}  style={{minHeight:750}}>
                                <Col xl={4} lg={4} md={4} sm={12} xs={12}  style={{minHeight:750}}>
                                    <p className={'h4'}>Profile Image</p>
                                    {!data.thumbnail? <AccountCircle/>:
                                        <img src={data.thumbnail} style={{maxHeight:250}}/>
                                    }

                                    <div className={"pt-3"}>
                                        <input id={"profilePhoto"} type="file"/>
                                        <TextField id="nameID" defaultValue={data.name} className={"mt-3"} label="Name" variant="outlined" />
                                        {/*<TextField id="uTitle" defaultValue={updateData.course_name} label="Course Title"variant="standard" className={"p-2 w-100"}/>*/}
                                        <br/>
                                        <TextField id="designationID" defaultValue={data.designation} className={"mt-3"} label="Designation" variant="outlined" />
                                        <br/>
                                        <TextField id="coverID" defaultValue={data.shortDetails} className={"mt-3"} label="Cover Details" variant="outlined" />
                                        <br/>
                                        <TextField id="fbID" defaultValue={data.fb_link} className={"mt-3"} label="Facebook ID" variant="outlined" />
                                        <br/>
                                        <TextField id="twID" defaultValue={data.tw_link} className={"mt-3"} label="Twitter ID" variant="outlined" />
                                        <br/>
                                        <TextField id="ldID" defaultValue={data.ld_link} className={"mt-3"} label="Linkedin ID" variant="outlined" />
                                    </div>
                                </Col>

                                <Col xl={8} lg={8} md={8} sm={12} xs={12}  style={{minHeight:750}}>
                                    <div>
                                        <p className={'h4'}>Bio_</p>
                                        <ReactQuill  modules={VanillaJsSupport.modules} formats={VanillaJsSupport.formats}  defaultValue={data.bio} style={{height:285}} onChange={(event)=>setValueBio(event)}/>
                                    </div>

                                    <div className={"pt-3"}>
                                        <p className={'h4 mt-5'}>Education_</p>
                                        <ReactQuill defaultValue={data.education} modules={VanillaJsSupport.modules} formats={VanillaJsSupport.formats} style={{height:285}} onChange={(event)=>setValueEducation(event)}/>
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

                {/*modal for update password*/}


                <Modal show={passwordModal} onHide={()=>setPasswordModal(false)} className={"mt-5"}>
                    <Modal.Header closeButton>
                        <Modal.Title>Change Password !</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={'bg-light'}>
                        <TextField id="oldPassID" type={"password"} className={"mt-3 w-100"} label="Old Password" variant="outlined"/>
                        <br/>
                        <TextField id="newPassID" type={"password"} className={"mt-3 w-100"} label="New Password" variant="outlined"/>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="contained" className={'mx-1'} style={{background:"#4DADD9"}} onClick={handlePasswordChange}>
                            Save Changes
                        </Button>
                        <Button variant="contained" className={'mx-1'} onClick={()=>setPasswordModal(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <ToastContainer/>

            </Container>
        );
    }
};

export default Personalize;
