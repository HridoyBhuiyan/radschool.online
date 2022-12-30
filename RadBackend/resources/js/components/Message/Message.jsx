import React, {Fragment, useEffect, useState} from 'react';
import {toast, ToastContainer} from "react-toastify";
import {Button} from "@mui/material";
import {Container, Modal} from "react-bootstrap";
import MaterialTable from "material-table";
import {TextField} from "@mui/material";

const Message = () => {
    const [allMessge, setAllMessge]=useState([])
    const [deleteModal, setDeleteModal]=useState(false)
    const [deleteID, setDeleteID]=useState("")
    const [noteModal, setNoteModal]=useState(false)
    const [noteID, setNoteID]=useState("")
    const [tableLoad, setTableLoad]=useState("overlay")

    const getTableLoad=async ()=>{
        await axios.get("/getContactMessage").then(x=> {
            if (x.status == 200) {
                setTableLoad("")
                setAllMessge(x.data)
            }})}


    const handleDelete=()=>{
        let id = deleteID;
        axios.post("/deleteContactMessage", id)
            .then(x=> {
                if (x.status == 200) {
                    toast.warn('Message Deleted!', {
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
        setDeleteModal(false)
        getTableLoad()
    }


    const handleNote=()=>{
        let id = noteID.id
        let note = document.getElementById("setNote").value;
        let noteJSON = {"id":id, "note":note}
        axios.post("/addContactNote", noteJSON)
            .then(x=>{
                if (x.status==200)
                {      toast.info('Note Taken!', {
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
            .catch(err=> {
                alert(err)
            })
        setNoteModal(false)
        getTableLoad()
    }


    const handleWatched=(a)=>{
        let id = a.id;
        axios.post("/watchedMessege", {"id":id})
            .then(x=>{})
            .catch(x=>{})
        getTableLoad()
    }


    let data = allMessge;
    let colum = [{ name: 'Name', field: 'name' },
        { title: 'Email', field: 'email'},
        { title: 'Message Time', field: 'visit_time'},
        { title: 'Message Date', field: 'send_date'},
        { title: 'Admin Note', field: 'note'}]

    useEffect(()=>{
        getTableLoad()

    },[])
    return (
        <Fragment>
            <Container fluid={true} className={"py-3"}  style={{overflowY:"scroll", height:"88vh"}}>
                <MaterialTable
                    title="Check All Messege" columns={colum} data={data}

                    detailPanel={[
                        {  icon: 'fullscreen', tooltip: 'Show Cover Letter',
                            render: rowData => {
                                if (rowData.watched==false){
                                    handleWatched(rowData)

                                }

                                return (
                                    <div className={"bg-light p-3"}>
                                        <div className="container">
                                            <h5 className={"text-info"}>Messege from {rowData.name}</h5>
                                            <p>{rowData.messege}</p>
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
                            rowStyle: rowData => ({backgroundColor: (rowData.watched==false) ? '#EEE' : '#FFF'}), loadingType:tableLoad}}/>
            </Container>


            {/*Note Modal*/}
            <Modal show={noteModal} onHide={()=>{setNoteModal(false)}} className={"mt-5"}>
                <Modal.Header closeButton>
                    <Modal.Title>Make a note</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <TextField id="setNote" label="Your Note" multiline rows={12} className={"w-100"} />

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
                    <Modal.Title>Do you want to delete {deleteID.name}'s application</Modal.Title>
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

export default Message;
