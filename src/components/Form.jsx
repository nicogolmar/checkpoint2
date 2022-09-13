import "../Styles/form.css";

function obtenerDatos(){
    let nameUser;   
    let lastName;
    let email;
    let msg;    
nameUser=document.getElementById('nameUser').value;
lastName=document.getElementById('lastName').value;
email=document.getElementById('email').value;
msg=document.getElementById('msg').value;

if(nameUser!="" && lastName !="" && email!="" && msg!="" && email.includes('@')) {


    console.log(`Name: ${nameUser}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Mensaje: ${msg}`);
    
    
}

else{
    console.log("Invalid Inform")
}



}




const Form=()=>{
return(
<div>
    <h1>CONTACT FORM</h1>
<form>

            <label for="name" class="input-group"><i class="fa-solid fa-user"></i> Name</label>
            <input type="text" class="input-group" id="nameUser" name="name"required></input>            
            <label for="lastname" class="input-group"><i class="fa-solid fa-user"></i> Lastname</label>
            <input type="text" class="input-group" id="lastName" name="lastname"required></input>
            <label for="email" class="input-group"><i class="fa-solid fa-envelope"></i> Email</label>
            <input type="email" id="email" class="input-group" name="email"required />
            <label for="msg" class="input-group"><i class="fa-solid fa-message"></i> Message</label>                
            <textarea name="msg" class="input-group" id="msg" row="8" required="true" ></textarea>
            <button type="button" onclick="obtenerDatos()">Send <i class="fa-solid fa-paper-plane"></i></button>
    </form>

    </div>
);

}


export default Form;