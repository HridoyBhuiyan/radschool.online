import React, {Fragment, useEffect} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import {Button, Card, TextField} from "@mui/material";
import {toast, ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";
import Cookies from "universal-cookie/es6";

const LoginPage = () => {
    let navigation = useNavigate();
    let cookie = new Cookies()

    const handleLogin=()=>{
        let email = document.getElementById("userEmail").value;
        let password = document.getElementById('passWord').value;
        let postJSON = {email, password}
        axios.post("/login",postJSON)
            .then(response=>{
                if (response.status==200){
                    if (response.data==true){
                        toast.success('Login Success!', {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        cookie.set("isLogin",true,{maxAge:60*60*24*3})
                        navigation("/")
                    }

                    else {handleWrongPassword(response)}

                }
            })}


    const loginByEnterKey=(e)=>{
        if(e.code=="Enter"){
            handleLogin()
        }}


    const handleWrongPassword=(response)=>{
        if (response.data.blocking_time==null){
            toast.warn('Wrong Password or email !', {
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
            toast.error("You are blocked for "+response.data.blocking_time+" seconds!", {
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

    }


    useEffect(()=>{
       if (cookie.get("isLogin")){
           navigation('/')
       }
    },[])


    if (cookie.get("isLogin")){
        return (
            <Fragment>
                <h1 className={'mt-5 text-center'}>You are all ready logged In</h1>
            </Fragment>)
    }
    else {
        return (

            <Fragment>
                <div style={{background: "#eceaea"}}>

                    <Container className="d-flex align-items-center vh-100 flex-column">

                        <div className="py-4 my-4 d-flex align-items-center flex-column">

                            <img src="https://admin.radschool.online/images/logo.png" alt="Site logo" width="200" className="py-4"/>

                            <Card className="align-items-center p-4 shadow-lg">
                                <h2 className="py-4 text-center text-info">Admin Login</h2>
                                <input onKeyUp={(e)=>loginByEnterKey(e)} id="userEmail" placeholder="Email" type={"email"} className="form-control my-3 loginInput text-center"/>
                                <input onKeyUp={(e)=>loginByEnterKey(e)} id="passWord" type="password" placeholder="Password" className="form-control my-2 loginInput text-center"/>
                                <Button onClick={handleLogin} variant={"contained"} className="btn-info loginInput mt-2">Submit</Button>
                            </Card>
                        </div>
                    </Container>

                </div>
                <ToastContainer/>
            </Fragment>
        );
    }
};

export default LoginPage;
