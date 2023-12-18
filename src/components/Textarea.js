import React,{useState} from 'react'

export default function Textarea(props) {
  
const[text,setT]=useState(''); 

const handleC=()=>{
  setT('');
  props.a("Text cleared","warning");
}

const handleChange=(event)=>{
setT(event.target.value);
}

const handleU=()=>{
    let result=text.toUpperCase();
    setT(result);
}

const handleL=()=>{
    let result=text.toLowerCase();
    setT(result);
}

return (
  <div style={{background:props.m==='light'?'white':'grey'}}>
<div className="container">
<div >
<label className="form-label">{props.value}</label>
<textarea className="form-control" value={text}  onChange={handleChange} id="exampleFormControlTextarea1" rows="9"></textarea>
<button className="btn btn-primary my-3 mx-1" onClick={handleU}>Uppercase</button>
<button className="btn btn-primary my-3 mx-1" onClick={handleL}>Lowercase</button>
<button className="btn btn-primary my-3 mx-1" onClick={handleC}>Clear</button>

<p>{text.split(' ').length-1} words and {text.length} characters</p>
</div>
</div>
</div>
  );
}
 