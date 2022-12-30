import React, {Fragment, useEffect, useState} from 'react';
import {toast} from "react-toastify";
import {Button} from "react-bootstrap";

const VideoSectionComponent = () => {
    const [data, setData]= useState([]);
    const getData=async ()=>{
        await axios.get("/api/radBanner")
            .then(x=> {
                setData(x.data)
            })}

    const handleUpdate=(id)=>{
        let myId = id;
        let title= document.getElementById("uTitle").value;
        let details= document.getElementById("uDetail").value;
        let myURL= document.getElementById("uURL").value;
        let postJSON={
            "id":myId,
            "title":title,
            "detail":details,
            "myURL":myURL
        }

        let url = "/updateVideoSection"
        axios.post(url, postJSON)
            .then(x=>{
                if (x.status==200)
                {
                    toast.info('Video section have updated', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });}
            })}


    let showAllData = data.map(x=>{
        if (x.id==4){

            return(<div key={x.id}>
                <div className={"py-2 w-100"}>
                    <p style={{fontSize:12, color:"rgb(118, 118, 118)"}} className={"companyItem"}>Video Title</p>
                    <input id="uTitle"  type="text" defaultValue={x.title} className={"form-control text-center"}/>
                </div>

                <div className={"py-2 w-100"}>
                    <p style={{fontSize:12, color:"rgb(118, 118, 118)"}} className={"companyItem"}>Video Section details</p>
                    <input id="uDetail"  type="text" defaultValue={x.details} className={"form-control text-center"}/>
                </div>

                <div className={"py-2 w-100"}>
                    <p style={{fontSize:12, color:"rgb(118, 118, 118)"}} className={"companyItem"}>Details Video</p>
                    <input id="uURL"  type="text" defaultValue={x.additional_url} className={"form-control text-center"}/>
                </div>

                <Button className={"w-100 btn btn-primary"} onClick={()=>handleUpdate(x.id)}>Update Section</Button>
            </div>)
        }

    })

    useEffect(()=>{
        getData()
    },[])
    return (
        <Fragment>
            {showAllData}
        </Fragment>
    );
};

export default VideoSectionComponent;
