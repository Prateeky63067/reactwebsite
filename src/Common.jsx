import React from "react";
import web from "../src/images/img1.jpg";
import { NavLink } from "react-router-dom";
const Common=(props)=>{
  return(<>
        
       <section id="header" className="d-flex align-items-center">
       <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
          <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>{props.name}<strong className="brand-name">yadavPrateek</strong></h1>
                  <h2 className="my-3">
                    We Are The Team Of Talented Developer Making Website
                  </h2>
                  <div className="mt-3">
                     <NavLink className="btn-get-started" to={props.visit}>{props.btnname}</NavLink>
                  </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgsrc} className="img-fluid animated" alt="home img"/>
              </div>
              </div>
          </div>
        </div>
      </div>
       </section>

  </>)
}
export default Common;