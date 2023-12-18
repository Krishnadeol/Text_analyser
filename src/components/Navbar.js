import React from 'react'

export default function Navbar(props) {
 const handleAlert=()=>{
  props.f();
  if(props.m==='light')
  props.a("Light mode enabled","success");
  else
  props.a("Dark mode enabled","success");
 }
    return (
      <>
      <div style={props.t}>
   <nav className="navbar" >
  <div className="container-fluid">
    <h1>{props.title}</h1>
    <div className="form-check form-switch">
  <input className="form-check-input" onClick={handleAlert} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.m==="light"?"Dark":"Light"}</label>
</div>
      </div>
       </nav>
       </div>
     </>
    );
}