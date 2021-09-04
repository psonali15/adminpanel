import React,{useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DataGrid } from '@mui/x-data-grid';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
// import UserEdit from './UserEdit';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function BasicTable() {
  const classes = useStyles();

    let [data, setData] = useState([]);
  
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/users').then((result)=>{
        result.json().then((resp)=>{
       // console.warn("result",resp);
         setData(resp);
        })
    })
},[]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sr.No.</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right"><Link to={{
    pathname: "/user/"+row.id,
    state: "Snlll"
  }}>{row.name}</Link></TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
