import React, {Fragment, Component} from 'react';
import ReactQuill from "react-quill";
import {Button, Card, Col, Modal, Row} from "react-bootstrap";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Form from "react-bootstrap/Form";
import {Skeleton, TextField} from "@mui/material";
import {toast} from "react-toastify";

class AboutComponent extends Component {
    constructor() {
        super();
        this.state={
            text:"",
            companyAboutData:"",
            dataLoad:false
        }
    }
    componentDidMount() {
        axios.get("/companyAboutData")
            .then(response=>{
                if (response.status==200){
                    this.setState({companyAboutData:response.data, text:response.data.details, dataLoad:true})
                }})
    }

    handleTextEditor=(v)=>{
        this.setState({text:v})
    }

    handleCompanyAbout=()=>{
        let details = this.state.text;
        let motto = document.getElementById("uMotto").value;
        let aboutJSON = {
            "about":details,
            "motto":motto,
        }
        axios.post("/updateCompanyAboutData", aboutJSON)
            .then(x=>{
                console.log(x.data)
                if (x.status==200){
                    toast.info('Company about updated !', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }})
    }

    render() {

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

        if (this.state.dataLoad==false){
            return <Skeleton animation="wave" width={"100%"} height={"100vh"} className={"m-0 p-0"}/>
        }

        else {
            return (
                <Fragment>

                    <div>
                        <h5 className={"text-center py-3"} style={{color:"#767676"}}>Update Company About</h5>

                                <ReactQuill modules={modules} formats={formats} value={this.state.text} defaultValue={this.state.companyAboutData.details}  onChange={this.handleTextEditor} style={{height:370}} className={"snow"}/>
                                <div className={"my-5"}>
                                    <p style={{fontSize:12, color:"rgb(118, 118, 118)"}} className={"companyItem mt-5"}>Company Motto</p>
                                    <input id="uMotto"  type="text" defaultValue={this.state.companyAboutData["designation"]} className={"form-control"}/>
                                </div>
                                <div className={"py-2"}>
                                    <Button className={"btn btn-primary w-100"} onClick={this.handleCompanyAbout}>Update Company about</Button>
                                </div>
                    </div>
                </Fragment>
            );
        }}}

export default AboutComponent;
