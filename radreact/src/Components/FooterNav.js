import React, { Component, Fragment } from 'react';
import {Accordion, Button, Col, Container, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';

import {
	faEnvelope,
	faLocationDot,
	faPhone,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import AppURL from '../Routes/AppURL';
import AppRegex from '../Routes/AppRegex';
import { Link } from 'react-router-dom';

class FooterNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			btnText: 'Send',
			addressSection:'',
			emailSection:'',
			footerSection:''
		};
	}

	componentDidMount() {
		axios.get(AppURL.getFooterAddress)
			.then(res=>{
				this.setState({addressSection:res.data})
		})
		axios.get(AppURL.getFooterEmail)
			.then(res=>{
				this.setState({emailSection:res.data})
		})
		axios.get(AppURL.getFooterPhone)
			.then(res=>{
				this.setState({footerSection:res.data})
			})
	}

	handleMsg = () => {
		let name = document.getElementById('getName').value;
		let email = document.getElementById('getEmail').value;
		let msg = document.getElementById('getMsg').value;
		let sendJSON = {
			name: name,
			email: email,
			msg: msg,
		};

		setTimeout(() => {
			if (AppRegex.emailRegex.test(email) && AppRegex.nameRegex.test(name)) {
				axios.post(AppURL.sendContact, sendJSON).then(response => {
					this.setState({ btnText: 'Successfully send' });
				});
			} else {
				this.setState({ btnText: 'Sending failed' });
			}
		}, 500);

		this.setState({ btnText: 'Send' });
	};

	render() {



		return (
			<Fragment>


				<Accordion>
					<Accordion.Item className={'footerAccordion m-0 p-0 rounded-0 border-0'} eventKey="0">
						<Accordion.Header>Open Location in map</Accordion.Header>
						<Accordion.Body className={'text-success m-0 p-0'}>


							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.7466955454206!2d54.362894999999995!3d24.494232000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMjTCsDI5JzM5LjIiTiA1NMKwMjEnNDYuNCJF!5e0!3m2!1sen!2sbd!4v1672128190927!5m2!1sen!2sbd"
								width={"100%"} height="400" style={{border:"0"}} loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"/>


						</Accordion.Body>
					</Accordion.Item>
				</Accordion>


				<div className={'bg-dark'}>
					<Container>
						<Row className={'bg-dark text-light m-0 p-0'}>
							<Col lg={6} md={6} xl={6} sm={12} xs={12} className={'p-5'}>
								<Row className={'mb-5'}>
									<Col
										lg={2}
										xl={2}
										md={2}
										sm={2}
										className={'d-flex footerIcon justify-content-center'}
									>
										<FontAwesomeIcon icon={faLocationDot} className={'mt-1'} />
									</Col>
									<Col lg={10} xl={10} md={10} sm={10}>
										<p
											className={'footerHeading'}
											style={{ fontWeight: 800, fontSize: '17px' }}
										>
											{this.state.addressSection.title}
										</p>
										<p className={'mt-3'} style={{ fontWeight: '300' }}>
											{this.state.addressSection.details}
										</p>
									</Col>
								</Row>

								<Row className={'mb-5'}>
									<Col
										lg={2}
										xl={2}
										md={2}
										sm={2}
										className={'d-flex footerIcon justify-content-center'}
									>
										<FontAwesomeIcon icon={faEnvelope} className={'mt-1'} />
									</Col>
									<Col lg={10} xl={10} md={10} sm={10}>
										<p
											className={'footerHeading'}
											style={{ fontWeight: 800, fontSize: '17px' }}
										>
											{this.state.emailSection.title}
										</p>
										<p className={'mt-3'} style={{ fontWeight: '300' }}>
											{this.state.emailSection.details}
										</p>
									</Col>
								</Row>

								<Row className={'mb-5'}>
									<Col
										lg={2}
										xl={2}
										md={2}
										sm={2}
										className={'d-flex footerIcon justify-content-center'}
									>
										<FontAwesomeIcon icon={faPhone} className={'mt-1'} />
									</Col>
									<Col lg={10} xl={10} md={10} sm={10}>
										<p
											className={'footerHeading'}
											style={{ fontWeight: 800, fontSize: '17px' }}
										>
											{this.state.footerSection.title}
										</p>
										<p className={'mt-3'} style={{ fontWeight: '300' }}>
											{this.state.footerSection.details}
										</p>
									</Col>
								</Row>
							</Col>

							<Col lg={6} md={6} xl={6} sm={12} xs={12} className={'p-5'}>
								<p className={'footerHeading'}>Leave us a messege</p>
								<Row className={'d-flex mt-4'}>
									<Col
										lg={6}
										md={6}
										xl={6}
										sm={6}
										xs={6}
										className={'d-flex flex-column justify-content-between'}
									>
										<input
											type="text"
											id="getName"
											className={'inputBox text-white'}
											placeholder={'Name'}
										/>
										<input
											type="text"
											id="getEmail"
											className={'inputBox text-white'}
											placeholder={'Email'}
										/>
										<input
											type="text"
											id="getPhone"
											className={'inputBox text-white'}
											placeholder={'Phone'}
										/>
										<input
											type="text"
											id="getTopic"
											className={'inputBox text-white'}
											placeholder={'topic'}
										/>
									</Col>
									<Col
										lg={6}
										md={6}
										xl={6}
										sm={6}
										xs={6}
										className={
											'd-flex flex-column justify-content-center align-items-center'
										}
									>
										<textarea
											placeholder={'Messege'}
											id="getMsg"
											cols="30"
											rows="10"
											className={'inputBox text-white'}
											style={{ resize: 'none', width: '100%', height: 180 }}
										></textarea>
										<Button
											onClick={this.handleMsg}
											className={'w-100 mt-3 border-0 rounded-0'}
											style={{ background: '#179BD7' }}
										>
											{this.state.btnText}
										</Button>
									</Col>
								</Row>
							</Col>
						</Row>

						<div className={'d-flex justify-content-center '}>
							<hr className={'cardShadow'} />
						</div>

						<div className={'text-center text-light py-3 bg-dark'}>
							<div className={'d-flex justify-content-center text-light py-2'}>
								<div className={'p-1 px-2'}>
									<a href={"https://www.facebook.com/RadSchool.online"} target={"_blank"}>
										<FontAwesomeIcon
											icon={faFacebook}
											style={{ color: '#0F90F2', height: '30px' }}
										/>
									</a>

								</div>
								<div className={'p-1 px-2'}>
									<a href={"https://twitter.com/Radschool2"} target={"_blank"}>
										<FontAwesomeIcon
											icon={faTwitter}
											style={{ color: '#1A8CD8', height: '30px' }}
										/>
									</a>

								</div>
								<div className={'p-1 px-2'}>
									<a href={"https://www.linkedin.com/groups/13400411/"} target={"_blank"}>
										<FontAwesomeIcon
											icon={faLinkedin}
											style={{ color: '#0A66C2', height: '30px' }}
										/>
									</a>

								</div>
							</div>
							<div className={'d-flex justify-content-center'}>
								<div className={'m-1 link-secondary'}>
									<Link to={'/'}>Home</Link>
								</div>
								<div className={'m-1 link-secondary'}>
									<Link to={'/about'}>About Us</Link>
								</div>
								<div className={'m-1 link-secondary'}>
									<Link to={'/courses'}>Courses</Link>
								</div>
								<div className={'m-1 link-secondary'}>
									<Link to={'/schedule'}>Schedule</Link>
								</div>
								<div className={'m-1 link-secondary'}>
									<Link to={'/contact'}>Contact US</Link>
								</div>
							</div>
							Copyrights © 2021-2022 - All Rights Reserved - RadSchool.online.
						</div>
					</Container>
				</div>
			</Fragment>
		);
	}
}

export default FooterNav;
