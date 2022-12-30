import React, {Fragment, useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import axios from "axios";
import AppURL from "../../Routes/AppURL";
import {Card} from "react-bootstrap";

const Address = () => {
    const [data, setData]= useState("");


    const getAddress=async ()=>{
        await axios.get(AppURL.getContactPageData)
            .then(response=>{setData(response.data.details)})
    }

    useEffect(()=>{
        getAddress()
    },[])
    return (
        <Fragment>

            <div className={"border-0 bg-light h-100 px-4 d-flex flex-column justify-content-center"}>

                    <div className={'text-center h3 py-3'}>Lets make a quick Connection</div>
                    <p className={"h-50"} dangerouslySetInnerHTML={{__html:data}}>
                    </p>
                    <div className={'text-center courseTitle'}>Reach us on social media</div>
                    <div className={'d-flex justify-content-center text-light py-2'}>

                        <div className={'p-1 px-2'}>
                            <a href={"https://www.facebook.com/RadSchool.online"} target={"_blank"}>
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    style={{ color: '#0F90F2', height: '30px' }}
                                />
                            </a>

                        </div>
                        <div className={'p-1 px-2'}>
                            <a href={"https://twitter.com/Radschool2"} target={"_blank"}>
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    style={{ color: '#1A8CD8', height: '30px' }}
                                />
                            </a>

                        </div>
                        <div className={'p-1 px-2'}>
                            <a href={"https://www.linkedin.com/groups/13400411/"} target={"_blank"}>
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    style={{ color: '#0A66C2', height: '30px' }}
                                />
                            </a>

                        </div>
                    </div>

            </div>

        </Fragment>
    );
};

export default Address;