//@ts-check
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../components/main/App';
import Calculate from '../../components/pages/Calculate';
import Contacts from '../../components/pages/Contacts';
import Rates from '../../components/pages/rates/Rates';
import Rules from '../../components/pages/Rules';
import Track from '../../components/pages/track-cargo/Track';
import AuthRegister from '../../components/pages/authentication/AuthRegister';
import Profile from '../../components/pages/Profile';
import Arrange from '../../components/arrange/arrange';
import PrivateRoute from '../PrivateRoute';
import GuestRoute from '../GuestRoutes';

const AllRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/track' element={<Track />} />
				<Route path='/calculate' element={<Calculate />} />
				<Route path='/rates' element={<Rates />} />
				<Route path='/rules' element={<Rules />} />
				<Route path='/contacts' element={<Contacts />} />
				<Route
					path='/profile'
					element={
						<PrivateRoute>
							<Profile />
						</PrivateRoute>
					}
				/>
				<Route path='/arrange' element={<Arrange />} />
				<Route
					path='/registration'
					element={
						<GuestRoute>
							<AuthRegister />
						</GuestRoute>
					}
				/>
			</Routes>
		</div>
	);
};

export default AllRoutes;
