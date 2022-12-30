import React, { Component, Fragment } from 'react';
import axios from 'axios';
import AppURL from '../../../Routes/AppURL';
import Loading from '../../../Components/Loading';

class ParallaxSection extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			isLoaded: false,
		};
	}

	componentDidMount() {
		window.scroll(0, 0);
		axios.get(AppURL.getHomeTopBanner).then(response => {
			this.setState({ data: response.data });
			if (response.status === 200) {
				this.setState({ isLoaded: true });
			}
		});
	}

	render() {
		let data = this.state.data;
		let allSection = data.map(x => {
			let bgImage = AppURL.rootDomain+ x.background_image;
			return (
				<div
					key={1}
					className=" container-fluid"
					style={{
						backgroundImage: `url(${bgImage})`,
						backgroundAttachment: 'fixed',
						opacity: '.8',
						backgroundPosition: '50%',
						backgroundSize: 'cover',
						width: '100%',
						height: '650px',
						padding: '0',
					}}
				>
					<div className="topFixedOverlay">
						<div className="topFixedText container">
							<div className="topText--1 h1Text">{x.title}</div>
							<div className="topText--2 py-3 subTitile">{x.details}</div>
						</div>
					</div>
				</div>
			);
		});

		if (this.state.isLoaded === false) {
			return (
				<Fragment>
					<Loading />
				</Fragment>
			);
		}

		if (this.state.isLoaded === true) {
			return (
				<Fragment>
					<div>{allSection}</div>
				</Fragment>
			);
		}
	}
}

export default ParallaxSection;
