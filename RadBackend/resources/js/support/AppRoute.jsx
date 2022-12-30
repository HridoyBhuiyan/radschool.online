import React, {Fragment} from 'react';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import CoursePage from '../pages/CoursePage'
import CustomizationPage from "../pages/CustomizationPage";
import EventPage from "../pages/EventPage";
import FaqUpdatePage from "../pages/FaqUpdatePage";
import MediaPage from "../pages/MediaPage";
import MemberListPage from "../pages/MemberListPage";
import MessagePage from "../pages/MessagePage";
import SiteUpdatePage from "../pages/SiteUpdatePage";
import ApplicationPage from "../pages/ApplicationPage";
import LoginPage from "../pages/LoginPage";
import Error404 from "../pages/Error404";
import SiteMetaPage from "../pages/SiteMetaPage";
import PersonalizePage from "../pages/PersonalizePage";
import AllProfilePage from "../pages/AllProfilePage";

const AppRoute = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/course'} element={<CoursePage/>}/>
                <Route path={'/customization'} element={<CustomizationPage/>}/>
                <Route path={'/event'} element={<EventPage/>}/>
                <Route path={'/faq'} element={<FaqUpdatePage/>}/>
                <Route path={'/media'} element={<MediaPage/>}/>
                <Route path={'/members'} element={<MemberListPage/>}/>
                <Route path={'/message'} element={<MessagePage/>}/>
                <Route path={'/update'} element={<SiteUpdatePage/>}/>
                <Route path={'/application'} element={<ApplicationPage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/sitemeta'} element={<SiteMetaPage/>}/>
                <Route path={'/personalize'} element={<PersonalizePage/>}/>
                <Route path={'/all-profiles'} element={<AllProfilePage/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </HashRouter>
    );
};

export default AppRoute;
