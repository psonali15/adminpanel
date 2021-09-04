import React,{useEffect, useState} from 'react'
import { Table } from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


function UserList(){
    let [data, setData] = useState([]);
useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/users').then((result)=>{
        result.json().then((resp)=>{
       // console.warn("result",resp);
         setData(resp);
        })
    })
},[])
 console.warn(data);
    return(
      <div>
    
            <Table>
            <thead>
            <tr>
            <th>Sr.No.</th>
            <th>Name</th>
            <th>Email</th>
            </tr>
           </thead>
            <tbody>
             {
          data.map((item,i)=>
            <tr key={i}>
            <td><Link to={"/user/"+item.id}>{item.id}</Link></td>
            <td><Link to={"/user/"+item.id+"/"+item.name+"/"+item.email}>{item.name}</Link></td>
            <td>{item.email}</td>
            </tr>
             )
           }
            </tbody>
           <Route path="/user/:id/:name/:email"></Route>
            </Table>
         
      </div>
    )
}
export default UserList