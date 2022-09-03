import React from "react";
import web from "../src/images/img1.jpg";
import { NavLink } from "react-router-dom";
import Common from './Common';
const Home=()=>{
  return(<>
        
        <Common 
       name='Grow Your Business With ' 
       imgsrc={web} 
       visit='/service' 
       btnname="Get started"
        
       />
  </>)
}
export default Home;