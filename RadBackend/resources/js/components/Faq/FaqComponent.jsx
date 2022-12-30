import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {Form, Modal} from 'react-bootstrap';
import {Fragment, useEffect, useState} from "react";
import {Button, Card} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import ReactQuill from "react-quill";

export default function FaqComponent() {
    const [value, setValue] = useState("");
    const[deleteModal, setDeleteModal]=useState(false);
    const[deleteID, setDeleteID]=useState("");
    const[updateModal, setUpdateModal]=useState(false);
    const[updateData, setUpdateData]=useState("");
    const [data, setData]= useState([]);
    const getData= async ()=>{
        await axios.get("/allFaq")
            .then(response=>{
                setData(response.data)
            })
    }
    const modules={
        toolbar: [
            [{ 'font': [] }], [{ header: [1, 2, 3, false] }], ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            ["link"], [{ align: [] }, { color: [] }, { background: [] }], ["clean"],],};

    const formats = ["font", "header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "align", "color", "background"];

    const handleInsertTextEditor=()=>{
        let question = document.getElementById("insertQuestion").value
        let postJson = {
            question:question,
            answer: value}
        axios.post('/insertFaq',postJson)
            .then(response=>{
                if (response.status==200){getData()}
            })
        setValue("")
        document.getElementById('insertQuestion').value=""
    }

    const handleDeleteFaqModal=(id)=>{
        setDeleteModal(true)
        setDeleteID(id)
    }

    const handleEditFaqModal=(item)=>{
        setUpdateModal(true)
        setUpdateData(item)
        console.log(item)
    }

    const handleUpdateModal=()=>{
        let question=document.getElementById("UpdateQuestion").value;
        let postJSON = {question:question, answer:value, id:updateData.id}
        axios.post("/updateFaq", postJSON)
            .then(response=> {
                if (response.status==200){
                    setUpdateModal(false)
                    getData()
                }
            })
    }

    const deleteFaq=()=>{
        axios.post("/deleteFaq", {"id":deleteID})
            .then(response=>{
                if (response.status==200){
                    getData()
                }
            })
        setDeleteModal(false)
    }

    useEffect(()=>{
       getData()
    },[])

    const ShowFaQ=data.map((item, index)=>{
        return(
            <Accordion key={index}>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography>{item.question}</Typography>
                <div>
                    <Button variant={'contained'} className={"mx-2"} onClick={()=>handleEditFaqModal(item)}>
                        <FontAwesomeIcon icon={faEdit} style={{fontSize:14}} className={"mx-1"}/>Edit</Button>

                    <Button variant={'contained'} className={"mx-2 bg-danger"} onClick={()=>handleDeleteFaqModal(item.id)}>
                        <FontAwesomeIcon icon={faTrash} style={{fontSize:14}} className={"mx-1"}/>Delete</Button>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <Typography dangerouslySetInnerHTML={{__html:item.answer}}></Typography>
            </AccordionDetails>
        </Accordion>
        )
    })



    return (
        <Fragment>
            <div className={"mb-4"}>
                <Card className={'p-4 shadow-lg'}>
                    <Typography className={'text-center'} variant={"h5"}>Add a new FAQ</Typography>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Frequenter asking question</Form.Label>
                            <input className={'form-control'} id={"insertQuestion"} type="text" placeholder="Users Question here" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Answer</Form.Label>

                            <ReactQuill theme="snow" modules={modules} formats={formats} value={value} onChange={(event)=>setValue(event)} style={{height:130}}/>

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        </Form.Group>
                        <Button variant="contained" className={"bg-info mt-5"} onClick={handleInsertTextEditor}>
                            Add On The List
                        </Button>
                    </Form>
                </Card>
            </div>
            {ShowFaQ}


            <div>
                {/*Delete Modal*/}
                <Modal show={deleteModal} onHide={()=>setDeleteModal(false)} className={'mt-5'}>
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure to delete?</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer >
                        <Button variant="contained" onClick={deleteFaq} className={'bg-danger mx-1'}>
                            Delete
                        </Button>
                        <Button variant="contained" onClick={()=>setDeleteModal(false)} className={'bg-info mx-1'}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/*Delete Modal*/}


            {/*Update Modal*/}
            <Modal size={"xl"} show={updateModal} onHide={()=>setUpdateModal(false)} className={'mt-5'}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a new FAQ</Modal.Title>
                </Modal.Header>
                <Modal.Body className={"p-0 m-0"}>
                    <Card className={'p-4 shadow-sm'}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Frequenter asking question</Form.Label>
                                <input defaultValue={updateData.question} className={'form-control'} id={"UpdateQuestion"} type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Answer</Form.Label>

                                <ReactQuill theme="snow" modules={modules} formats={formats} defaultValue={updateData.answer} onChange={(event)=>setValue(event)} style={{height:130}}/>

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            </Form.Group>
                           <div className={'d-flex align-items-center justify-content-between'} >


                            <Button variant="contained" className={"bg-info mt-5 w-25"} onClick={handleUpdateModal}>
                                Update Question
                            </Button>
                            <Button variant="contained"  className={"bg-danger mt-5 w-25"} onClick={()=>setUpdateModal(false)}>
                                Not now
                            </Button>
                           </div>
                        </Form>
                    </Card>
                </Modal.Body>

            </Modal>
            {/*Update Modal*/}



        </Fragment>
    );
}
