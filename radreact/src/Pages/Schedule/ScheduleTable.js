import React, {Fragment, useEffect, useState} from 'react';
import {Button, Tab, Table, Tabs} from 'react-bootstrap';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import AppURL from '../../Routes/AppURL';
import Loading from '../../Components/Loading';

const ScheduleTable=()=> {
	const [data, setData]= useState([])
	const [isLoaded, setIsLoaded]=useState(false)
	const navigate = useNavigate()

	useEffect(()=>{
		window.scroll(0, 0);
		axios.get(AppURL.getEachCourseData).then(x => {
			if (x.status === 200) {
				setData(x.data)
				setIsLoaded(true)
			}
		});
	},[])


		let allCourseData = data.map(x => {
			return (
				<tr key={x.id} className={'align-middle'}>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_start}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_end}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_name}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_id}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.location}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_duration}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.price}</td>
					<td className={'text-center'}>
						<Link to={'/application/' + x.id}>
							<Button className={'rounded-4 seconderColor border-0 p-2'}>
								Registration
							</Button>
						</Link>
					</td>
				</tr>
			);
		});


	let industrialCourse = data.map(x => {
		if (x.category=="industrial"){
		return (
			<tr key={x.id} className={'align-middle'}>
				<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_start}</td>
				<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_end}</td>
				<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_name}</td>
				<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_id}</td>
				<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.location}</td>
				<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_duration}</td>
				<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.price}</td>
				<td className={'text-center'}>
					<Link to={'/application/' + x.id}>
						<Button className={'rounded-4 seconderColor border-0 p-2'}>
							Registration
						</Button>
					</Link>
				</td>
			</tr>
		);}
	});



	let medicalCourse = data.map(x => {
		if (x.category=="medical"){
			return (
				<tr key={x.id} className={'align-middle'}>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_start}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_end}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_name}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_id}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.location}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_duration}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.price}</td>
					<td className={'text-center'}>
						<Link to={'/application/' + x.id}>
							<Button className={'rounded-4 seconderColor border-0 p-2'}>
								Registration
							</Button>
						</Link>
					</td>
				</tr>
			);}
	});



	let cbrneCourse = data.map(x => {
		if (x.category=="cbrne"){
			return (
				<tr key={x.id} className={'align-middle'}>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_start}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_end}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_name}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_id}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.location}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_duration}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.price}</td>
					<td className={'text-center'}>
						<Link to={'/application/' + x.id}>
							<Button className={'rounded-4 seconderColor border-0 p-2'}>
								Registration
							</Button>
						</Link>
					</td>
				</tr>
			);}
	});




	let hseCourse = data.map(x => {
		if (x.category=="hse"){
			return (
				<tr key={x.id} className={'align-middle'}>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_start}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_end}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_name}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_id}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.location}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.course_duration}</td>
					<td role={"button"} onClick={()=>navigate('/courses/'+x.id)}>{x.price}</td>
					<td className={'text-center'}>
						<Link to={'/application/' + x.id}>
							<Button className={'rounded-4 seconderColor border-0 p-2'}>
								Registration
							</Button>
						</Link>
					</td>
				</tr>
			);}
	});


		if (isLoaded === false) {
			return (
				<Fragment>
					<Loading />
				</Fragment>
			);
		}
		else {
			return (
				<Fragment>

					<div className={"my-5"}>
						<Tabs defaultActiveKey="all" id="fill-tab-example" fill>
							<Tab eventKey="all" title="Home">
								<div className={'table-responsive'}>
									<Table striped bordered hover className={'scheduleTable'}>
										<thead className={' primaryColor text-white'}>
										<tr>
											<th>Started From</th>
											<th>Last Date</th>
											<th>Course Name</th>
											<th>Course ID</th>
											<th>Location</th>
											<th>Duration</th>
											<th>Course Fee</th>
											<th>Registration now</th>
										</tr>
										</thead>
										<tbody>{allCourseData}</tbody>
									</Table>
								</div>
							</Tab>

							<Tab eventKey="industrial" title="Industrial">
								<div className={'table-responsive'}>
									<Table striped bordered hover className={'scheduleTable'}>
										<thead className={' primaryColor text-white'}>
										<tr>
											<th>Started From</th>
											<th>Last Date</th>
											<th>Course Name</th>
											<th>Course ID</th>
											<th>Location</th>
											<th>Duration</th>
											<th>Course Fee</th>
											<th>Registration now</th>
										</tr>
										</thead>
										<tbody>{industrialCourse}</tbody>
									</Table>
								</div>
							</Tab>

							<Tab eventKey="medical" title="Medical">
								<div className={'table-responsive'}>
									<Table striped bordered hover className={'scheduleTable'}>
										<thead className={' primaryColor text-white'}>
										<tr>
											<th>Started From</th>
											<th>Last Date</th>
											<th>Course Name</th>
											<th>Course ID</th>
											<th>Location</th>
											<th>Duration</th>
											<th>Course Fee</th>
											<th>Registration now</th>
										</tr>
										</thead>
										<tbody>{medicalCourse}</tbody>
									</Table>
								</div>
							</Tab>

							<Tab eventKey="cbrne" title="CBRNE">
								<div className={'table-responsive'}>
									<Table striped bordered hover className={'scheduleTable'}>
										<thead className={' primaryColor text-white'}>
										<tr>
											<th>Started From</th>
											<th>Last Date</th>
											<th>Course Name</th>
											<th>Course ID</th>
											<th>Location</th>
											<th>Duration</th>
											<th>Course Fee</th>
											<th>Registration now</th>
										</tr>
										</thead>
										<tbody>{cbrneCourse}</tbody>
									</Table>
								</div>
							</Tab>

							<Tab eventKey="hse" title="HSE">
								<div className={'table-responsive'}>
									<Table striped bordered hover className={'scheduleTable'}>
										<thead className={' primaryColor text-white'}>
										<tr>
											<th>Started From</th>
											<th>Last Date</th>
											<th>Course Name</th>
											<th>Course ID</th>
											<th>Location</th>
											<th>Duration</th>
											<th>Course Free</th>
											<th>Registration now</th>
										</tr>
										</thead>
										<tbody>{hseCourse}</tbody>
									</Table>
								</div>
							</Tab>

						</Tabs>
					</div>




				</Fragment>
			);
		}

}

export default ScheduleTable;