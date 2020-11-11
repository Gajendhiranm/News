import React from 'react';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import General from './General';
import Science from "./Science";
import Entertainment from "./Entertainment"
import Health from "./Health"
import Technology from "./Technology"
import Sports from "./Sports"
import Business from "./Business";
function Navbar(){
    return(
     <BrowserRouter>
     
        <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand"><m>NEWS</m> NOW</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/news">Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Technology">Technology</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Sports" >Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Business" >Business</Link>
            </li>
          </ul>
       

        </div>
      </nav>
      <Switch>   
        <Route exact path="/news" component={General} />
         <Route path="/Science" component={Science} />
         <Route path="/Health" component={Health} />
         <Route path="/Technology" component={Technology} />
         <Route path="/Entertainment" component={Entertainment} />
         <Route path="/Sports" component={Sports} />
         <Route path="/Business" component={Business} />
         </Switch>
         
      </BrowserRouter>
    )
}

export default Navbar;