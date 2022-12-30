import React, { Fragment, useEffect, useState } from 'react';
import HeaderNav from '../../Components/HeaderNav';
import FooterNav from '../../Components/FooterNav';
import { Col, Container, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import AppURL from '../../Routes/AppURL';
import { useParams } from 'react-router-dom';
import Related from './Related';
import Loading from '../../Components/Loading';
import AppHead from "../../Components/AppHead";

function EventDetailPage(props) {
	const params = useParams();
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window.scroll(0, 0);
		getData();
	}, [params.id]);

	const getData = async () => {
		await axios.get(AppURL.getEventData + '/' + params.id).then(res => {
			setData(res?.data);
			setLoading(false);
		});
	};

	const image = data && AppURL.rootDomain + data.image;

	if (loading == true) {
		return (
			<Fragment>
				<HeaderNav />
				<Loading />
				<FooterNav />
			</Fragment>
		);
	}

	return (
		<Fragment>
			<HeaderNav />
			<AppHead pageTitle={data && data.title} seoTitle={data && data.title} pageDescription={data.outcome} seoDescription={data.outcome}/>
			<Container
				className={'my-4 py-5 d-flex justify-content-center align-items-center'}
			>
				<div className={'bg-light w-75'}>
					<img src={image} className={'w-100'} />
					<div>
						<p
							className={'text-center text-white py-3 h3 rounded-bottom'}
							style={{ background: '#989898' }}
						>
							{data && data.title}
						</p>
						<Row>
							<Col xl={7} lg={7} md={7} sm={12} className={'m-0 p-0'}>
								<div className={'h4 p-4 bg-white'}>Event Detail</div>
								<div
									className={'p-4'}
									dangerouslySetInnerHTML={{ __html: data && data.detail }}
								></div>
							</Col>

							<Col xl={5} lg={5} md={5} sm={12} className={'m-0 p-0'}>
								<div className={'h4 p-4 bg-white'}>Quick Look</div>
								<div className={'p-4'}>
									<p>
										<span className={'fw-semibold'}>Date:</span>{' '}
										{data && data.month}, {data && data.day}
									</p>
									<p>
										<span className={'fw-semibold'}>Speaker:</span>{' '}
										{data && data.speaker}
									</p>
									<p>
										<span className={'fw-semibold'}>Topic:</span>{' '}
										{data && data.topic}
									</p>
									<p>
										<span className={'fw-semibold'}>Outcome event:</span>{' '}
										{data && data.outcome}{' '}
									</p>
									<a href={data && data.join_link}>
										<Button className={'w-100 primaryColor border-0'}>Join now</Button>
									</a>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</Container>

			<Related currentID={params.id} />

			<FooterNav />
		</Fragment>
	);
}

export default EventDetailPage;
