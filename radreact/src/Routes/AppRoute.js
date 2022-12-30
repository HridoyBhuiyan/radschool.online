import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../Pages/HomePage/HomePage';
import AboutPage from '../Pages/AboutPage/AboutPage';
import ContactPage from '../Pages/ContactPage/ContactPage';
import CoursePage from '../Pages/Courses/CoursePage';

import PolicyPage from '../Pages/Policy/PolicyPage';
import SchedulePage from '../Pages/Schedule/SchedulePage';
import EventPage from '../Pages/Events/EventPage';
import ScheduleSetPage from '../Pages/ScheduleSet/ScheduleSetPage';
import SingleCoursePage from '../Pages/SingleCourse/SingleCoursePage';
import EventDetailPage from '../Pages/EventDetail/EventDetailPage';
import Loading from '../Components/Loading';
import InstractorProfile from "../Pages/InstroctorProfile/InstractorProfile";
import CourseSubPage from "../Pages/CourseSubPage/CourseSubPage";
import FAQPage from "../Pages/FAQpage/FAQPage";
export default function AppRoute() {
	return (
		<Fragment>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/courses" element={<CoursePage />} />
				<Route path="/courses/:id" element={<SingleCoursePage />} />
				<Route path="/events" element={<EventPage />} />
				<Route path="/events/:id" element={<EventDetailPage />} />
				<Route path="/policy" element={<PolicyPage />} />
				<Route path="/schedule" element={<SchedulePage />} />
				<Route path="/application/:id" element={<ScheduleSetPage />} />
				<Route path="/loading" element={<Loading />} />
				<Route path="/profile/:username" element={<InstractorProfile />} />

				{/*<Route path="/course/category/:name" render={props => <CourseSubPage {...props} key={Date.now()} />} />*/}
				<Route path="/course/category/:name" element={<CourseSubPage/>}/>


				<Route path="/faq" element={<FAQPage />} />
			</Routes>
		</Fragment>
	);
}
