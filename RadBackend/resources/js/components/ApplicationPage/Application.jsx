import React, {Fragment, useEffect, useState} from 'react';
import {Container, Modal} from "react-bootstrap";
import {toast, ToastContainer} from "react-toastify";
import MaterialTable from "material-table";
import {Button, TextField} from "@mui/material";

const Application = () => {
    const [applicationData, setApplicationData] = useState([]);
    const [noteID, setNoteID] = useState("");
    const [deleteID, setDeleteID] = useState("");
    const [noteModal, setNoteModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [tableLoad, setTableLoad] = useState("overlay");

    const handleNote=()=>{
        let note = document.getElementById('setNote').value;
        let id = noteID.id;
        let noteJSON = {"id":id, "note":note};
        axios.post("/updateNote", noteJSON)
            .then(x=>{
                if (x.status==200)
                {
                    toast.info('Note Taken!', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setNoteModal(false)
                    getApplicationData()
                }})
    }


    const handleRead=(a)=>{
        let id = a.id;
        axios.post("/watchedApplication", {"id":id})
            .then(x=>{
                if (x.status==200){
                    getApplicationData()
                }
            })
            .catch(x=>{})
    }

    const handleDelete=()=>{
        let id = deleteID
        let deleteJSON={"id":id};
        axios.post("/deleteApplication",deleteJSON)
            .then(x=>{
                if (x.status==200){
                    toast.warn('Application Deleted!', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setDeleteModal(false)
                    getApplicationData()
                }}).catch()
    }


    let data = applicationData
    let colum = [
        { title: 'First Name', field: 'first_name' },
        { title: 'Last Name', field: 'last_name' },
        { title: 'Email', field: 'email'},
        { title: 'Course ID', field: 'course_id'},
        { title: 'Application Date', field: 'date'},
        { title: 'Current Status', field: 'job_title'},
        { title: 'Phone No.', field: 'phone_number'},
        { title: 'Admin Note', field: 'take_note'},
    ]

    const getApplicationData=async ()=>{
        await axios.get("/allApplication")
            .then(x=> {
                if (x.status==200){
                    setApplicationData(x.data)
                    setTableLoad("")
                }
            })
    }

    useEffect(()=>{
        getApplicationData()
        console.log("this is consoled")
    },[])


    return (
        <Fragment>
            <Container fluid={true}>
                <MaterialTable
                    title="Check All Application" columns={colum} data={data}
                    detailPanel={[
                        {  icon: 'fullscreen', tooltip: 'Show Cover Letter',
                            render: rowData => {
                                if (rowData.watched==false){
                                    handleRead(rowData);
                                }
                                return (
                                    <div className={"bg-light p-3"}>
                                        <div className="container">
                                            <h5 className={"text-info"}>Cover Letter of {rowData.first_name}</h5>
                                            <p>{rowData.cover_letter}</p>
                                        </div>
                                    </div>
                                )
                            }}
                    ]}

                    actions={[
                        {icon: 'note', tooltip: 'Take Note',
                            onClick: (event, rowData) =>{
                                setNoteID(rowData)
                                setNoteModal(true)
                            }},

                        {icon: 'delete', tooltip: 'Delete Schedule',
                            onClick: (event, rowData) => {
                                setDeleteID(rowData)
                                setDeleteModal(true)
                            }},
                    ]}

                    isLoading={true}

                    options={
                        {actionsColumnIndex: -1, paging:true, pageSizeOptions:[10, 20, 50], pageSize:10,
                            rowStyle: rowData => ({backgroundColor: (rowData.watched==false) ? '#EEE' : '#FFF',}), loadingType:tableLoad
                        }}/>
            </Container>



            {/*Note Modal*/}
            <Modal show={noteModal} onHide={()=>{setNoteModal(false)}} className={"mt-5"}>
                <Modal.Header closeButton>
                    <Modal.Title>Make a note</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <TextField
                        id="setNote"
                        label="Your Note"
                        multiline
                        rows={12}
                        className={"w-100"}
                    />


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleNote}>
                        Take Note
                    </Button>
                    <Button variant="primary" onClick={()=>{setNoteModal(false)}}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


            {/*Delete Modal*/}


            <Modal show={deleteModal} onHide={()=>{setDeleteModal(false)}} className={"mt-5"}>
                <Modal.Header closeButton>
                    <Modal.Title>Do you want to delete {deleteID.first_name}'s application</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                    <Button variant="primary" onClick={()=>{setDeleteModal(false)}}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />


        </Fragment>
    );
};

export default Application;
