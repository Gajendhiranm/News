import React from 'react';
import '../App.css';
function Card({e,index}){
    console.log(index);
    if(index === 0){
        return(
            <div>
           <div style={{backgroundImage: `url(${e.urlToImage})`}} className="banner d-flex  flex-column justify-content-between ">
            <div className="p-3 ">
                <button className="trend btn btn-danger my-2">TRENDING</button>
                <p className="author">{e.author}</p>
                <p className="time">{e.publishedAt}</p>
            </div>
            <div className="p-3 bg-dark text-white ">
                <p>{e.description}</p>
                <p>{e.content}</p>
            </div>
        </div>
        <button className="button-button  m-3">Top Live stories</button>
            </div>
          
        )
    }
  else{
    return(
    
        <div className="col-md-12 d-flex flex-row mt-2 flex-wrap container">
    <img className="rounded img-fluid col-md-5" src={e.urlToImage} />
    <div className="mt-4 col-md-7">
        <h6 className="font-weight-medium else-author">{e.author}</h6>
        <p className="else-time">{e.publishedAt}</p>
        <p>{e.description}</p>
        <p className="mt-3 con">{e.content}</p>
        <a href={e.url} target="blank">Learn more</a>
    </div>

    </div>
)
  }
   
}


export default Card;