import React, { useState } from 'react';

function Counter() {
  const [number, setnumber] = useState(0);
  const ChangeCount=(e)=>{
    setnumber(number+e)
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={()=>ChangeCount(+1)}>+1</button>
      <button onClick={()=>ChangeCount(-1)}>-1</button>
    </div>
  );
}

export default Counter;