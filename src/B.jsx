import React, { forwardRef } from 'react'

var B=React.forwardRef(function(props,refs) {
    console.log("props",props);
    console.log("refs",refs)
    function checkEnter(ev){
        if(ev.key==="Enter"){
            refs[1].current.focus();
        }
    }
  return (
    <div className="border border-3 border-warning p-1 m-1">
      <h1>B component</h1>
      <input type="text" onKeyUp={(e)=>{checkEnter(e)}} placeholder='Enter Your Age' ref={refs[0]} />
    </div>
  )
});

export default B
