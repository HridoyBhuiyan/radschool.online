import React, { Fragment, Component } from 'react';
import {Helmet} from "react-helmet";
class AppHead extends Component {
	render() {
		return (
			<Fragment>
				<Helmet>
					<title>{this.props.pageTitle}</title>
					<link rel="canonical" href="https://radschool.online/" />
					<meta name="description" content={this.props.pageDescription} />
					<meta property="og:site_name" content="https://www.radschool.online" />
					<meta property="og:type" content="Online Learning" />
					<meta property="og:title" content={this.props.seoTitle} />
					<meta property="og:description" content={this.props.seoDescription} />
				</Helmet>

			</Fragment>
		);
	}
}

export default AppHead;
