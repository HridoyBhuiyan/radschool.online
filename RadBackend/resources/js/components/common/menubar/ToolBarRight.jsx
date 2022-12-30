import React, {Fragment, useEffect, useState} from 'react';
import IconButton from "@mui/material/IconButton";
import {Badge} from "@mui/material";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import AppsIcon from '@mui/icons-material/Apps';
import MoreIcon from '@mui/icons-material/MoreVert';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightFromBracket, faSquarePollVertical, faUser} from "@fortawesome/free-solid-svg-icons";
import Cookies from 'universal-cookie';
import {Link, useNavigate} from "react-router-dom";
import ApplicationNotification from "./ApplicationNotification";
import MessgeNotification from "./MessgeNotification";


const ToolBarRight = () => {
    const cookies =new Cookies();
    const [topData, setTopData]=useState([]);
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [profileId, setProfileId]=useState('');
    const [notificationEL, setNotificationEL]=useState(null);
    const [messegeEL, setMessegeEL]=useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isNotificationOpen = Boolean(notificationEL);
    const isMessageOpen = Boolean(messegeEL);
    const menuId = 'primary-search-account-menu';
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const getProfileId=async ()=>{
        await axios.get('/getMyProfile')
            .then(response=>{setProfileId(response.data)})
    }

    const handleLogOut=()=>{
        axios.get('/logout')
            .then(response=>{
                cookies.remove("isLogin")
                navigate('/login')
            })
    }

    const getTopData=async ()=>{
        await axios.get("/topToolBar")
            .then(response=>setTopData(response.data))
    }

    useEffect(()=>{
        getProfileId()
        getTopData()
        if (!cookies.get("isLogin")){
            navigate('/login')
        }
        else {
        }
    },[])
    return (
        <Fragment>

            <Link to={'/'} role="button"><div>
            <img src={"https://admin.radschool.online/images/logo.png"} height={'40px'} className={'py-1'}/></div>
            </Link>

            <div style={{position:"absolute", right:"5%"}}>

                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                    <IconButton className={"mx-1"} style={{color:"#fcf6f6"}} size="large" edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={(event)=>{setMessegeEL(event.currentTarget);}} color="inherit">
                        <Badge badgeContent={!topData.unreadMessage?0:topData.unreadMessage} color="error">
                            <MailIcon />
                        </Badge>
                    </IconButton>


                    <IconButton className={"mx-1"} style={{color:"#fcf6f6"}} size="large" edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={(event)=>{setNotificationEL(event.currentTarget);}} color="inherit">
                        <Badge badgeContent={!topData.unreadApplication?0:topData.unreadApplication} color="error">
                            <AppsIcon />
                        </Badge>
                    </IconButton>


                    <IconButton className={"mx-1"} style={{color:"#fcf6f6"}} size="large" edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={(event)=>{setAnchorEl(event.currentTarget);}} color="inherit">

                        {!topData.thumbnail?<AccountCircle />
                            :
                            <img src={topData.thumbnail} alt="" className={'rounded-circle'} height={30} width={30}/>
                        }


                    </IconButton>
                </Box>


                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton size="large" aria-label="show more"  aria-haspopup="true"  color="inherit">
                        <MoreIcon />
                    </IconButton>
                </Box>


                {/*User Menu*/}
                <Menu anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right',}} id={menuId} keepMounted transformOrigin={{vertical: 'top',horizontal: 'right',}} open={isMenuOpen}  onClick={handleMenuClose}>
                    <div className={'d-flex flex-column'}>
                        <MenuItem className={"px-3 d-flex align-items-center justify-content-start"} onClick={()=> {
                            window.open('https://radschool.online/profile/'+profileId)
                        }}>
                            <FontAwesomeIcon icon={faUser} style={{color:"#0899ac", fontSize:14, background:"rgba(255,255,255,0)"}} className={"mx-1"}/>
                            Profile</MenuItem>
                        <MenuItem className={"px-3 d-flex align-items-center justify-content-start"} onClick={()=>navigate('/personalize')}>
                            <FontAwesomeIcon icon={faSquarePollVertical} style={{color:"#ac15a4", fontSize:14, background:"rgba(255,255,255,0)"}} className={"mx-1"}/> Personalize
                        </MenuItem>
                        <MenuItem className={"px-3 d-flex align-items-center justify-content-start"}  onClick={handleLogOut}>
                                <FontAwesomeIcon icon={faRightFromBracket} style={{color:"#e00202", fontSize:14, background:"rgba(255,255,255,0)"}} className={"mx-1"}/>Logout
                        </MenuItem>
                    </div>
                </Menu>



                {/*Application notification menu*/}
                <Menu anchorEl={notificationEL} anchorOrigin={{ vertical: 'top', horizontal: 'right',}} id={menuId} keepMounted transformOrigin={{vertical: 'top',horizontal: 'right',}} open={isNotificationOpen}  onClick={()=>setNotificationEL(false)}>
                    <ApplicationNotification data={topData}/>
                </Menu>


                {/*message menu*/}
                <Menu anchorEl={messegeEL} anchorOrigin={{ vertical: 'top', horizontal: 'right',}} id={menuId} keepMounted transformOrigin={{vertical: 'top',horizontal: 'right',}} open={isMessageOpen}  onClick={()=>setMessegeEL(false)}>
                    <MessgeNotification data={topData}/>
                </Menu>




            </div>
        </Fragment>
    );
};

export default ToolBarRight;
