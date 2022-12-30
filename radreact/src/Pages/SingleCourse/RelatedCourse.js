import React, { Fragment, useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import AppURL from '../../Routes/AppURL';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RelatedCourse(props) {
	const [data, setData] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		await axios.get(AppURL.getEachCourseData).then(x => setData(x.data));
	};

	let showAllData = data.map((x, index) => {
		let image = AppURL.rootDomain + x.image;
		if (index < 3) {
			return (
				<Col
					key={x.id}
					lg={4}
					xl={4}
					md={4}
					xs={12}
					sm={12}
					className={'py-4 d-flex justify-content-center align-items-center'}
				>
					<Link to={`/courses/${x.id}`}>
						<Card style={{ width: '22rem' }} className={'courseCard'}>
							<Card.Img variant="top" src={image} style={{ height: '200px' }} />
							<Card.Body>
								<Card.Title className="courseTitle">{x.title}</Card.Title>
								<div className="cardMentor">{x.course_name}</div>

								<Row>
									<Col xl={6} sm={6} xs={6} lg={6}>
										<span className={'cardDate'}>From: </span>
										{x.course_start}{' '}
									</Col>
									<Col xl={6} sm={6} xs={6} lg={6}>
										{' '}
										<span className={'cardDate'}>To: </span>
										{x.course_end}
									</Col>
								</Row>
							</Card.Body>
						</Card>
					</Link>
				</Col>
			);
		}
	});
	return (
		<Fragment>
			<Row>{showAllData}</Row>
		</Fragment>
	);
}

export default RelatedCourse;
