import React, { Fragment, useEffect, useState } from 'react';
import HeaderNav from '../../Components/HeaderNav';
import FooterNav from '../../Components/FooterNav';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import AppURL from '../../Routes/AppURL';
import { Col, Container, Row } from 'react-bootstrap';
import { Button, Paper } from '@mui/material';
import RelatedCourse from './RelatedCourse';
import Loading from '../../Components/Loading';
import AppHead from "../../Components/AppHead";

function SingleCoursePage(props) {
	const { id } = useParams();
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		window.scroll(0, 0);
		getData();
	}, [id]);

	const getData = async () => {
		await axios.get(AppURL.getEachCourseSingle + '/' + id)
			.then(x => {
			setData(x?.data);
			setIsLoading(true);
		});
	};

	let image = data && AppURL.rootDomain + data.image;

	if (isLoading == false) {
		return (
			<Fragment>
				<HeaderNav />
				<Loading />
				<FooterNav />
			</Fragment>
		);
	} else {
		let pageTitle = data && data.title;
		return (
			<Fragment>
				<HeaderNav />
				<AppHead pageTitle={data.course_name + " | RAD Course"} seoTitle={data.course_name + " | RAD Course"} pageDescription={data && data.description} seoDescription={data && data.description}/>
				<Container className={'my-5 py-5'}>
					<div>
						<div className={'mt-4'}>
							<h1 className={'card-title'}>{data && data.course_name}</h1>
							<div className={'d-flex'}>
								<p style={{ marginRight: '12px' }}>
									Start date: {data && data.course_start}
								</p>
								|
								<p style={{ marginLeft: '12px' }}>
									End date: {data && data.course_end}
								</p>
							</div>
						</div>
						<Row className={'mt-3'}>
							<Col lg={8} xl={8} md={8} sm={12} xs={12}>
								<div
									className={'mt-4 d-flex flex-column justify-content-center align-items-center'}
								>
									<img
										src={image}
										alt={data && data.title}
										style={{ maxWidth: 600, maxHeight: 500 }}
										className={'d-inline'}
									/>
									<div
										className={'mt-5'}
										dangerouslySetInnerHTML={{ __html: data && data.detail }}
									></div>
								</div>
							</Col>
							<Col lg={4} xl={4} md={4} sm={12} xs={12} className={'mt-4'}>
								<Paper elevation={3} className={''}>
									<div className={'p-3 text-white rounded-top cardTitle text-center'} style={{background:"#56B6E2"}}>
										Quick Course Notion
									</div>

									<div className={'p-3 courseNotion'}>
										<div className={'my-3'}>
											<span>Course ID :</span>{' '}
											{data && data.course_id}
										</div>

										<div className={'my-3'}>
											<span>Course duration :</span>{' '}
											{data && data.course_duration}
										</div>
										<div className={'my-3'}>
											<span>teacher name :</span> {data && data.course_teacher}
										</div>
										{data && data.prerequisites=="NA"?<div className={'d-none'}></div>:
										<div className={'my-3'}>
											<span>course prerequisites :</span>{' '}
											{data && data.prerequisites}
										</div>
										}
										<div className={'my-3'}>
											<span>Course Fee :</span> {data && data.price}
										</div>
									</div>
									<div
										className={
											'p-3 bg-light rounded-bottom cardTitle text-center'
										}
									>

										<Link to={"/application/"+data.id}>
											<Button
												variant="contained"
												style={{background:"#56B6E2"}}
												className={'primaryColor w-100 rounded-1 border-0 py-2'}
											>
												Enroll Now
											</Button>
										</Link>

									</div>
								</Paper>
							</Col>
						</Row>
					</div>
					<p className={'d-block text-center h4'} style={{marginTop:35}}>Related Course</p>
					<RelatedCourse currentID={id} />
				</Container>
				<FooterNav />
			</Fragment>
		);
	}
}

export default SingleCoursePage;
