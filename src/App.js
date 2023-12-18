import Navbar from './components/Navbar'
import Textarea from './components/Textarea'
import React,{useState} from 'react'
import Alert from './components/Alert'
import About from './components/About'

function App() {

   const[alert,setA]=useState(null);
    
const showAlert=(m,s)=>{
    setA({
        msg:m,
        status:s
    })

    setTimeout(()=>{
        setA(null)
    },1500);

   }


   const[theme,setT]=useState({
        backgroundcolor:'white',
        color:'black'
    })

    const[mode,set]=useState('light');
    const changeTheme=()=>{
       
        if(mode==='light')
      {  
        set('dark');
        setT({
            background:'black',
            color:'white'
        }) 
     }
      else 
        {
        set('light');
        setT({
            background:'white',
            color:'black'
        })
     
        }
    }

    
return (
<>
 <Navbar  title="Text analyser " about="about" t={theme} m={mode} f={changeTheme} a={showAlert} />
  <Alert obj={alert} />
  <Textarea value="Enter the text" m={mode} a={showAlert}/>
  <About/>

</>  );
}
export default App;