import React from "react";
import { NavLink } from "react-router-dom";
const Footer=()=>{
return(<>
    <footer className="bg-light text-center text-lg-start">

<div className="text-center p-3" >
  © 2020 Copyright:
  <NavLink className="text-dark" to="https://mdbootstrap.com/">yadavPrateek</NavLink>
</div>

</footer>
</>)
}

export default Footer;