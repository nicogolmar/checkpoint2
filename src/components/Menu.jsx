import { Link } from "react-router-dom";
import "../Styles/menu.css";

const Menu=()=>{

    return(
<div class="container">
       
       <Link to="/form" class="form">
           <h1>FORM</h1></Link>
           <Link to="/users" class="user">
           <h1>USER</h1></Link>
           <Link to="/rick" class="cards">
           <h1>CARDS</h1></Link>
       <div class="img-box"></div>    
   </div>
   )

}

export default Menu;