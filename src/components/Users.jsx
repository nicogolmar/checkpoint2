import "../Styles/users.css";

const urlUsers = "https://jsonplaceholder.typicode.com/users";

const getUser=async()=>{

    const response=await fetch("https://fakestoreapi.com/products");
    const data=await response.json();
    setUser(data);
    console.log(data);
};




const Users=()=>{

return(
<h1>USER</h1>
    );
}


export default Users;