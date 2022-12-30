import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import Thumbnail from '../../../Assets/Images/videoThumbnail.webp';
import axios from 'axios';
import YouTube from 'react-youtube';
import AppURL from '../../../Routes/AppURL';
class VideoSection extends Component {
	constructor() {
		super();
		this.state = {
			modalStat: false,
			data: [],
		};
	}
	onShow = () => {
		this.setState({ modalStat: true });
	};
	onHide = () => {
		this.setState({ modalStat: false });
	};

	componentDidMount() {
		axios
			.get(AppURL.getVideoBanner)
			.then(x => {
				this.setState({ data: x.data });
			})
			.catch(x => {});
	}

	render() {
		const opts = {
			height: '350',
			width: '465',
			playerVars: {
				autoplay: 1,
			},
		};

		let data = this.state.data;
		let videoBody = data.map(x => {
			let videoLink = x.additional_url.slice(32);

			return (
				<div key={1}>
					<Container className={'py-5 text-light'}>
						<Row className={'vh-50 '}>
							<Col
								className={
									'd-flex justify-content-center align-items-center m-0 p-0 videoText h-100 p-5 py-5 videoSection videoSectionText'
								}
								xl={3}
								lg={3}
								md={6}
								xs={12}
								sm={12}
							>
								<div>
									#Discover RadSchool
									<p className={'cardTitle'}>{x.title}</p>
									<div>{x.details}</div>
									<Button
										onClick={this.onShow}
										className={
											'border-white rounded-1 text-dark bg-transparent my-4'
										}
									>
										Watch Video
									</Button>
								</div>
							</Col>
							<Col
								onClick={this.onShow}
								className={'videoSectionCommon videoSection m-0 p-0'}
								xl={9}
								lg={9}
								md={6}
								sm={12}
								xs={12}
							>
								<img
									style={{ width: '100%' }}
									alt={'thumbnail of video'}
									className={'mx-auto videoSection'}
									src={Thumbnail}
								/>
							</Col>
						</Row>
					</Container>

					<Modal
						className={'border-0 rounded-0 p-2'}
						show={this.state.modalStat}
						onHide={this.onHide}
					>
						<Modal.Body>
							<YouTube
								videoId={videoLink}
								opts={opts}
								onReady={this._onReady}
							/>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={this.onHide}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			);
		});

		return (<Fragment>
			<div style={{background:"#F8F9FA"}}>
				{videoBody}
			</div>
		</Fragment>);
	}
}

export default VideoSection;
