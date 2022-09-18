import "../Styles/users.css";
import { useState,useEffect } from "react";


const Users=()=>{

    const urlUsers = "https://jsonplaceholder.typicode.com/users";

    const[users,setUsers]=useState([]);

    const getUser=async()=>{
    
        const response=await fetch(urlUsers);
        const data=await response.json();
        setUsers(data);
        console.log(data);
    };
    

useEffect(() => {
    
    getUser ();
}, []);

return(
    <div className="container">

    {
        users.map((user)=>
        
        {
            return <div>
                <div className="card">
                <div className="circle">  <h2> {user.id} </h2>  </div>
                <div className="content">
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Street: {user.address.street}</p>
                <p>Suite: {user.address.suite}</p>
                <p>Company: {user.company.name}</p>
                </div>
                </div>
                </div>
            
            
        })
    }
    
</div>
);
}

export default Users;