import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AppURL from '../../Routes/AppURL';
import { Link } from 'react-router-dom';
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import { Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';

function Related(props) {
	const id = props.currentID;

	const [data, setData] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		await axios.get(AppURL.getEventData).then(x => {
			setData(x?.data);
		});
	};

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	const showAllData =
		data &&
		data.map(post => {
			let image = AppURL.rootDomain + post.image;
			if (post.id != id) {
				return (
					<div key={post.id}>
						<div className={'p-2'}>
							<Link to={'/events/' + post.id}>
								<Card
									sx={{ maxWidth: 360, height: 250 }}
									className={'shadow-lg p-2'}
								>
									<CardActionArea>
										<CardMedia
											component="img"
											height="150"
											image={image}
											alt="green iguana"
										/>
										<CardContent>
											<Typography
												variant={'subtitle1'}
												gutterBottom
												component="div"
											>
												{post.title.slice(0, 60)}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Link>
						</div>
					</div>
				);
			}
		});

	return (
		<Fragment>
			<div className={'bg-light'}>
				<Container>

					<div className={'container p-4 my-3'}>
						<h4 className={'text-center p-4'}>Related Other events</h4>
						<Carousel responsive={responsive}>{showAllData}</Carousel>
					</div>
				</Container>
			</div>
		</Fragment>
	);
}

export default Related;
