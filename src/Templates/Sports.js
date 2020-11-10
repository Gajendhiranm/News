import React from 'react';
import Api from "../Services/Api"
import Footer from "./Footer"

function Sports(){
    return(
        <div>
           <Api name="sports"/>
           <Footer/>
        </div>
    )
}


export default Sports;