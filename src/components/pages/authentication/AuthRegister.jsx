import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import logo from '../../../assets/img/Logo.svg';
import api from '../../../services/service';
import Footer from '../../main/footer/footer';
import validationRegister from './validationRegister';

const theme = createTheme();

export default function SignUp() {
	// const [valueNum, setValueNum] = React.useState('');
	const [err, setErr] = React.useState('');
	const [errEmail, setErrEmail] = React.useState('');
	// const [isLoading, setIsLoading] = React.useState(false);
	const {
		control,
		handleSubmit,
		formState: { errors },
		// setError,
	} = useForm({
		resolver: yupResolver(validationRegister),
	});

	const onSubmit = async data => {
		try {
			await api.client.registration(data);
			// const { data: createUser } = await api.client.registration(data);
		} catch (e) {
			if (e.response.status === 400) {
				setErr('pass err');
				setErrEmail('email err');
			}
		} finally {
			// setIsLoading(false);
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Grid>
							<img id='logo-footer' src={logo} alt='' />
						</Grid>
						<Typography component='h2' variant='h5'>
							Регистрация
						</Typography>
						<Box sx={{ mt: 3 }}>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<Controller
										name='username'
										control={control}
										defaultValue=''
										render={({ field }) => (
											<TextField
												{...field}
												error={Boolean(errors.name?.message)}
												fullWidth={true}
												type='text'
												placeholder='Имя пользователя'
												label='Имя пользователя'
												variant='outlined'
												helperText={errors.name?.message}
											/>
										)}
									/>
								</Grid>
								<Grid item xs={12}>
									<Controller
										name='email'
										control={control}
										defaultValue=''
										render={({ field }) => (
											<TextField
												{...field}
												error={Boolean(errors.email?.message)}
												fullWidth={true}
												type='text'
												id='email'
												label='Email'
												variant='outlined'
												helperText={errors.email?.message}
											/>
										)}
									/>
								</Grid>
								<span
									style={{
										color: 'red',
										margin: '0 auto',
									}}>
									{errEmail}
								</span>
								<Grid item xs={12}>
									<Controller
										name='password'
										control={control}
										defaultValue=''
										render={({ field }) => (
											<TextField
												{...field}
												error={Boolean(errors.password?.message)}
												fullWidth={true}
												type='password'
												id='password'
												label='Введите пароль'
												variant='outlined'
												helperText={errors.password?.message}
											/>
										)}
									/>
								</Grid>
								<Grid item xs={12}>
									<Controller
										name='password2'
										control={control}
										defaultValue=''
										render={({ field }) => (
											<TextField
												{...field}
												error={Boolean(errors.password?.message)}
												fullWidth={true}
												type='password'
												id='password'
												label='Введите пароль'
												variant='outlined'
												helperText={errors.password?.message}
											/>
										)}
									/>
								</Grid>
								<span
									style={{
										color: 'red',
										margin: '0 auto',
									}}>
									{err}
								</span>
							</Grid>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								sx={{ mt: 3, mb: 2 }}>
								Зарегистрироваться
							</Button>
						</Box>
					</form>
				</Box>
			</Container>

			<Footer />
		</ThemeProvider>
	);
}
