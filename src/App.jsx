import { useEffect, useRef } from "react"
function App() {
  var aRef=useRef();
  var bRef=useRef();
  function handleClick(){
    var x=aRef.current.value;
    bRef.current.innerText=x;
  }
  useEffect(()=>{
    aRef.current.focus();
  },[]);
  
  return (
    <div className="border border-3 border-secondary p-3 m-3">
       <h1>useRef Component:</h1>
       <input type="text" ref={aRef}/>
       <button onClick={()=>{handleClick();}}>ShowText</button>
       <h3>Myname:<span ref={bRef}></span></h3> 
    </div>
    
  )
}

export default App
