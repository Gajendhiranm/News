import React from 'react';
import Api from "../Services/Api";
import Footer from "./Footer"

function Health(){
    return(
        <div>
           <Api name="health"/>
           <Footer/>
        </div>
    )
}


export default Health;