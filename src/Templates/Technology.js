import React from 'react';
import Api from "../Services/Api"
import Footer from "./Footer"

function Technology(){
    return(
        <div>
           <Api name="technology"/>
           <Footer/>    
        </div>
    )
}


export default Technology;