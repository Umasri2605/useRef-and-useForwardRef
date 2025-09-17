import React from 'react'

 var C=React.forwardRef(function(props,refs) {
  return (
    <div className="border border-3 border-warning p-1 m-1">
      <h1>C Component</h1>
      <input type="text" placeholder='Enter Your Address' ref={refs} />

    </div>
  )
});

export default C
