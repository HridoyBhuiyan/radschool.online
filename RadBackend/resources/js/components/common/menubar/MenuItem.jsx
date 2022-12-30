import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Cookies from "universal-cookie/es6";
import ToolBarRight from "./ToolBarRight";
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import SubjectIcon from '@mui/icons-material/Subject';
import TuneIcon from '@mui/icons-material/Tune';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import GroupIcon from '@mui/icons-material/Group';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import UpdateIcon from '@mui/icons-material/Update';
import { NavLink} from "react-router-dom";
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MenuItem(props) {
    const cookie = new Cookies();
    const theme = useTheme();
    const [open, setOpen] = React.useState(cookie.get("open")=="true"?true:false);
    const handleDrawer = () => {
        if (open==false){
            setOpen(true);
            cookie.set('open',true,{maxAge:60*60})
        }
        else{
            setOpen(false)
            cookie.set('open',false,{maxAge:60*60})
        }

    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar style={{background:"#4DADD9"}}>
                    <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawer} edge="start" sx={{marginRight: 5, ...(open && { display: 'none' }),}}>
                        <MenuIcon />
                    </IconButton>
                    <ToolBarRight/>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>


                    <NavLink to={'/'}>
                    <ListItem  disablePadding sx={{ display: 'block' }} >
                        <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', }}>
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', }}>
                                <DashboardCustomizeIcon/>
                            </ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }} className={'text-dark'}>Dashboard</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    </NavLink>


                    <NavLink to={'/application'}>
                    <ListItem  disablePadding sx={{ display: 'block' }}>

                        <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', }}>
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', }}>
                                <ManageHistoryIcon/>
                            </ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }} className={'text-dark'}>Application</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    </NavLink>



                    <NavLink to={'/course'}>
                    <ListItem  disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', }}>
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', }}>
                                <SubjectIcon/>
                            </ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }} className={'text-dark'}>Course</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    </NavLink>



                    <NavLink to={'/customization'}>
                    <ListItem  disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', }}>
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', }}>
                                <TuneIcon/>
                            </ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }} className={'text-dark'}>Customization</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    </NavLink>



                    <NavLink to={'/event'}>
                    <ListItem  disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', }}>
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', }}>
                                <EventRepeatIcon/>
                            </ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }} className={'text-dark'}>Event</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    </NavLink>


                <NavLink to={'/faq'}>
                    <ListItem  disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', }}>
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', }}>
                                <LiveHelpIcon/>
                            </ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }} className={'text-dark'}>FAQ</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </NavLink>



                    <NavLink to={'/media'}>
                    <ListItem  disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', }}>
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', }}>
                                <PermMediaIcon/>
                            </ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }} className={'text-dark'}>Media</ListItemText>
                        </ListItemButton>

                    </ListItem>
                    </NavLink>



                     <NavLink to={'/members'}>
                    <ListItem  disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', }}>
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', }}>
                                <GroupIcon/>
                            </ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }} className={'text-dark'}>Members</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    </NavLink>


                    <NavLink to={'/all-profiles'}>
                        <ListItem  disablePadding sx={{ display: 'block' }}>
                            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', }}>
                                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', }}>
                                    <ManageAccountsIcon/>
                                </ListItemIcon>
                                <ListItemText sx={{ opacity: open ? 1 : 0 }} className={'text-dark'}>All Profiles</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </NavLink>



                    <NavLink to={'/message'}>
                    <ListItem  disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', }}>
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', }}>
                                <MailOutlineIcon/>
                            </ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }} className={'text-dark'}>Message</ListItemText>
                        </ListItemButton>

                    </ListItem>
                     </NavLink>


                    <NavLink to={'/update'}>
                    <ListItem  disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', }}>
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', }}>
                                <UpdateIcon/>
                            </ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }} className={'text-dark'}>Site Update</ListItemText>
                        </ListItemButton>

                    </ListItem>
                    </NavLink>


                    <NavLink to={'/sitemeta'}>
                    <ListItem  disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', }}>
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', }}>
                                <BookmarkRemoveIcon/>
                            </ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }} className={'text-dark'}>Site Meta</ListItemText>
                        </ListItemButton>

                    </ListItem>
                    </NavLink>

                </List>

            </Drawer>
            <Box component="main" style={{marginTop:80}} className={'w-100'}>

                    {props.children}
            </Box>
        </Box>
    );
}
