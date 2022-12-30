import React, {Component, Fragment} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Container, Modal, Button} from "react-bootstrap";
import {TextField} from "@mui/material";
import {ShimmerTable} from "shimmer-react";
import { ToastContainer, toast } from 'react-toastify';

class SeoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allSEO : [],
            handleModal:false,
            SEODetails:'',
            dataLoad:false
        }
    }


    componentDidMount() {
        axios.get("/api/radSeo")
            .then(x=>{
                if (x.status==200){
                    this.setState({allSEO:x.data, dataLoad:true})
                }
            })
    }



    handleSeoChange=()=>{
        let id = this.state.SEODetails.id;
        let pageTitle = document.getElementById("pTitle").value;
        let pageDescription = document.getElementById("pDescription").value;
        let SeoTitle = document.getElementById("SEOtitle").value;
        let SeoDescription = document.getElementById("SEOdescription").value;

        let seoJSON = {
            "id":id,
            "pageTitle":pageTitle,
            "pageDescription":pageDescription,
            "SeoTitle":SeoTitle,
            "SeoDescription":SeoDescription
        }

        axios.post("/updateSEO", seoJSON)
            .then(x=> {
                if (x.status==200){

                    toast.success('SEO Property updated!', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                    this.setState({handleModal:false})
                    this.componentDidMount()
                }

            })
            .catch(x=>console.log(x))



    }


    render() {

        let allSEO = this.state.allSEO

        let totalSEO = allSEO.map((x)=>{
            let id = x.id;
            let pageName = x.page_name;
            let title = x.title;
            let description = x.description;
            let seoTitle = x.seo_title;
            let seoDescription = x.seo_description;
            return(
                <div key={id}>
                    <Accordion className={"my-1"}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header" style={{background:"rgba(189,197,245,0.71)"}} className={"border-dark"} >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                {pageName}
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>{title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={"bg-light p-3 rounded-2"}>

                                <p><b>Page Title:</b> {title}</p>
                                <p><b>Page Description: </b>{description}</p>
                                <p><b>SEO Title:</b> {seoTitle}</p>
                                <p><b>SEO Description: </b>{seoDescription}</p>

                            </Typography>

                            <Button variant="primary" fullWidth={true} className={"my-2 w-100"} onClick={()=>this.setState({handleModal:true, SEODetails:x})}>Update</Button>
                        </AccordionDetails>
                    </Accordion>
                </div>
            )
        })

        if (this.state.dataLoad==false){
            return (<Fragment>


                        <ShimmerTable row={5}/>

                </Fragment>
            )
        }

        else if (this.state.dataLoad==true){
            return (
                <Fragment>
                        <Container fluid={true} className={"py-3"}  style={{overflowY:"scroll", height:"88vh"}}>
                            <h1 className={"text-center"}>Update SEO State</h1>
                            {totalSEO}
                        </Container>


                    <Modal size="lg" show={this.state.handleModal} onHide={()=>this.setState({handleModal:false})}>
                        <Modal.Header closeButton>
                            <Modal.Title>Update SEO data</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>


                            <TextField id="pTitle" label="Page Title" defaultValue={this.state.SEODetails.title} variant="standard" className={"p-2"}/>
                            <br/>
                            <TextField id="pDescription" label="Page Description" defaultValue={this.state.SEODetails.description} variant="standard" className={"p-2"}/>
                            <br/>
                            <TextField id="SEOtitle" label="Search engine title" defaultValue={this.state.SEODetails.seo_title} variant="standard" className={"p-2"}/>
                            <br/>
                            <TextField id="SEOdescription" label="Search engine description" defaultValue={this.state.SEODetails.seo_description} variant="standard" className={"p-2"}/>
                            <br/>


                        </Modal.Body>
                        <Modal.Footer>
                            <Button className={"btn btn-primary"} onClick={this.handleSeoChange}>
                                Save Change
                            </Button>
                            <Button onClick={()=>this.setState({handleModal:false})} className={"btn btn-danger"}>
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

        }

    }
}

export default SeoPage;
