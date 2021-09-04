import React from "react";
import {Container, Box, Typography, TextField, CircularProgress, Button} from '@material-ui/core';
import logo from '../logo.svg';

function UserEdit(props){
	console.warn(props.state);
	return(
		<Container maxWidth="sm">
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
				 User Edit 
				 </Typography>

				 <TextField
				 label="Name"
				 type="text"
				 name="name"
				 onChange=""
				 error=""
				 helperText=""
				 color="secondary"
				 id="outlined-size-small"
				 variant="outlined"
				 fullWidth
				 margin="normal"
				 size="small"
				 />

				 <TextField
				 label="Email"
				 type="text"
				 name="email"
				 onChange=""
				 error=""
				 helperText=""
				 color="secondary"
				 id="outlined-size-small"
				 variant="outlined"
				 fullWidth
				 margin="normal"
				 size="small"
				 />

				 <TextField
				 label="Age"
				 type="number"
				 name="age"
				 onChange=""
				 error=""
				 helperText=""
				 color="secondary"
				 id="outlined-size-small"
				 variant="outlined"
				 fullWidth
				 margin="normal"
				 size="small"
				 />

				  <TextField
				 label="Address"
				 type="text"
				 name="address"
				 onChange=""
				 error=""
				 helperText=""
				 color="secondary"
				 id="outlined-size-small"
				 variant="outlined"
				 fullWidth
				 margin="normal"
				 size="small"
				 />

                 <br />
                 <br />
				<Button
				disabledElevation 
				variant="contained"
				onClick="" 
				color="primary"
				
				 >Update</Button>
				</Box>
			</Container>
		
	)
}
export default UserEdit;