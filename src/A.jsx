import React, { useEffect, useRef } from 'react'
import B from './B'
import C from './C';

function A() {
    const aRef=useRef();
    const bRef=useRef();
    const cRef=useRef();

    useEffect(()=>{
        aRef.current.focus(); 
    },[]);
    function checkEnter(ev){
        if(ev.key==="Enter"){
            bRef.current.focus();
        }
    }
   return (
    <div className="border border-3 border-success p-1 m-1">
      <h1>A Component</h1>
      <input type="text" placeholder='Enter Your Name' ref={aRef}  onKeyUp={(e)=>{checkEnter(e)}}/>
      <B ref={[bRef,cRef]}></B>
      <C ref={cRef}></C>
    </div>
  )
}

export default A
