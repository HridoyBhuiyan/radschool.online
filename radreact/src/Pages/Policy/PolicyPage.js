import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import HeaderNav from '../../Components/HeaderNav';
import PolicyBody from './PolicyBody';
import FooterNav from '../../Components/FooterNav';
import axios from "axios";
import AppURL from "../../Routes/AppURL";
import AppHead from "../../Components/AppHead";

class PolicyPage extends Component {
	constructor() {
		super();
		this.state={
			seo:{title:"Policy Page"}
		}
	}
	componentDidMount() {
		window.scroll(0, 0);
		axios.get(AppURL.getPolicyPageSEO)
			.then(response=>{
				this.setState({seo:response.data})
			})
	}

	render() {
		let seo = this.state.seo;
		return (
			<Fragment>
				<AppHead pageTitle={seo.title} seoTitle={seo.seo_title} pageDescription={seo.description} seoDescription={seo.seo_description}/>
				<HeaderNav />
				<Container className={'mt-5 pt-5'}>
					<PolicyBody />
				</Container>
				<FooterNav />
			</Fragment>
		);
	}
}

export default PolicyPage;
