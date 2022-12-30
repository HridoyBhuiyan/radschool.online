import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import Logo from '../../../Assets/Images/logo1.png';
import axios from 'axios';
import AppURL from '../../../Routes/AppURL';
import {Link, Router} from 'react-router-dom';
import Loading from '../../../Components/Loading';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
class AnnouncmentSection extends Component {
	constructor() {
		super();
		this.state = {
			bannerData: [],
			discountData: [],
			isLoaded: false,
		};
	}

	componentDidMount() {
		//banner api call
		axios
			.get(AppURL.getEventBanner)
			.then(res => {
				this.setState({ bannerData: res.data });
				if (res.status == 200) {
					this.setState({ isLoaded: true });
				}
			})
			.catch();

		//discount api call
		axios
			.get(AppURL.getDiscountBanner)
			.then(x => {
				this.setState({ discountData: x.data });
			})
			.catch(x => {});
	}

	render() {
		//banner part here

		let bannerData = this.state.bannerData;
		let mainBanner = bannerData.map(x => {
			let bgImage = AppURL.rootDomain+ x.background_image;
			return (
				<div
					key={1}
					className=" eventSectionMain container-fluid"
					style={{ backgroundImage: `url(${bgImage})` }}
				>
					<div className="announcementFixedOverlay">
						<div className="announcementFixedText container">
							<Row
								className={'d-flex justify-content-center align-items-center'}
							>
								<Col xl={8} lg={8} md={8} sm={6} xs={12} className={''}>
									<img
										src={Logo}
										alt={'Logo for announcment'}
										height={100}
										width={100}
									/>
									<div className={'h2Text'}>{x.title}</div>
									{x.details}
								</Col>

								<Col xl={4} lg={4} md={4} sm={6} xs={12} className={''}>
									<Card
										className={'rounded-0 border-0 p-3 py-4'}
										style={{ background: 'rgba(0,0,0,0.55)' }}
									>
										<ListGroup variant="flush">
											<ListGroup.Item
												style={{ background: 'rgba(0,0,0,0)' }}
												className={'border-0'}
											>
												<Link to={x.additional_url}>
													<Button
														className={'w-100 border-0 rounded-0 p-2 py-3'}
														style={{ background: '#179BD7' }}
													>
														Read about this event
													</Button>
												</Link>
											</ListGroup.Item>
											<ListGroup.Item
												style={{ background: 'rgba(0,0,0,0)' }}
												className={'border-0'}
											>
												<Button
													className={'w-100 border-0 rounded-0 p-2 py-3'}
													style={{ background: '#ff6e39' }}
												>
													Speaker Application
												</Button>
											</ListGroup.Item>
											<ListGroup.Item
												style={{ background: 'rgba(0,0,0,0)' }}
												className={'border-0'}
											>
												<Button
													className={'w-100 border-0 rounded-0 p-2 py-3'}
													style={{ background: '#179BD7' }}
												>
													Register Now
												</Button>
											</ListGroup.Item>
											<ListGroup.Item
												style={{ background: 'rgba(0,0,0,0)' }}
												className={'border-0'}
											>
												<Button
													className={'w-100 border-0 rounded-0 p-2 py-3'}
													style={{ background: '#ff6e39' }}
												>
													Award Nomination
												</Button>
											</ListGroup.Item>
										</ListGroup>
									</Card>
								</Col>
							</Row>
						</div>
					</div>
				</div>
			);
		});

		//discount part here

		let discountData = this.state.discountData;
		let discountBody = discountData.map(x => {
			return (
				<Row key={1}>
					<Col xl={8} lg={8} md={8} sm={12} xs={12} className={''}>
						<h2 className={'text-dark'} style={{ fontWeight: 300 }}>
							{x.title}
						</h2>
						<p className={'subTitile'} style={{ fontWeight: 300 }}>
							{x.details}
						</p>
					</Col>
					<Col
						xl={4}
						lg={4}
						md={4}
						sm={12}
						xs={12}
						className={'d-flex align-items-center justify-content-center'}
					>
						<Button
							onClick={() => Router.push(x.additional_url)}
							className={'rounded-0 border-0 bg-white text-success p-2 w-50'}
						>
							Request Ticket <FontAwesomeIcon icon={faArrowRight} />
						</Button>
					</Col>
				</Row>
			);
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
					<div>
						{mainBanner}
						<div style={{ background: '#CEE6E6' }} className={'py-4'}>
							<Container>{discountBody}</Container>
						</div>
					</div>
				</Fragment>
			);
		}
	}
}

export default AnnouncmentSection;
