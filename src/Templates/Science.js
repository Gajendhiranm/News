import React from 'react';
import Api from "../Services/Api"
import Footer from "./Footer"

function Science(){
    return(
        <div>
           <Api name="science"/>
           <Footer/>
        </div>
    )
}


export default Science;