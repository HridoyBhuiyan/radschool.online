import React, {Fragment, useEffect, useState} from 'react';
import HeaderNav from "../../Components/HeaderNav";
import FooterNav from "../../Components/FooterNav";
import {Container} from "react-bootstrap";
import InstractorTimeLine from "../../Components/InstractorProfile/InstractorTimeLine";
import InstractorBio from "../../Components/InstractorProfile/InstractorBio";
import InstractorEducation from "../../Components/InstractorProfile/InstractorEducation";
import {useParams} from "react-router-dom";
import axios from "axios";
import AppURL from "../../Routes/AppURL";
import Loading from "../../Components/Loading";
const InstractorProfile = () => {
    const router = useParams();
    const id = router.username;
    const [data, setData]= useState();
    const getData=async ()=>{
        await axios.get(AppURL.getAboutPageDataUser+"/"+id)
            .then(response=>{
                setData(response.data)
                console.log(response)
            })
    }

    useEffect(()=>{
        window.scroll(0,0)
        getData()
    },[])

    return (
        <Fragment>
            <HeaderNav/>
            <Container className={'mt-5 pt-5'}>
                {!data?<Loading />
                :
                    <div>
                        <InstractorTimeLine data={data}/>
                        <InstractorBio data={data}/>
                        <InstractorEducation data={data}/>
                    </div>
                }
            </Container>
            <FooterNav/>
        </Fragment>
    );
};

export default InstractorProfile;