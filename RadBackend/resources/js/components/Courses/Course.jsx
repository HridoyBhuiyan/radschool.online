import React, {Fragment, useEffect, useState} from 'react';
import {Col, Container, Modal, Row} from "react-bootstrap";
import {toast, ToastContainer} from "react-toastify";
import {Button, TextField} from "@mui/material";
import MaterialTable from "material-table";
import ReactQuill from "react-quill";
import Form from 'react-bootstrap/Form';

const Course = () => {
    const [courseData, setCourseData] = useState([]);
    const [deleteModal, setDeleteModal]=useState(false);
    const [insertModal, setInsertModal]=useState(false);
    const [updateModal, setUpdateModal]=useState(false);
    const [id, setId]=useState({delete:"", updateData:""});
    const [updateData, setUpdateData]=useState('');
    const [text, setText]= useState('');
    const [tableLoad, setTableLoad]=useState("overlay");
    const [noteModal, setNoteModal]=useState(false)

    const handleTextEditor=(event)=>{
        setText(event)
    }

    const handleNewCourse=()=>{
        let details = text;
        let title = document.getElementById("cTitle").value;
        let description = document.getElementById("cDescription").value;
        let thumbnail = document.getElementById("formFile").files[0];
        let startDate = document.getElementById("cStart").value;
        let endDate = document.getElementById("cEnd").value;
        let prerequisite = document.getElementById("cPrerequisite").value;
        let cTeacher = document.getElementById("cTeacher").value;
        let cDuration = document.getElementById("cDuration").value;
        let cId = document.getElementById("cId").value;
        let cLocation = document.getElementById("cLocation").value;
        let cPrice = document.getElementById("cPrice").value;
        let cCategory = document.getElementById("courseCategory").value;
        console.log(text)
        let formData = new FormData();
        formData.append("details",details)
        formData.append("title",title)
        formData.append("description",description)
        formData.append("thumbnail",thumbnail)
        formData.append("startDate",startDate)
        formData.append("endDate",endDate)
        formData.append("prerequisite",prerequisite)
        formData.append("teacher",cTeacher)
        formData.append("cDuration",cDuration)
        formData.append("cId",cId)
        formData.append("cLocation",cLocation)
        formData.append("cPrice",cPrice)
        formData.append("category",cCategory)

        let config = {headers: {"Content-Type": "multipart/form-data"}};
        axios.post("/addNewCourse", formData, config)
            .then(x=>
            {
                console.log(x.data)
                if (x.status==200)
                {
                    toast.success('New Course Added', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setNoteModal(false)
                    if (x.data==1){
                        getCourseData()
                    }
                    setInsertModal(false)
                }
            }).catch(err=>{console.log(err)})

        if (details=="" || title=="" || description=="" || thumbnail==undefined || startDate=="" || endDate==""||prerequisite==""|| cTeacher==""|| cDuration==""||cId==""||cLocation==""||cPrice==""){
            let decission = window.confirm("Fillip all data filed. Unless this is not going to save! Still Quite?")
            if (decission){
                setInsertModal(false)
            }
            else {setInsertModal(true)}
        }

    }

    const handleUpdateCourse=()=>{
        let id = updateData.id;
        let uTitle = document.getElementById("uTitle").value;
        let uDescription = document.getElementById("uDescription").value;
        let details = text;
        let uFormFile = document.getElementById("uFormFile").files[0];
        let uStart = document.getElementById("uStart").value;
        let uEnd = document.getElementById("uEnd").value;
        let uPrerequisite = document.getElementById("uPrerequisite").value;
        let uDuration = document.getElementById("uDuration").value;
        let uTeacher = document.getElementById("uTeacher").value;
        let uId = document.getElementById("uId").value;
        let updateCourseCategory = document.getElementById("updateCourseCategory").value;
        let uLocation = document.getElementById("uLocation").value;
        let uPrice = document.getElementById("uPrice").value;
        console.log(text)
        let formData = new FormData();
        formData.append("id",id);
        formData.append("uTitle",uTitle);
        formData.append("uDescription",uDescription);
        formData.append("details",details);
        formData.append("uFormFile",uFormFile);
        formData.append("uStart",uStart);
        formData.append("uEnd",uEnd);
        formData.append("uPrerequisite",uPrerequisite);
        formData.append("uDuration",uDuration);
        formData.append("uTeacher",uTeacher);
        formData.append("uCategory",updateCourseCategory);
        formData.append("uId",uId);
        formData.append("uLocation",uLocation);
        formData.append("uPrice",uPrice);

        let config = {headers: {"Content-Type": "multipart/form-data"}};
        axios.post("/updateCourse", formData, config)
            .then(x=> {
                console.log(x.data)
                if (x.status==200)
                {      toast.info('Course Updated!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                    getCourseData()
                }
            }).catch(err=>{})
        setUpdateModal(false)
    }

    const handleDelete=(e)=>{
        let id = e;
        axios.post("/deleteCourses", {"id":id})
            .then(response=> {

                if (response.status==200)
                {      toast.warn('Course Deleted!', {
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
            .catch(error=>console.log(error));
        setDeleteModal(false)
        getCourseData()
    }

    const data = courseData;

    const colum=[
        { title: 'Course Title', field: 'course_name', cellStyle:{fontWeight:500, color:"#727272"} },
        { title: 'Course Category', field: 'category',},
        { title: 'Start Date', field: 'course_start' },
        { title: 'End Date', field: 'course_end' },
        { title: 'Course Duration', field: 'course_duration' },
        { title: 'Teacher', field: 'course_teacher' }]

    const addNewCourseOnClick=()=>{
        setInsertModal(true)
        setText("")
    }

    const getCourseData=async ()=>{
        axios.get("/api/radCourse")
            .then(x=>{
                if (x.status==200){
                    setCourseData(x.data)
                    setTableLoad(false)
                }
            })
    }



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


    useEffect(()=>{
        getCourseData()
    },[])

    return (
        <Fragment>
            <Container fluid={true}>
                <Container fluid={true} className={"my-3"} style={{overflowY:"scroll", height:"88vh"}}>

                    <Button onClick={addNewCourseOnClick} style={{background:"#49AAD7", width:"100%", height:60, fontSize:30}} className={"MuiPaper-root MuiPaper-elevation2 MuiPaper-rounded border-0 my-3 text-white"}>
                        Add New Course
                    </Button>

                    <MaterialTable
                        title="All course List" columns={colum} data={data}
                        actions={[
                            {icon: 'update', tooltip: 'Update Course',
                                onClick: (event, rowData) =>{
                                    setUpdateData(rowData)
                                    setUpdateModal(true)
                                    setText(rowData.detail)
                                   }},

                            {icon:'delete', tooltip: 'Delete Course',
                                onClick: (event, rowData) => {
                                setId({delete: rowData})
                                    setDeleteModal(true)
                                }}]
                        }
                        isLoading={true}
                        options={{ actionsColumnIndex: -1, paging:true, pageSizeOptions:[10, 20, 50], pageSize:10, loadingType:tableLoad}}/>
                </Container>
            </Container>

            {/*insert Modal*/}
            <Modal show={insertModal} fullscreen={true} onHide={()=>setInsertModal(false)} style={{zIndex:1201}}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TextField id="cTitle" label="Course Title"variant="standard" className={"p-2 w-100"}/>
                    <TextField id="cDescription" label="Course Description"variant="standard" className={"p-2 w-100"}/>
                    <Row className={"my-3"}>
                        <Col xl={8} lg={8} md={8}>
                            <ReactQuill modules={modules} formats={formats} value={text} onChange={handleTextEditor} style={{height:600}}/>
                        </Col>

                        <Col xl={4} lg={4} md={4} className={"d-flex flex-column"}>

                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Thumbnail Of Course</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                            <TextField id="cId" label="Course ID"  variant="standard" className={"px-2 py-1"}/>
                            <TextField id="cLocation" label="Location"  variant="standard" className={"px-2 py-1"}/>
                            <TextField id="cPrice" label="Price"  variant="standard" className={"px-2 py-1"}/>

                            <TextField id="cStart" type={"date"} label="Course Start"  variant="standard" className={"px-2 py-1"}/>
                            <TextField id="cEnd" type={"date"} label="Course End"  variant="standard" className={"px-2 py-1"}/>
                            <TextField id="cPrerequisite" label="Prerequisite"  variant="standard" className={"px-2 py-1"}/>
                            <TextField id="cDuration" label="Duration"  variant="standard" className={"px-2 py-1"}/>
                            <TextField id="cTeacher" label="Teacher Name"  variant="standard" className={"px-2 py-1"}/>

                            <div className="form-group px-2 pt-3">
                                <label>Select Category</label>
                                <select className="form-control" id="courseCategory">
                                    <option value="industrial">Industrial</option>
                                    <option value="medical">Medical</option>
                                    <option value="cbrne">CBRNE</option>
                                    <option value="hse">HSE</option>
                                </select>
                            </div>


                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Row className={"d-flex w-100"}>
                        <Col lg={6} xl={6} md={6} sm={6}><Button variant={'contained'} className={"w-100"} onClick={handleNewCourse}>Add Course</Button></Col>
                        <Col lg={6} xl={6} md={6} sm={6}><Button variant={"contained"} onClick={()=>setInsertModal(false)} className={"w-100 bg-danger"}>Close</Button></Col>
                    </Row>
                </Modal.Footer>
            </Modal>
            {/*insert Modal*/}



            {/*Delete Modal*/}
            <Modal show={deleteModal}  onHide={()=>setDeleteModal(false)}  className={"mt-5"}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Are You sure to delete?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Row className={"d-flex w-100"}>
                        <Col lg={6} xl={6} md={6} sm={6}><Button className={"w-100 btn btn-info"} onClick={()=>handleDelete(id.delete.id)}>Sure</Button></Col>
                        <Col lg={6} xl={6} md={6} sm={6}><Button onClick={()=>setDeleteModal(false)} className={"w-100 btn btn-primary"}>Close</Button></Col>
                    </Row>
                </Modal.Footer>
            </Modal>
            {/*Delete Modal*/}


            {/*Update Modal*/}
            <Modal show={updateModal} fullscreen={updateModal} onHide={()=>setUpdateModal(false)}  style={{zIndex:1201}}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TextField id="uTitle" defaultValue={updateData.course_name} label="Course Title"variant="standard" className={"p-2 w-100"}/>
                    <TextField id="uDescription" defaultValue={updateData.description} label="Course Description"variant="standard" className={"p-2 w-100"}/>
                    <Row className={"my-3"}>
                        <Col xl={8} lg={8} md={8}>
                            <ReactQuill  modules={modules} formats={formats} value={text}  onChange={handleTextEditor} style={{height:650}}/>
                        </Col>

                        <Col xl={4} lg={4} md={4} className={"d-flex flex-column"}>

                            <h6 className={"form-label"}>Update Thumnail</h6>
                            <div className={"d-flex flex-row bg-light rounded-1 align-items-center justify-content-center py-3"}>
                                <div className={"p-2"}>
                                    <img src={updateData.image} alt="old image" style={{height:100}}/>
                                </div>

                                <div className={"p-2"}>
                                    <Form.Group controlId="uFormFile" className="mb-3">
                                        <Form.Control type="file" />
                                    </Form.Group>
                                </div>
                            </div>

                            <TextField id="uId" label="Course ID" defaultValue={updateData.course_id} variant="standard" className={"p-2"}/>
                            <TextField id="uLocation" label="Location" defaultValue={updateData.price} variant="standard" className={"p-2"}/>
                            <TextField id="uPrice" label="Price" defaultValue={updateData.price} variant="standard" className={"p-2"}/>

                            <Row>
                                <Col lg={6} xl={6} md={6} sm={6} xs={6}>
                                    <TextField id="uStart" type={"date"} label="Course Start" defaultValue={updateData.course_start} variant="standard" className={"p-2 w-100"}/>
                                </Col>
                                <Col lg={6} xl={6} md={6} sm={6} xs={6}>
                                    <TextField id="uEnd" type={"date"} label="Course End" defaultValue={updateData.course_end} variant="standard" className={"p-2 w-100"}/>
                                </Col>
                            </Row>

                            <TextField id="uPrerequisite" label="Prerequisite" defaultValue={updateData.prerequisites} variant="standard" className={"p-2"}/>
                            <TextField id="uDuration" label="Duration" defaultValue={updateData.course_duration} variant="standard" className={"p-2"}/>
                            <TextField id="uTeacher" label="Teacher Name" defaultValue={updateData.course_teacher} variant="standard" className={"p-2"}/>

                            <div className="form-group px-2 pt-3">
                                <label>Select Category</label>
                                <select className="form-control" id="updateCourseCategory">
                                    <option value="industrial">Industrial</option>
                                    <option value="medical">Medical</option>
                                    <option value="cbrne">CBRNE</option>
                                    <option value="hse">HSE</option>
                                </select>
                            </div>


                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Row className={"d-flex w-100"}>

                        <Col lg={6} xl={6} md={6} sm={6}><Button  variant={'contained'} className={"w-100"} onClick={handleUpdateCourse}>Update Course</Button></Col>
                        <Col lg={6} xl={6} md={6} sm={6}><Button  variant={'contained'} onClick={()=>setUpdateModal(false)} className={"w-100 bg-danger"}>Close</Button></Col>
                    </Row>
                </Modal.Footer>
            </Modal>
            {/*Update Modal*/}

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

export default Course;
