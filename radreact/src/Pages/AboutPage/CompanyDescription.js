import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import AppURL from "../../Routes/AppURL";
import {Card, Col, Container, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Loading from '../../Components/Loading';
import HeaderNav from '../../Components/HeaderNav';
import FooterNav from '../../Components/FooterNav';
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {Button} from "@mui/material";
import avatar from '../../Assets/Images/avatar.png'
import {Link} from "react-router-dom";

const CompanyDescription = () => {
	const [data, setData]=useState([])
	const [userData, setUserData]=useState([])
	const [isLoaded, setIsLoaded]=useState(false)
	const getData = async ()=>{
		await axios.get(AppURL.getAboutPageData)
			.then(x => {
				setData(x.data)
				if (x.status === 200) {
					setIsLoaded(true)
				}
			})}


	const getUserData = async ()=>{
		await axios.get(AppURL.getAboutPageDataUser)
			.then(response=>{
				setUserData(response.data)
			})
	}


	let companyProfile = data.map((info, index) => {
		if (index === 0) {
			return (
				<Container key={1}>
					<Card className={'px-5 m-3 mt-4 p-3 shadow-sm'}>
						<div className={'text-center'}>
							{/*<h1>{info.name}</h1>*/}
							{/*<p>{info.designation}</p>*/}
							<h2>About</h2>
						</div>
						<div style={{ textAlign: 'justify' }}>
							<p dangerouslySetInnerHTML={{ __html: info.details }}></p>
						</div>
					</Card>
				</Container>
			);
		}
		else {return null;}
	});

	let personProfile = userData.map((info, index) => {
		return (
			<Col key={index} xl={6} lg={6} md={6} sm={12} xs={12}>
				<Card className={'px-3 m-3 my-5 p-3 pt-5 shadow-sm aboutCardBody'}>
					<div className={"d-flex flex-column align-items-center"}>
						<div>
							{!info.thumbnail?
								<img alt={'simple kkkthing'} src={avatar} height={100} width={100} className={"rounded-circle"}/>
								:
								<img alt={'simple kkkthing'} src={AppURL.rootDomain+info.thumbnail} height={100} width={100} className={"rounded-circle"}/>
							}

						</div>
						<div className={'text-center'}>
							<h2>{info.name}</h2>
							<h5 className={'mb-4'}>{info.designation}</h5>
							{!info.short_description?
								<p className={'aboutCardDetails'}>

								</p>
								:
								<p className={'aboutCardDetails'}>{info.short_description.slice(0,215)}</p>
							}
						</div>
					</div>


					<div className={'text-center'}>
						<h5 className={''}>Have a quick contact</h5>

						<Row>
							<Col xl={6} lg={6} md={6} sm={6} className={'mt-3'}>

								<a href={info.linkedin} target={"_blank"} className={'w-100 btn-light  d-flex justify-content-center'}>
									<Button variant={"contained"} className={'rounded-1 w-100'}>
										<FontAwesomeIcon style={{ color: '#ffffff', fontSize: '22px', marginRight:5}} icon={faLinkedin}/> Linkedin
									</Button>
								</a>

							</Col>
							<Col xl={6} lg={6} md={6} sm={6} className={'mt-3'}>
								<Link to={"/profile/"+info.id} className={'w-100 btn-light'}>
									<Button className={'w-100 rounded-1'} variant={"contained"} style={{background:"#56B6E2"}}>
										<FontAwesomeIcon style={{ color: '#ffffff', fontSize: '22px',  marginRight:5}} icon={faUser}/> Profile
									</Button>

								</Link>

							</Col>
						</Row>

					</div>

				</Card>
			</Col>
		);

	});





	useEffect(()=>{
		window.scroll(0, 0)
		getData()
		getUserData()
	},[])

	if (isLoaded === false) {
		return (
			<Fragment>
				<HeaderNav />
				<Loading />
				<FooterNav />
			</Fragment>
		);
	} else {
		return (
			<Fragment>
				<div className={'bg-white'}>
					{companyProfile}

					<Container>
						<Row>{personProfile}</Row>
					</Container>
				</div>
			</Fragment>
		);
	}
};

export default CompanyDescription;


