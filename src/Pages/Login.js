import React from 'react';
import {Container, Box, Typography, TextField, CircularProgress, Button} from '@material-ui/core';
import logo from '../logo.svg';


export class Login extends React.Component {
	render() {
		return (
			<Container maxWidth="xs">
				<Box 
				 bgColor="white"
				 boxShadow="2"
				 borderRadius="12px"
				 textAlign="center"
				 p="24px"
				 mt="50px"
				 >
				<img src={logo} height="50px" />
				 <Typography variant="h5" color="textSecondary">
				 Admin Login
				 </Typography>

				 <TextField
				 label="Email"
				 type="text"
				 color="secondary"
				 id="outlined-size-small"
				 variant="outlined"
				 fullWidth
				 margin="normal"
				 size="small"
				 />

				 <TextField
				 label="Password"
				 type="password"
				 color="secondary"
				 id="outlined-size-small"
				 variant="outlined"
				 fullWidth
				 margin="normal"
				 size="small"
				 />
                 <br />
                 <br />
				 <CircularProgress size={24} thickness={4} color="primary.main"></CircularProgress>
				<br />
				<br />
				<Button
				disabledElevation 
				variant="contained" 
				color="primary"
				fullWidth
				 >Login</Button>
				</Box>
			</Container>
		)
	}
}

export default Login