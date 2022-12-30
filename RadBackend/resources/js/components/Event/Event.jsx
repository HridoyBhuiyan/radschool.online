import React, {Fragment, useEffect, useState} from 'react';
import ReactQuill from "react-quill";
import {Card, Col, Modal, Row, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Button} from "@mui/material";
import {toast} from "react-toastify";

const Event = () => {
    const [modalSet, setModalSet] = useState(false)
    const [text, setText] = useState("")
    const [updateModalSet, setUpdateModalSet] = useState(false)
    const [updateData, setUpdateData] = useState([])
    const [updateModalData, setUpdateModalData] = useState("")
    const [updateModalID, setUpdateModalID] = useState("")
    const [dataLoad, setDAtaLoad] = useState("")
    const getUpdatedData =async ()=>{
        await axios.get("/api/radEvent")
            .then(response=>{
                if (response.status==200){
                    setUpdateData(response.data)
                    setDAtaLoad(true)
                }
            })
    }

    const handleInsert=()=>{
        let detail = text;
        let eImage = document.getElementById("eventImage").files[0];
        let eTitle = document.getElementById("eventTitle").value;
        let eMonth = document.getElementById("eventMonth").value;
        let eDay = document.getElementById("eventDay").value;
        let eTopic = document.getElementById("eventTopic").value;
        let eSpeaker = document.getElementById("eventSpeaker").value;
        let eOutCome = document.getElementById("eventOutCome").value;
        let eJoin = document.getElementById("eventJoin").value;
        if (eJoin==""){
            eJoin="/"
        }

        let formData = new FormData();
        formData.append("detail",detail);
        formData.append("image",eImage);
        formData.append("title",eTitle);
        formData.append("month",eMonth);
        formData.append("date",eDay);
        formData.append("eTopic",eTopic);
        formData.append("eSpeaker",eSpeaker);
        formData.append("eOutCome",eOutCome);
        formData.append("eJoin",eJoin);

        let config = {headers: {"Content-Type": "multipart/form-data"}}

        axios.post("/eventDataAdd", formData, config)
            .then(x=>{
                if (x.status==200){
                    setModalSet(false)
                    toast.success('New Event Added', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                getUpdatedData()
            })

    }

    const handleChange=(x)=>{setText(x)}

    const handleUpdateModal=(x)=>{
        setUpdateModalData(x)
        setText(x.detail)
        setUpdateModalSet(true)
        setUpdateModalID(x.id)
    }

    const handleUpdate=()=>{
        let details = text
        let id = updateModalID
        let image = document.getElementById("uEventImage").files[0];
        let title = document.getElementById("uTitle").value;
        let month = document.getElementById("uMonth").value;
        let day = document.getElementById("uDay").value;
        let topic = document.getElementById("uTopic").value;
        let speaker = document.getElementById("uSpeaker").value;
        let outcome = document.getElementById("uOutCome").value;
        let jLink = document.getElementById("uJoin").value;

        let formData = new FormData()
        formData.append("details", details)
        formData.append("image", image)
        formData.append("id", id)
        formData.append("title", title)
        formData.append("month", month)
        formData.append("day", day)
        formData.append("topic", topic)
        formData.append("speaker", speaker)
        formData.append("outcome", outcome)
        formData.append("jLink", jLink)

        let config = {headers: {"Content-Type": "multipart/form-data"}}
        let url = "/eventDataUpdate";

        axios.post(url,formData, config)
            .then(x=>{
                console.log(x.data)
                if (x.status==200)
                {      toast.info('Event have updated!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                }
            })
            .catch(err=>console.log(err))
        setUpdateModalSet(false)
        getUpdatedData()
    }

    const handleDelete=(id)=>{
        let deleteID = id;
        let deleteJSON = {"id":deleteID}
        let url = "/eventDataDelete";
        axios.post(url,deleteJSON)
            .then(x=>{
                if (x.status==200)
                {      toast.warn('Event Deleted!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                }
                getUpdatedData()
            })
    }

    const handleNewEvent=()=>{
        setModalSet(true)
        setText("")
    }

    useEffect(()=>{
        getUpdatedData()
    },[])

    const showAllEvent = updateData.map(x=>{

        if (dataLoad==false){
            return (<Col className={" d-flex justify-content-center align-item-center py-2 eventAddCol rounded-1"} key={x.id} >
                <ShimmerPostItem card title text cta  style={{height:220}}/>
            </Col>)
        }
        else if (dataLoad==true){
            return(
                <Col className={" d-flex justify-content-center align-item-center py-2 eventAddCol rounded-1"} key={x.id}>

                    <div className={"card p-1 bg-white rounded-1"}>
                        <div onClick={()=>handleUpdateModal(x)} style={{cursor:"pointer"}}>
                            <div>
                                <img src={x.image} alt=""/>
                            </div>
                            <div className={"py-2 text-center"} style={{fontSize:19}}>{x.title}</div>
                        </div>

                        <span className={"p-2"}>
                                <div className={"d-flex justify-content-center align-item-center"}>
                                    <div className={"px-2"}>{x.day}</div>
                                    <div>{x.month}</div>
                                </div>
                                <FontAwesomeIcon icon={faTrash} className={"text-danger px-2"} onClick={()=>handleDelete(x.id)}/>
                            </span>
                    </div>
                </Col>)
        }
    })

    const modules = {
        toolbar: [
            [{ 'font': [] }],
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            ["link"],
            [{ align: [] }, { color: [] }, { background: [] }],
            ["clean"],
        ],

    };

    const formats = [
        "font",
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "align",
        "color",
        "background",
    ];

    return (
        <Fragment>
            <Row>
                <Col xl={3} lg={3} md={3} xs={6} sm={6} className={" d-flex justify-content-center align-item-center"}>
                    <Card className={"newEventCard p-5 d-flex justify-content-center align-item-center rounded-1"} onClick={handleNewEvent}>
                        <div className={" d-flex justify-content-center align-item-center rounded-1"}>
                            <FontAwesomeIcon icon={faAdd} className={"text-dark"}/>
                        </div>
                    </Card>
                </Col>
                <Col xl={9} lg={9} md={9} xs={6} sm={6} className={"d-flex justify-content-center flex-column"}>
                    <h3 style={{color:"rgb(77, 76, 76)"}} className={"py-2"}>Make a new event from your base</h3>
                    <h6 style={{color:"rgb(118, 118, 118)"}} className={"py-2"}>Event event will make a new story, memories and many more things. Hope it will gather good experience for all of you.</h6>
                </Col>
            </Row>


            {/*all post section*/}


            <h3 className="py-3 text-center" style={{color:"rgb(77, 76, 76)"}}>Make a new and successful event from here</h3>
            <Row className={"py-2"}>
                {showAllEvent}

            </Row>



            {/*add post modal  */}

            <Modal className={'mt-5'} show={modalSet} onHide={()=>setModalSet(false)} size="lg" scrollable={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a new Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className={"p-2"}>
                        <p style={{fontSize:12, color:"rgb(118, 118, 118)"}} className={"companyItem"}>Event Picture</p>
                        <Form.Group controlId="eventImage"  className="mb-3">
                            <Form.Control type="file"   />
                        </Form.Group>
                    </div>

                    <div className={"py-2 w-100"}>
                        <p style={{fontSize:12, color:"rgb(118, 118, 118)"}} className={"companyItem"}>Title</p>
                        <input id="eventTitle"  type="text"  className={"form-control"} placeholder={"Event Title"}/>
                    </div>

                    <div className={"py-2 w-100"}>
                        <p style={{fontSize:12, color:"rgb(118, 118, 118)"}} className={"companyItem"}>Date</p>
                        <div className={"d-flex"}>
                            <input id="eventMonth"  type="text"  className={"form-control w-50"} placeholder={"Month"}/>
                            <input id="eventDay"  type="number" className={"form-control w-50"} placeholder={"Day"}/>
                        </div>
                    </div>


                    {/**/}
                    <div className={"py-2 w-100"}>
                        <p style={{fontSize:12, color:"rgb(118, 118, 118)"}} className={"companyItem"}>Presentation</p>
                        <div className={"d-flex"}>
                            <input id="eventTopic"  type="text"  className={"form-control w-50"} placeholder={"Topic"}/>
                            <input id="eventSpeaker"  type="text" className={"form-control w-50"} placeholder={"Speaker"}/>
                        </div>
                    </div>

                    <div className={"py-2 w-100"}>
                        <p style={{fontSize:12, color:"rgb(118, 118, 118)"}} className={"companyItem"}>OutCome Of event</p>
                        <input id="eventOutCome"  type="text"  className={"form-control"} placeholder={"Explanation"}/>
                    </div>




                    <div className={"py-2 w-100"}>
                        <p style={{fontSize:12, color:"rgb(118, 118, 118)"}} className={"companyItem"}>Detail</p>
                        <ReactQuill value={text} onChange={handleChange} modules={modules} formats={formats} style={{height:200, marginBottom:20}}/>
                    </div>
                    {/**/}
                    <div className={"py-3 w-100"}>
                        <p style={{fontSize:12, color:"rgb(118, 118, 118)"}} className={"companyItem"}>Join Link</p>
                        <input id="eventJoin"  type="text"  className={"form-control"} placeholder={"URL here"}/>
                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleInsert}>Add Event</Button>
                    <Button variant="primary" onClick={()=>setModalSet(false)}>Close</Button>
                </Modal.Footer>
            </Modal>


            {/*update post modal*/}

            <Modal className={'mt-5'} show={updateModalSet} onHide={()=>setUpdateModalSet(false)} size="lg" scrollable={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Update this event data</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className={"p-2"}>
                        <Form.Group controlId="uEventImage"  className="mb-3">
                            <Form.Control type="file"   />
                        </Form.Group>
                    </div>

                    <div className={"py-2 w-100"}>
                        <p style={{fontSize:12, color:"rgb(118, 118, 118)"}} className={"companyItem"}>Event Title</p>
                        <input id="uTitle"  type="text" defaultValue={updateModalData.title} className={"form-control text-center"} placeholder={"Month"}/>
                    </div>

                    <div className={"py-2 w-100"}>
                        <p style={{fontSize:12, color:"rgb(118, 118, 118)"}} className={"companyItem"}>Date</p>
                        <div className={" d-flex"}>
                            <input id="uMonth" defaultValue={updateModalData.month} type="text"  className={"form-control w-50"} placeholder={"Month"}/>
                            <input id="uDay" defaultValue={updateModalData.day} type="number" className={"form-control w-50"} placeholder={"Day"}/>
                        </div>

                    </div>


                    {/**/}
                    <div className={"py-2 w-100"}>
                        <p style={{fontSize:12, color:"rgb(118, 118, 118)"}} className={"companyItem"}>Presentation</p>
                        <div className={"d-flex"}>
                            <input id="uTopic"  type="text" defaultValue={updateModalData.topic}   className={"form-control w-50"} placeholder={"Topic"}/>
                            <input id="uSpeaker"  type="text" defaultValue={updateModalData.speaker}  className={"form-control w-50"} placeholder={"Speaker"}/>
                        </div>
                    </div>

                    <div className={"py-2 w-100"}>
                        <p style={{fontSize:12, color:"rgb(118, 118, 118)"}} className={"companyItem"}>OutCome Of event</p>
                        <input id="uOutCome"  type="text" defaultValue={updateModalData.outcome}   className={"form-control"} placeholder={"Explanation"}/>
                    </div>




                    <div className={"py-2 w-100"} style={{marginBottom:20}}>
                        <p style={{fontSize:12, color:"rgb(118, 118, 118)"}} className={"companyItem"}>Detail</p>
                        <ReactQuill modules={modules} formats={formats} value={text} onChange={handleChange} defaultValue={text} style={{height:200, marginBottom:20}}/>
                    </div>
                    {/**/}
                    <div className={"py-3 w-100"}>
                        <p style={{fontSize:12, color:"rgb(118, 118, 118)"}} className={"companyItem"}>Join Link</p>
                        <input id="uJoin" defaultValue={updateModalData.join_link}   type="text"  className={"form-control"} placeholder={"URL here"}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleUpdate}>Update </Button>
                    <Button variant="danger" onClick={()=>setUpdateModalSet(false)}>Close</Button>
                </Modal.Footer>
            </Modal>

        </Fragment>
    );
};

export default Event;
