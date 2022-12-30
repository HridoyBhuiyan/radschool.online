import React, { Component, Fragment } from 'react';
import TrainingBody from './TrainingBody';
import HeaderNav from '../../Components/HeaderNav';
import FooterNav from '../../Components/FooterNav';
import axios from "axios";
import AppURL from "../../Routes/AppURL";
import AppHead from "../../Components/AppHead";
class Index extends Component {
	constructor() {
		super();
		this.state={
			seo:{title:"Course Page"}
		}
	}
	componentDidMount() {
		window.scroll(0, 0);
		axios.get(AppURL.getCoursePageSEO)
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
				<TrainingBody />
				<FooterNav />
			</Fragment>
		);
	}
}

export default Index;
