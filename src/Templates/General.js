import React from 'react';
import Api from "../Services/Api";
import Footer from "./Footer"

function General(){
    return(
        <div>
           <Api name="general"/>
           <Footer/>
        </div>
    )
}


export default General;