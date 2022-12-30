import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Button, Card} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Form} from 'react-bootstrap';
import {Fragment, useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";

export default function Media() {
    const [allImage, setAllImage]=useState([])
    const [dataLoad, setDataLoad]=useState(false)
    const getAllImage=async ()=>{
        await axios.get("/allMediaImage")
            .then(x=>{
                if (x.status==200){
                    setAllImage(x.data)
                    setDataLoad(true)}
            }).catch(x=>{})
    }

    const handleCopyUrl=(x)=>{
        let imageURL = window.location.origin+"/"+x;
        navigator.clipboard.writeText(imageURL).then(()=>{
            toast.info('URL Copied !', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
    }


    const imageUpload=()=>{
        let photo = document.getElementById("myImg").files[0];
        let formdata = new FormData();
        formdata.append("image",photo);
        formdata.append("name","name");
        let config = {headers: {"Content-Type": "multipart/form-data"}}
        axios.post("/photoPost", formdata, config)
            .then(x=>{
                console.log(x.data)
                if (x.status==200){
                    toast.success('Image Added !', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    getAllImage()
                    document.querySelector('input[type="file"]').value = '';
                }
            })
            .catch(err=>{})
        getAllImage()
    }

    const handleDelete=(id)=>{
        let photoId = id;
        let photoJSON = {"id": photoId}
        axios.post("/photoDelete", photoJSON)
            .then(x=>{
                console.log(x.data)
                if (x.status==200){
                    toast.warn('Photo Deleted !', {
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
            .catch(error=>{})
        getAllImage()
    }

    useEffect(()=>{
        getAllImage()
    },[])
    return (
        <Fragment>
            <Form.Group className="mb-3">
                <div className={"d-flex"}>
                    <Form.Control id={"myImg"} type="file" className={'w-75 mx-2'}/>
                    <Button onClick={imageUpload} variant={'contained'} className={"btn btn-info w-25 mx-2"}>Submit</Button>
                </div>
            </Form.Group>

        <Box sx={{ width: "100%", height: "100%",  }} className={"mediaList"}>
            <ImageList variant="masonry" cols={6} gap={8}>
                {allImage.map((item) => (
                    <ImageListItem key={item.id}>
                        <Card className={"text-center"}>
                        <img
                            src={`${item.image_path}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.name}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            className={'rounded-1'}
                            style={{maxWidth:245}}
                        />
                            <Button onClick={()=>handleCopyUrl(item.image_path)} variant={'contained'} className={'py-1 my-2 text-black'} style={{background:'#e0f0ff'}}>
                                <FontAwesomeIcon icon={faCopy} style={{fontSize:15, color:"#e39502"}} className={"px-1"}/>Copy URL</Button>

                            <Button variant={'contained'} className={'py-1 mx-2 text-black'} style={{background:'#ffeee0'}} onClick={()=>handleDelete(item.id)}>
                                <FontAwesomeIcon icon={faTrash} style={{fontSize:15, color:"#ff5656"}} className={"px-1"}/>Delete</Button>
                        </Card>
                    </ImageListItem>
                ))}
            </ImageList>
            <ToastContainer/>
        </Box>
        </Fragment>
    );
}
