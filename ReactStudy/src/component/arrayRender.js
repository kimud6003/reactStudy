import React from 'react';

function CarLayout({data,onRemove,onToggle}){
    return(
        <div style = {{border : "1px solid black"}} >
            <p style = {{cursor: 'pointer',color: data.active ? 'green' : 'black' }}
               onClick={()=>onToggle(data.id)} >
              {data.id}: ({data.car}) ({data.number}) 
              <button onClick={() => onRemove(data.id)}>삭제</button> 
            </p>
        </div>
    )
}

function Counter({Cars,onRemove,onToggle}) {
  return (
    <div>
        {Cars.map(dummy => {
           return <CarLayout data = {dummy} key={dummy.id} onRemove ={onRemove} onToggle={onToggle}/>
        })}
    </div>
  );
}

export default Counter;