import React, { Component, Fragment } from 'react';
import {Card, Container} from 'react-bootstrap';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import AppURL from "../../../Routes/AppURL";
import AppRegex from "../../../Routes/AppRegex";
import Loading from "../../../Components/Loading";


class NewsLetter extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isLoaded: false,
            newsLetterBanner:"",
        };
    }

    componentDidMount() {
        axios.get(AppURL.getPolicyBanner).then(x => {
            this.setState({ data: x.data, isLoaded: true });
        });
        axios.get(AppURL.getSubBanner)
            .then(x=>{
                this.setState({
                    newsLetterBanner:x.data
                })
            })
    }

    sendEmail = () => {
        let emailId = document.getElementById('emailId').value;
        let postURL = AppURL.postSubscriberData;
        let jsonData = { email: emailId };

        if (AppRegex.emailRegex.test(emailId)) {
            axios.post(postURL, jsonData).then(x => {
                if (x.status == 200) {
                    toast.success('Successfully Subscribed', {
                        position: 'bottom-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            });
        } else {
            toast.warn('Ensure right email', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    render() {


        if (this.state.isLoaded == false) {
            return (
                <Fragment>
                    <Loading />
                </Fragment>
            );
        } else {
            return (
                <Fragment>

                    <div className={"trainingBackground py-4"}>
                        <Container className={"pb-4 p-0"}>
                            <Card className={'seconderColor rounded-1 border-0 m-2 text-center text-light'}>
                                <div>
                                    <h2 className={"my-3"}>{this.state.newsLetterBanner.title}</h2>
                                    <p className={"px-3"}>
                                        {this.state.newsLetterBanner.details}
                                    </p>
                                    <TextField
                                        id="emailId"
                                        label="Email"
                                        className={'bg-light w-75 rounded-1 m-3 text-success'}
                                    />
                                    <Button onClick={this.sendEmail} variant="contained" className={'shadow-sm w-75 rounded-1 border-0 py-3 my-3'} style={{background:"#56B6E2"}}>
                                        Submit
                                    </Button>
                                </div>
                            </Card>
                        </Container>
                    </div>

                    <ToastContainer />
                </Fragment>
            );
        }
    }
}

export default NewsLetter;
