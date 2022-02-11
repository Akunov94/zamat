import { useMediaQuery } from '@mui/material';
import * as React from 'react';
import AccordionForm from '../form/accordion-form/accordion-form';
import CalculateForm from '../form/calculate-form-tab';
import './app.css';
import Footer from './footer/footer';
import Header from './header/header';
import News from './news/news';
import Payment from './payment/payment';

export default function Home() {
	const isMobile = useMediaQuery('(max-width: 600px)');
	return (
		<>
			<Header />
			{isMobile ? <AccordionForm /> : <CalculateForm />}
			<Payment />
			<News />
			<Footer />
		</>
	);
}
