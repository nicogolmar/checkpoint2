
const Character=({characters})=>{

    return(

        <div className="row">
    
        {
            characters.map((item,index)=>
            
            {
                return <div key={index} className="col mb-4"> 
                 <div  className="card" style={{minWidth:"200px"}}>
                   <img src={item.image} alt="imagen"></img>
                   <div className="card-body">
                    <h3 className="card-title">{item.name}</h3>
                    <hr />
                    <p>Species: {item.species}</p>
                    
                   </div>
                   </div>
                   </div>
                
            })
        }
        
    </div>

    );
}

export default Character;