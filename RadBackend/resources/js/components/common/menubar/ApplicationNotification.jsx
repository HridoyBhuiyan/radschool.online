import React, {Fragment} from 'react';
import {Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const ApplicationNotification = (props) => {
    const navigation = useNavigate();

    const allData = props && props.data.allUnreadApplication?.map((item, index)=>{
        return(

                <Col key={index} xl={12} lg={12} md={12} sm={12} className={"topPopupEachItem"} ><Row> <Col>{item.first_name}</Col> <Col>{item.email}</Col> <Col>{item.subject_name}</Col></Row></Col>


        )
    })

    return (
        <Fragment>
            <div>
                <div className={"px-3 py-1 text-white text-center"} style={{background:"#27a8d7", fontSize:18}}>{props.data.unreadApplication} Unread Application remain</div>
                <div className={'px-3'}>
                    <Row  style={{maxWidth:"490px"}}>
                    {allData}
                    </Row>
                </div>

                <div className={"px-3 text-white text-center"} role={"button"} style={{background:"#27a8d7", fontSize:18}} onClick={()=>navigation('/application')}>
                    Check All Applications
                </div>
            </div>
        </Fragment>
    );
};

export default ApplicationNotification;
