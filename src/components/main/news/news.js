import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import './news.css';
import imgNews from '../../../assets/img/news.svg';

export default function News() {
	const [news, setNews] = React.useState([]);

	React.useEffect(() => {
		const getOrders = async () => {
			const res = await fetch(
				//https://api.zamatta.kg/api/v1/news болуп алмашат axios мн
				'https://jsonplaceholder.typicode.com/posts?_limit=15'
			);
			const post = await res.json();
			setNews(post.slice(0, 9));
		};
		getOrders();
	}, []);

	return (
		<div className='news-wrap'>
			<Container sx={{ py: 8 }} maxWidth='md'>
				<div className='parent-news'>
					<Typography className='news-name'>Новости</Typography>
					<Grid container spacing={4}>
						{news.map((card, index) => (
							<Grid
								sx={{ display: 'flex', alignItems: 'stretch' }}
								item
								key={index}
								xs={12}
								sm={6}
								md={4}>
								<Card
									sx={{
										display: 'flex',
										alignItems: 'stretch',
										pt: '32px',
										flexDirection: 'column',
									}}>
									<CardMedia
										className='photo-card'
										image={card.img ?? imgNews}
										sx={{
											width: '120px',
											pt: '107px',
											mb: '45px',
											mx: 'auto',
										}}
										alt='alt'
									/>
									<CardContent sx={{ flexGrow: 1 }}>
										<Typography
											className='first-line'
											gutterBottom
											variant='h5'
											component='h2'>
											{card.title.length > 12
												? card.title.substring(0, 42) + '...'
												: null}
										</Typography>
										<Typography className='second-line'>
											{card.body.length > 20
												? card.body.substring(0, 65) + '...'
												: null}
										</Typography>
										<Typography className='date-line'>
											{card.date ?? '21.12.2021'}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</div>
			</Container>
		</div>
	);
}
