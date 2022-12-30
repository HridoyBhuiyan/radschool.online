import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';

class TopBanner extends Component {
	render() {
		return (
			<Fragment>
				<div className={'videoText pt-5 py-4 mb-3'} style={{marginTop:74}}>
					<Container>
						<div className={'h1PlaneText text-white text-center'}>
							{this.props.bannerTitle}
						</div>
						<p className={'cardTitle text-center'}>
							{this.props.bannerDescription}
						</p>
					</Container>
				</div>
			</Fragment>
		);
	}
}

export default TopBanner;
