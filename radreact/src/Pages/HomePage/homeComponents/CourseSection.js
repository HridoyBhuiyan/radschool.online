import React, { Component, Fragment } from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import axios from 'axios';
import AppURL from '../../../Routes/AppURL';
import { Link } from 'react-router-dom';
import FooterNav from '../../../Components/FooterNav';
import HeaderNav from '../../../Components/HeaderNav';
import Loading from '../../../Components/Loading';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

class CourseSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			isLoaded: false,
		};
	}

	componentDidMount() {
		axios
			.get(AppURL.getEachCourseData)
			.then(response => {
				this.setState({ data: response.data });
				if (response.status == 200) {
					this.setState({ isLoaded: true });
				}
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		let data = this.state.data;
		let rootDomain = AppURL.rootDomain;
		let allCourse = data.map((x, indx) => {
			let id = x.id;
			let title = x.course_name.slice(0, 20);
			let description = x.description.slice(0, 100) + '...';
			let image = rootDomain + x.image;

			if (indx <= 5) {
				return (
					<Col key={id} xl={4} lg={4} md={6} sm={12} className={'mb-4'}>
						<Card className={'rounded-0 border-0 cardShadow courseCardOffHover'}>
							<div>
								<Row className={'d-flex m-0'}>
									<Col lg={4} xl={4} md={4} sm={4} xs={4} className={'m-0 p-0'} style={{height:160}}>
										<img src={image} className={'courseImg'} />
									</Col>

									<Col
										lg={8}
										xl={8}
										md={8}
										sm={8}
										xs={8}
										className={'trainingItem'}
									>
										<div className={'trainingItemOffHover'}>
											<div className={'cardTitle'}>{title}</div>
											<div className={'cardText mt-3'}>{description}</div>
										</div>


									</Col>
								</Row>
							</div>



							<div>
								<div className={' d-flex align-items-center justify-content-center w-100'}>
												<Link to={"/courses/"+id} className={'btn border-0 rounded-0 bg-light text-dark'} >
													Get All information
												</Link>
								</div>
							</div>


						</Card>


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
					<div className={'bg-light py-5 trainingBackground'}>
						<Container>
							<p className={'h2 py-3'}>All Courses</p>
							<div className={'courseSection'}>
								<Row>


									{allCourse}


									{/*<Col  xl={4} lg={4} md={6} sm={12} className={'mb-4'}>*/}
									{/*	<Card className={'rounded-0 border-0 cardShadow courseCardOffHover'}>*/}
									{/*		<div>*/}
									{/*			<Row className={'d-flex m-0'}>*/}
									{/*				<Col lg={4} xl={4} md={4} sm={4} xs={4} className={'m-0 p-0'}>*/}
									{/*					<img src={"image"} className={'courseImg'} />*/}
									{/*				</Col>*/}

									{/*				<Col*/}
									{/*					lg={8}*/}
									{/*					xl={8}*/}
									{/*					md={8}*/}
									{/*					sm={8}*/}
									{/*					xs={8}*/}
									{/*					className={'trainingItem'}*/}
									{/*				>*/}
									{/*					<div className={'trainingItemOffHover'}>*/}
									{/*						<div className={'cardTitle'}>{"title"}</div>*/}
									{/*						<div className={'cardText mt-3'}>{"description"}</div>*/}
									{/*					</div>*/}


									{/*				</Col>*/}
									{/*			</Row>*/}
									{/*		</div>*/}



									{/*		<div>*/}
									{/*			<div className={' d-flex align-items-center justify-content-center w-100'}>*/}
									{/*				<Link to={"/courses/"+"id"} className={'btn border-0 rounded-0 bg-light text-dark'} >*/}
									{/*					Get All information*/}
									{/*				</Link>*/}
									{/*			</div>*/}
									{/*		</div>*/}


									{/*	</Card>*/}


									{/*</Col>*/}


									{/*<Col  xl={4} lg={4} md={6} sm={12} className={'mb-4'}>*/}
									{/*	<Card className={'rounded-0 border-0 cardShadow courseCardOffHover'}>*/}
									{/*		<div>*/}
									{/*			<Row className={'d-flex m-0'}>*/}
									{/*				<Col lg={4} xl={4} md={4} sm={4} xs={4} className={'m-0 p-0'}>*/}
									{/*					<img src={"image"} className={'courseImg'} />*/}
									{/*				</Col>*/}

									{/*				<Col*/}
									{/*					lg={8}*/}
									{/*					xl={8}*/}
									{/*					md={8}*/}
									{/*					sm={8}*/}
									{/*					xs={8}*/}
									{/*					className={'trainingItem'}*/}
									{/*				>*/}
									{/*					<div className={'trainingItemOffHover'}>*/}
									{/*						<div className={'cardTitle'}>{"title"}</div>*/}
									{/*						<div className={'cardText mt-3'}>{"description"}</div>*/}
									{/*					</div>*/}


									{/*				</Col>*/}
									{/*			</Row>*/}
									{/*		</div>*/}



									{/*		<div>*/}
									{/*			<div className={' d-flex align-items-center justify-content-center w-100'}>*/}
									{/*				<Link to={"/courses/"+"id"} className={'btn border-0 rounded-0 bg-light text-dark'} >*/}
									{/*					Get All information*/}
									{/*				</Link>*/}
									{/*			</div>*/}
									{/*		</div>*/}


									{/*	</Card>*/}


									{/*</Col>*/}


									{/*<Col  xl={4} lg={4} md={6} sm={12} className={'mb-4'}>*/}
									{/*	<Card className={'rounded-0 border-0 cardShadow courseCardOffHover'}>*/}
									{/*		<div>*/}
									{/*			<Row className={'d-flex m-0'}>*/}
									{/*				<Col lg={4} xl={4} md={4} sm={4} xs={4} className={'m-0 p-0'}>*/}
									{/*					<img src={"image"} className={'courseImg'} />*/}
									{/*				</Col>*/}

									{/*				<Col*/}
									{/*					lg={8}*/}
									{/*					xl={8}*/}
									{/*					md={8}*/}
									{/*					sm={8}*/}
									{/*					xs={8}*/}
									{/*					className={'trainingItem'}*/}
									{/*				>*/}
									{/*					<div className={'trainingItemOffHover'}>*/}
									{/*						<div className={'cardTitle'}>{"title"}</div>*/}
									{/*						<div className={'cardText mt-3'}>{"description"}</div>*/}
									{/*					</div>*/}


									{/*				</Col>*/}
									{/*			</Row>*/}
									{/*		</div>*/}



									{/*		<div>*/}
									{/*			<div className={' d-flex align-items-center justify-content-center w-100'}>*/}
									{/*				<Link to={"/courses/"+"id"} className={'btn border-0 rounded-0 bg-light text-dark'} >*/}
									{/*					Get All information*/}
									{/*				</Link>*/}
									{/*			</div>*/}
									{/*		</div>*/}


									{/*	</Card>*/}


									{/*</Col>*/}


								</Row>
							</div>

							<div className={"d-flex justify-content-center align-items-center"}>
								<Link to={"/courses"}>
									<Button className={"rounded-0 border-0 my-4 py-3 px-4 btn btn-primary"} style={{background:"#FFA281"}}>
									<span style={{marginRight:15}}>
										Load More
									</span>
										<FontAwesomeIcon icon={faArrowRight}/>
									</Button>
								</Link>

							</div>

						</Container>
					</div>
				</Fragment>
			);
		}
	}
}

export default CourseSection;
