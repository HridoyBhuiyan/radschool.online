import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import LoadingIcons from 'react-loading-icons';

function Loading(props) {
	return (
		<Fragment>
			<Container
				fluid={true}
				style={{ height: '70vh' }}
				className={'d-flex align-items-center justify-content-center'}
			>
				<LoadingIcons.Bars
					stroke="#98ff98"
					strokeOpacity={0.125}
					fill={'#FFCA08'}
					style={{ height: 60 }}
				/>
			</Container>
		</Fragment>
	);
}

export default Loading;
