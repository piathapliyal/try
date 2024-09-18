import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import background from "./i7.jpg"




const Main=()=>{
    const[search,setSearch]=useState("")
    const[bookdata,setbookdata]=useState([])
    const searchbook=(evt)=>{
        if(evt.key==="Enter"){
          axios.get("https://www.googleapis.com/books/v1/volumes?q="+search+"&key=AIzaSyAC5Kf0ipLGZZIFsj2-tUaHMRIAv_TKjWk"+"&maxResults=40")
          .then(res=>setbookdata(Array.from(res.data.items)))
        }
        
      
    }
    return(
        <>
        <div className="header"  >
            
        
        <div className="row1" style={{backgroundImage:`url(${background})`}}>
        <h1>“One Book Can Change Your Life.”</h1>
        </div>
        <div className="row2">
        <h2>Find your Book</h2>
             <div className="search">

            <input type="text" placeholder="Enter Your Book name" value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchbook}></input>
            <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
            <img src={require("./p1.png")} alt=""/>
        
            </div>

          
    
        </div>
        <div className="container">
               {
                <Card book={bookdata}/>
               }
                
            </div>
        </>
    )
}


export default Main;