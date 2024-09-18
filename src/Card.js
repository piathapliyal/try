import react from "react";
import {Modal} from "./Modal";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Card=({book})=>{
    console.log(book)

    const[show,setshow]=useState(false);
    const[bookitem,setbookitem]=useState();

    return(

        
        <>
        {
        
           book.map((item)=>{
            let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
            let title=item.volumeInfo.title
            let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount
            if(thumbnail!= undefined && amount!= undefined)
            {
                return(
                    <>
                        <div className="card" onClick={()=>{ setshow(true);setbookitem(item)}}>
                        <img src={thumbnail}  alt="" />
                        <div className="bottom">
                          
                            <h3 className="title">{title}</h3>
                            <p className="amount">{amount} </p>
            
                        </div>
            
                    </div>
                    
                   <Modal show={show} item={bookitem} onClose={()=>setshow(false)}/>
                    </>
        
                    )
            }
            
           })  

           
        }
       
      
        
        </>
    )
}


export default Card;