import React, { Component, Fragment } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import AppURL from '../../../Routes/AppURL';
import { Link } from 'react-router-dom';
import Loading from '../../../Components/Loading';
import EventComponentPlaceHolderCard from "../../../Components/HomePage/EventComponentPlaceHolderCard";

class EventComponent extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			isLoaded: false,
		};
	}
	componentDidMount() {
		axios
			.get(AppURL.getEventData)
			.then(x => {
				this.setState({ data: x.data });
				if (x.status === 200) {
					this.setState({ isLoaded: true });
				}
			})
			.catch(x => {});
	}

	render() {
		let data = this.state.data;
		let rootDomain = AppURL.rootDomain;
		let latestEvent = data.map((x, indx) => {
			if (indx <= 2) {
				return (
					<Col key={x.id} xl={4} lg={4} md={6} sm={12} xs={12}>
						<Link to={'/events/' + x.id}>
							<Card
								className={'border-0 rounded-0'}
								style={{ cursor: 'pointer' }}>
								<Card.Img
									variant="top"
									src={rootDomain + x.image}
									style={{ height: 300 }}/>
								<Card.Body>
									<div>
										<Row className={'d-flex justify-content-center align-items-center'}>
											<Col xl={2} lg={3} md={3} sm={2} xs={2} style={{ borderRight: 'dashed', borderWidth: '.5px' }}>
												{x.month} <p className={'h2'}>{x.day}</p>
											</Col>
											<Col xl={10} lg={9} md={9} sm={10} xs={10}>
												<Card.Title>{x.title}</Card.Title>
											</Col>
										</Row>
									</div>
								</Card.Body>
							</Card>
						</Link>
					</Col>
				);
			}
		});

		if (this.state.isLoaded == false) {
			return (
				<Fragment>
					<Loading />
				</Fragment>
			);
		} else {
			return (
				<Fragment>
					<Container className={'mt-3 pt-3'}>
						#Event
						<p className={'h2'}>Upcoming Events</p>
						{this.state.data==0?
							<EventComponentPlaceHolderCard/>
							:
							<Row>{latestEvent}</Row>
						}

					</Container>
				</Fragment>
			);
		}
	}
}

export default EventComponent;
