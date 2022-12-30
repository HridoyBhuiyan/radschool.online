import React, {Fragment, useEffect, useState} from 'react';
import ReactQuill from "react-quill";
import {Button} from "react-bootstrap";
import axios from "axios";
import {Skeleton} from "@mui/material";
import {toast} from "react-toastify";
const ContactUsComponent = () => {
    const[text, setText]=useState("");
    const[data, setData]=useState("");
    const getText=async ()=>{
        await axios.get("api/contactPage")
            .then(response=>{
                setData(response.data)
            })
    }

    const handleUpdateCompanyAbout=()=>{
        axios.post('/updateContact', {text:text})
            .then(response=> {
                if (response.status==200){
                    toast.info('Contact Page Have Updated!', {
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
            // ["link", "image"],
            ["link"],
            [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
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
        getText()
    },[])



    if (data==""){
        return <Skeleton animation="wave" width={"100%"} height={"100vh"} className={"m-0 p-0"}/>
    }
    else {
        return (
            <Fragment>
                <div className={"text-center py-3 h5"} style={{color:"#767676"}}>Update Company About</div>
                <ReactQuill modules={modules} formats={formats} defaultValue={data && data.details} style={{height:370}} className={"snow mb-4"} onChange={(e)=>setText(e)}/>
                <Button className={"my-5 py-2 btn btn-primary w-100"} onClick={handleUpdateCompanyAbout}>Update Company about</Button>
            </Fragment>
        );
    }


};

export default ContactUsComponent;
