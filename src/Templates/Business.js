import React from 'react';
import Api from "../Services/Api"
import Footer from "./Footer"
function Business(){
    return(
        <div>
           <Api name="Business"/>
           <Footer/>
        </div>
    )
}


export default Business;