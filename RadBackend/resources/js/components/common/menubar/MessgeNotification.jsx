import React, {Fragment} from 'react';
import {useNavigate} from "react-router-dom";
import {Col, Row} from "react-bootstrap";

const MessgeNotification = (props) => {
    const navigation = useNavigate();

    const allData = props && props.data.allUnreadMessage?.map((item, index)=>{
        return(<Col key={index} xl={12} lg={12} md={12} sm={12} className={"topPopupEachItem"} ><Row> <Col>{item.name}</Col> <Col>{item.email}</Col></Row></Col>)
    })

    return (
        <Fragment>
            <div>
                <div className={"px-3 py-1 text-white text-center"} style={{background:"#27a8d7", fontSize:18}}>{props.data.unreadMessage} Unread Application remain</div>
                <div className={'px-3'}>
                    <Row  style={{maxWidth:"490px"}}>
                    {allData}
                    </Row>
                </div>

                <div className={"px-3 text-white text-center"} role={"button"} style={{background:"#27a8d7", fontSize:18}} onClick={()=>navigation('/message')}>
                    Check All Message
                </div>
            </div>
        </Fragment>
    );
};

export default MessgeNotification;
