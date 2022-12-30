import React, {Fragment} from 'react';
import {Button, Card} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import AppURL from "../../Routes/AppURL";

const InstractorTimeLine = (props) => {
    return (
        <Fragment>
            <Card className={"my-2 shadow-lg profileTimeline"}>
                <div className={"profileTimelineCover videoText bg-info"}>
                    <img className={"rounded-circle"} src={AppURL.rootDomain+props.data.thumbnail}/>
                </div>

                <div style={{height:80}}/>

                <div className={'text-center mt-2 d-flex align-items-center flex-column justify-content-center'}>
                    <span className={'h2'}>{props.data.name}</span>
                    <span className={'h5'}>{props.data.designation}</span>
                    <span>Rad School, Radiation protecion and safety</span>
                </div>


                <div className={'d-flex flex-column align-items-center justify-content-center'}>
                    <hr className={'text-dark text-center w-75'}/>
                    <span className={'h5'}>Social Connection</span>
                    <div className={'py-1 mb-3'}>
                        {!props.data.facebook?<div className={'d-none'}></div>:
                            <Button variant={"contained"} className={'profileSocialIcon'} onClick={()=>{window.open(props.data.facebook, '_blank')}}>
                                <FontAwesomeIcon icon={faFacebook}/>
                            </Button>}


                        {!props.data.twitter?<div className={'d-none'}></div>:
                            <Button variant={"contained"} className={'profileSocialIcon'} color={"info"} onClick={()=>{window.open(props.data.twitter, '_blank')}}>
                                <FontAwesomeIcon icon={faTwitter}/>
                            </Button>}


                        {!props.data.linkedin?<div className={'d-none'}></div>:
                            <Button variant={"contained"} className={'profileSocialIcon'} color={"info"} onClick={()=>{window.open(props.data.linkedin, '_blank')}}>
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </Button>}


                    </div>

                </div>

            </Card>
        </Fragment>
    );
};

export default InstractorTimeLine;