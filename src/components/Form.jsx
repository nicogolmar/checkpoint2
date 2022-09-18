import "../Styles/form.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEnvelope, faMessage, faPaperPlane, faUser} from '@fortawesome/free-solid-svg-icons';


const Form=()=>{

const [form, setform] = useState({});


const handleChange=(e)=>{

    setform({
        ...form,[e.target.name]:e.target.value,


    });
};



const handleSubmit=(e)=>{
e.preventDefault();
    console.log("Nombre: " + form.name)
    console.log("Apellido: "+form.lastname)
    console.log("Email: "+form.email)
    console.log("Mensaje: "+form.msg)

    
};


return(
<div>
    <h1>CONTACT FORM</h1>
<form className="row g-3" onSubmit={handleSubmit}>

    <div className="col-md-6">
            <label htmlFor="name" className="input-group" ><FontAwesomeIcon className="icon" icon={faUser} /> Name</label>
            <input type="text" className="input-group" id="nameUser" name="name" value={form.nameUser} onChange={handleChange} ></input>            
            </div>   
            <div className="col-md-6">
            
            <label htmlFor="lastname" className="input-group"><FontAwesomeIcon className="icon" icon={faUser} /> Lastname</label>
            <input type="text" className="input-group" id="lastName" name="lastname" value={form.lastUser} onChange={handleChange} ></input>
            </div>
            <div className="col-md-12">
            
            <label htmlFor="email" className="input-group"><FontAwesomeIcon className="icon" icon={faEnvelope} /> Email</label>
            <input type="email" id="email" className="input-group" name="email" value={form.email} onChange={handleChange}  />

            </div>   

            <div className="col-md-12">

            <label htmlFor="msg" className="input-group"><FontAwesomeIcon className="icon" icon={faMessage} /> Message</label>                
            <textarea name="msg" className="input-group" id="msg" row="8"  value={form.msg} onChange={handleChange} ></textarea>
            </div>   
            <div className="col-md-6">

            <button type="Submit" >Send <FontAwesomeIcon icon={faPaperPlane} /></button>
            </div>   
    </form>

    </div>
);

}


export default Form;