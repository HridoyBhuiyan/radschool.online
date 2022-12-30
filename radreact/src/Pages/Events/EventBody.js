import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import axios from 'axios';
import AppURL from '../../Routes/AppURL';
import { Link } from 'react-router-dom';
import HeaderNav from '../../Components/HeaderNav';
import FooterNav from '../../Components/FooterNav';
import Loading from '../../Components/Loading';

class EventBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			isLoaded: false,
		};
	}

	componentDidMount() {
		window.scroll(0, 0);
		axios
			.get(AppURL.getEventData)
			.then(x => {
				this.setState({ data: x.data });
				if (x.status === 200) {
					this.setState({ isLoaded: true });
				}
			})
			.catch(x => {
				this.setState({ data: x });
			});
	}

	render() {
		let data = this.state.data;
		let allPost = data.map(x => {
			console.log();
			return (
				<Col key={x.id} xl={4} lg={4} md={6} sm={12} xs={12}>
					<Link to={'../events/' + x.id}>
						<Card
							className={'border-0 rounded-0'}
							style={{ cursor: 'pointer' }}
						>
							<Card.Img
								variant="top"
								src={AppURL.rootDomain + x.image}
								style={{ height: 300 }}
							/>
							<Card.Body>
								<div>
									<Row
										className={
											'd-flex justify-content-center align-items-center'
										}
									>
										<Col
											xl={2}
											lg={3}
											md={3}
											sm={2}
											xs={2}
											style={{ borderRight: 'dashed', borderWidth: '.5px' }}
										>
											{x.month} <p className={'h2'}>{x.day}</p>
										</Col>
										<Col xl={10} lg={9} md={9} sm={10} xs={10}>
											<Card.Title>{x.title.slice(0, 55)}</Card.Title>
										</Col>
									</Row>
								</div>
							</Card.Body>
						</Card>
					</Link>
				</Col>
			);
		});

		if (this.state.isLoaded === false) {
			return (
				<Fragment>
					<Loading />
				</Fragment>
			);
		} else {
			return (
				<Fragment>
					<h2
						className={' py-5 text-center bg-light'}
						style={{ marginTop: 95 }}
					>
						All our event
					</h2>
					<Container>
						<Row>{allPost}</Row>
					</Container>
				</Fragment>
			);
		}
	}
}

export default EventBody;
