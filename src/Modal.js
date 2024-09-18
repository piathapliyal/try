import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from "@fortawesome/free-solid-svg-icons";


export const Modal=({show,item,onClose})=>{
    if(!show){
        return null
    }

    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
   
    return(
        <>
        <div className="overlay">
            <div className="overlay-inner">
                <button className="close" onClick={onClose}><FontAwesomeIcon icon={faX} /></button>
                <div className="inner-box">
                    <img src={thumbnail}/>
                    <div className="info">
<h1>{item.volumeInfo.title}</h1><br />
<h3> {item.volumeInfo.authors}</h3>
<h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br />
<a href={item.volumeInfo.previewLink}><button>More</button></a>
                    </div>
                </div>

                <h4 className ="description">{item.volumeInfo.description}</h4>

            </div>


        </div>
        
        
        </>


    )

}

