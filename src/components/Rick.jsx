import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from "react";
import Character from "./Character";
import Pagination from './Pagination';

const Rick=()=>{

    const[info,setInfo]=useState([]);

    const urlCards = "https://rickandmortyapi.com/api/character";

    const[cards,setCards]=useState([]);

    const getCard=async(urlCards)=>{
        fetch(urlCards)
        .then((response)=>response.json())
        .then((data)=>{setCards(data.results)
        setInfo(data.info)
    })
        .catch((error)=>console.log(error))
        
    };
    
const onNext=()=>{
getCard(info.next);
}

const onPrevious =()=>{
    getCard(info.prev);
}

useEffect(() => {
    
    getCard (urlCards);
}, []);




    return(
            <>
    <div className='container mt-5'>
            <Pagination prev={info.prev}
             next={info.next}
              onPrevious={onPrevious} 
              onNext={onNext}/>

        <Character characters={cards}/>
            
            
        </div>
        
    </>

);
    }
    

export default Rick;