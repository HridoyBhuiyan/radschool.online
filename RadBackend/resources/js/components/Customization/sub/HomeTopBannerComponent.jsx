import React, {Fragment, useEffect, useState} from 'react';
import {Form, Button} from 'react-bootstrap'
import {toast} from "react-toastify";
const HomeTopBannerComponent = () => {
    const [data, setData]= useState([])
    const getData=async ()=>{
        await axios.get("/api/radBanner")
            .then(x=> {setData(x.data)})
            .catch(err=>console.log(err))
    }

    const handleUpdate=(id)=>{
        let myId = id;
        let title= document.getElementById('utitle').value;
        let details= document.getElementById('uDetails').value;
        let backgroundImage= document.getElementById('uBGImage').files[0];
        let formData = new FormData();
        formData.append("id", myId)
        formData.append("title", title)
        formData.append("detail", details)
        formData.append("backgroundImage", backgroundImage)

        let config = {headers: {"Content-Type": "multipart/form-data"}}

        let url = "/updateHomeTop"
        axios.post(url, formData, config)
            .then(x=>{
                console.log(x.data)
                if (x.status==200)
                {
                    toast.info('Home Top Banner have Updated!', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }

            })
    }



    useEffect(()=>{
        getData()
    },[])


    let showAllData = data.map(x=>{
        if (x.id==1){
            return(
                <div key={x.id}>
                <div className={"py-2 w-100"}>
                    <p style={{fontSize:12, color:"rgb(118, 118, 118)"}} className={"companyItem"}>Title</p>
                    <input id="utitle"  type="text" defaultValue={x.title} className={"form-control text-center"}/>
                </div>

                <div className={"py-2 w-100"}>
                    <p style={{fontSize:12, color:"rgb(118, 118, 118)"}} className={"companyItem"}>Details</p>
                    <input id="uDetails"  type="text" defaultValue={x.details} className={"form-control text-center"}/>
                </div>


                <div className={"d-flex flex-row bg-light rounded-1 align-items-center justify-content-center py-3"}>
                    <div className={"p-2"}>
                        <img src={x.background_image} alt="old image" style={{height:100}}/>
                    </div>

                    <div className={"p-2"}>
                        <Form.Group controlId="uBGImage"  className="mb-3">
                            <Form.Control type="file"   />
                        </Form.Group>
                    </div>

                </div>
                <Button className={"w-100 btn btn-primary"} onClick={()=>handleUpdate(x.id)}>Update Section</Button>
            </div>)
        }

    })



    return (
        <Fragment>
            {showAllData}
        </Fragment>
    );
};

export default HomeTopBannerComponent;
