import React, { Component, Fragment } from 'react';
import HeaderNav from '../../Components/HeaderNav';
import FooterNav from '../../Components/FooterNav';
import CompanyDescription from './CompanyDescription';
import axios from "axios";
import AppURL from "../../Routes/AppURL";
import AppHead from "../../Components/AppHead";

class AboutPage extends Component {
	constructor() {
		super();
		this.state={
			seo:{title:"About Page"}
		}
	}

	componentDidMount() {
		window.scroll(0, 0);
		axios.get(AppURL.getAboutPageSEO)
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
				<div className={'mt-5 pt-4'}>
					<CompanyDescription />
				</div>
				<FooterNav />
			</Fragment>
		);
	}
}

export default AboutPage;
