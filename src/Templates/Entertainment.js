import React from 'react';
import Api from "../Services/Api"
import Footer from "./Footer"

function Entertainment(){
    return(
        <div>
           <Api name="entertainment"/>
           <Footer/>
        </div>
    )
}


export default Entertainment;