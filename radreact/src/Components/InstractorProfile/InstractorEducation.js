import React, {Fragment} from 'react';
import {Card} from "@mui/material";

const InstractorEducation = (props) => {
    return (
        <Fragment>
            <Card className={"my-4 px-4 p-3 rounded-1 shadow-lg "}>
                <h3>Education</h3>
                {!props.data.education?
                    <div className="card mb-3 text-center">
                        <div className="card-body">
                            <h5 className="card-title">Education Status not added !</h5>
                            <p className="card-text">Soon you will have information of this trainer ! Stay with us to know about him!</p>
                        </div>
                    </div>
                    :
                    <div dangerouslySetInnerHTML={{__html:props.data.education}}/>
                }

            </Card>
        </Fragment>
    );
};

export default InstractorEducation;