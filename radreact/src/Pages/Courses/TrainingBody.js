import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import axios from 'axios';
import AppURL from '../../Routes/AppURL';

import { Link } from 'react-router-dom';
import HeaderNav from '../../Components/HeaderNav';
import FooterNav from '../../Components/FooterNav';
import Loading from '../../Components/Loading';

class TrainingBody extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			isLoaded: false,
		};
	}

	componentDidMount() {
		axios
			.get(AppURL.getEachCourseData)
			.then(x => {
				this.setState({ data: x.data, isLoaded: true });
				console.log(x.data)
			})
			.catch(x => {
			});
	}

	render() {
		let data = this.state.data;
		let baseDomain = AppURL.rootDomain;
		let allTraining = data.map(x => {
			let id = x.id;
			let image = baseDomain + x.image;
			return (
				<Col key={id} lg={4} xl={4} md={4} xs={12} sm={12} className={'py-4 d-flex justify-content-center align-items-center'}>
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
		});

		if (this.state.isLoaded == false) {
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
					<div className={'bg-light mt-5 pt-4'}>
						<div className={''}>
							<h2 className={'py-5 text-center videoText'} style={{ marginTop: 0 }}>
								All Courses
							</h2>

							<Container>
								<Row>{allTraining}</Row>
							</Container>
						</div>
					</div>
				</Fragment>
			);
		}
	}
}

export default TrainingBody;
