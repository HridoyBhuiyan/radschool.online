import React, {Fragment, useEffect, useState} from 'react';
import {Col, Card, Container, Form, Row} from "react-bootstrap";
import {Button, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {toast, ToastContainer} from "react-toastify";
import MaterialTable from "material-table";

const MemberList = () => {
    const [data, setData]= useState([]);
    const handleRegistration=()=>{
        let name = document.getElementById('nameID').value;
        let email = document.getElementById('emailID').value;
        let password = document.getElementById('passwordID').value;
        let postJSON = {name, email, password}
        axios.post('makeUser',postJSON)
            .then(response=>{
                if (response.status==200){
                    if (response.data.status===true){
                        toast.success(response.data.message, {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                    else {
                        toast.warn(response.data.message, {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                    getData()
                }
            })
    }

    const getData=async ()=>{
        await axios.get('/allUser')
            .then(response=>{
                setData(response.data)
            })
    }
    const column = [
            {title: "Name", field:"name"},
            {title: "Email", field:"email"},
            {title: "Member Since", field:"created_at"}]


    useEffect(()=>{
        getData()
    },[])

    return (
        <Fragment>
            <Container fluid={true}>
                <Row>
                    <Col lg={6} md={6} xl={6} sm={12} className={'px-3 memberListTable'}>
                        <Card className={'d-flex flex-column align-items-center pb-4 h-100'}>
                            <h3 className={'text-center mt-3'}>Existing user</h3>
                            <hr className={'w-75 shadow-lg'}/>

                            <MaterialTable columns={column} data={data} options={{pageSize:10}}/>

                        </Card>
                    </Col>



                    <Col lg={6} md={6} xl={6} sm={12} className={"px-3"}>
                        <Card className={'d-flex flex-column align-items-center h-100'}>
                            <h3 className={'text-center mt-3'}>Create user</h3>
                            <hr className={'w-75 shadow-lg'}/>

                            <Form className={'w-75 d-flex flex-column align-items-center'}>

                                <Box className={'w-75 my-3'}>
                                    <TextField fullWidth label="Email ID" type={"email"} id="emailID" />
                                </Box>

                                <Box className={'w-75 my-3'}>
                                    <TextField fullWidth label="Full Name" id="nameID" />
                                </Box>

                                <Box className={'w-75 my-3'}>
                                    <TextField fullWidth label="Password" type={'password'} id="passwordID" />
                                </Box>

                                <Button onClick={handleRegistration} variant={"contained"} className={"w-75 my-3"} style={{height:50,fontSize:16}}>Create</Button>
                            </Form>

                            <h4 className={'text-center mt-3'}>Caution</h4>
                            <hr className={'w-75 shadow-lg'}/>
                            <p className={"w-75 text-center my-3"}>New user creation mean, he will have same abilities like you.
                                After creating new user, he can modify this website, as like you can do.
                                That's why stay alert when you are going to make a new user.
                            </p>

                            <p className={"w-75 text-center my-2 pb-4"}>
                                We suggest you to make a unique password that will make new user's logging process more secure.
                            </p>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
        </Fragment>
    );
};

export default MemberList;
