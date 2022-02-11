import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import './news.css';

const cards = [1, 2, 3];

export default function News() {
	return (
		<div className='news-wrap'>
			<Container sx={{ py: 8 }} maxWidth='md'>
				<div className='parent-news'>
					<Typography className='news-name'>Новости</Typography>
					<Grid container spacing={4}>
						{cards.map(card => (
							<Grid item key={card} xs={12} sm={6} md={4}>
								<Card
									sx={{
										display: 'flex',
										pt: '32px',
										flexDirection: 'column',
									}}>
									<CardMedia
										className='photo-card'
										sx={{
											pt: '107px',
											mb: '45px',
										}}
										alt='alt'
									/>
									<CardContent sx={{ flexGrow: 1 }}>
										<Typography
											className='first-line'
											gutterBottom
											variant='h5'
											component='h2'>
											Сегодня у нас акция по кэш-бэку
										</Typography>
										<Typography className='second-line'>
											Amet minim mollit non deserunt ullamco est sit aliqua
											dolor do amet sint.
										</Typography>
										<Typography className='date-line'>21.12.2021</Typography>
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
