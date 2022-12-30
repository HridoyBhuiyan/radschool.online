import React, { Component, Fragment } from 'react';
import HeaderNav from '../../Components/HeaderNav';
import FooterNav from '../../Components/FooterNav';
import ParallaxSection from './homeComponents/ParallaxSection';
import CourseSection from './homeComponents/CourseSection';
import EventComponent from './homeComponents/EventComponent';
import VideoSection from './homeComponents/VideoSection';
import axios from "axios";
import AppURL from "../../Routes/AppURL";
import AppHead from "../../Components/AppHead";
import NewsLetter from "./homeComponents/NewsLetter";

class HomePage extends Component {
	constructor() {
		super();
		this.state={
			seo:{title:"Home Page"}
		}
	}
	componentDidMount() {
		axios.get(AppURL.getHomePageSEO)
			.then(response=>{
				this.setState({seo:response.data})
			})
	}

	render() {
		let seo = this.state.seo;
		return (
			<Fragment>
				<HeaderNav />

				<AppHead pageTitle={seo.title} seoTitle={seo.seo_title} pageDescription={seo.description} seoDescription={seo.seo_description}/>

				<div style={{ marginTop: 75 }}>
					<ParallaxSection />
					<CourseSection />
					<EventComponent />
					<NewsLetter/>
					<VideoSection />

				</div>

				<FooterNav />
			</Fragment>
		);
	}
}

export default HomePage;
