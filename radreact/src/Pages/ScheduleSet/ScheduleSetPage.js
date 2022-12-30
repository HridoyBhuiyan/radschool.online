import React, { Fragment, useEffect, useState } from 'react';
import HeaderNav from '../../Components/HeaderNav';
import FooterNav from '../../Components/FooterNav';
import {Breadcrumb, Col, Container, Row} from 'react-bootstrap';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import AppURL from '../../Routes/AppURL';
import { Button, TextField } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../../Components/Loading';
import AppHead from "../../Components/AppHead";

function ScheduleSetPage(props) {
	const params = useParams();
	const id = params.id;
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		window.scroll(0, 0);
		getData();
	}, []);

	const getData = async () => {

		await axios.get(AppURL.getEachCourseSingle + '/' + id)
			.then(x => {
				setData(x?.data);
				setIsLoading(false);
			});

	};

	const sendData = () => {
		let firstName = document.getElementById('firstName').value;
		let lastName = document.getElementById('lastName').value;
		let getEmail = document.getElementById('getEmail').value;
		let courseName = document.getElementById('courseName').value;
		let CourseID = document.getElementById('courseID').value;
		let CoverLEtter = document.getElementById('converLetter').value;
		let jobTitle = document.getElementById("jobTitle").value;
		let phoneNumber = document.getElementById("phoneNumber").value;

		let makeJSON = {
			firstName: firstName,
			lastName: lastName,
			email: getEmail,
			courseName: courseName,
			courseId: CourseID,
			coverLetter: CoverLEtter,
			jobTitle:jobTitle,
			phoneNumber:phoneNumber
		};

		axios
			.post(AppURL.postScheduleSet, makeJSON)
			.then(res => {
				if (res.status === 200) {
					toast.success('We Note your application. See you soon...', {
						position: 'bottom-center',
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				} else {
					toast.warn('Empty or wrong input', {
						position: 'bottom-right',
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				}
			})
			.catch(err => {
				toast.error('Empty or wrong input', {
					position: 'bottom-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			});
	};

	if (isLoading == true) {
		return (
			<Fragment>
				<HeaderNav />
				<Loading />
				<FooterNav />
			</Fragment>
		);
	} else {
		return (
			<Fragment>
				<HeaderNav />
				<AppHead pageTitle={data && data.course_name} seoTitle={data && data.course_name} pageDescription={data && data.course_name + " is an awosome course from RadSchool. You can start it at anytime."} seoDescription={data && data.course_name + " is an awosome course from RadSchool. You can start it at anytime."}/>
				<Container className={'mt-5 pt-4'}>


					<div className={"bg-light mt-4 d-flex align-items-center rounded-2"}>
					<Breadcrumb className={"py-1 pt-3 px-3"}>
						<Link className={"breadcrumb-item"} to="/">Home</Link>
						<Link className={"breadcrumb-item"} to="/schedule">Application</Link>
						<Link className={"breadcrumb-item active"} to={"/"}>{data.course_name}</Link>
					</Breadcrumb>
					</div>


					<Row className={'mt-4'}>
						<h4 className={'py-3'}>Selected Course</h4>
						<Col lg={12} xl={12} md={12} sm={12} xs={12} className={'pb-4'}>
							<TextField id="courseName" label="Course Tite" multiline maxRows={4} value={data && data.course_name} InputLabelProps={{shrink: true,}}fullWidth/>
						</Col>

						<Col lg={6} xl={6} md={6} sm={12} xs={12} className={'py-2'}>
							<TextField id="courseID" label="Course Fee" value={data && data.price} fullWidth InputLabelProps={{shrink: true,}} className={"appCol"}/>
						</Col>
						<Col lg={6} xl={6} md={6} sm={12} xs={12} className={'py-2'}>
							<TextField id="courseID" label="Course ID" value={data && data.course_id} fullWidth InputLabelProps={{shrink: true,}} className={"appCol"}/>
						</Col>
					</Row>
					<Row className={'my-4'}>
						<h4 style={{ marginTop: 20 }}>Applicant's Information</h4>
						<Col lg={6} xl={6} md={6} sm={12} xs={12} className={'py-3'}>
							<TextField id="firstName" label="First Name" fullWidth />
						</Col>

						<Col lg={6} xl={6} md={6} sm={12} xs={12} className={'py-3'}>
							<TextField id="lastName" label="Last Name" fullWidth />
						</Col>
						<Col lg={6} xl={6} md={6} sm={12} xs={12} className={'py-3'}>
							<TextField id="jobTitle" label="Company / Job title" fullWidth />
						</Col>

						<Col lg={6} xl={6} md={6} sm={12} xs={12} className={'py-3'}>
							<TextField id="phoneNumber" label="Phone Number" fullWidth />
						</Col>

						<Col lg={12} xl={12} md={12} sm={12} xs={12} className={'py-3'}>
							<TextField id="getEmail" label="Email" fullWidth />
						</Col>
					</Row>


					<div className={'my-4'}>
						<h4 className={'pb-3 mt-3'}>Applicant's note</h4>
						<textarea id={'converLetter'} className={'w-100 rounded-1 mb-3'} label="fullWidth" style={{ height: '200px' }} multiline={'true'} />
						<Button onClick={sendData} variant="contained" className={'primaryColor w-100 rounded-1 border-0 py-2'}>
							Submit
						</Button>
					</div>
					<ToastContainer />
				</Container>
				<FooterNav />
			</Fragment>
		);
	}
}

export default ScheduleSetPage;
