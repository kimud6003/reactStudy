import React from 'react';

function CarLayout({data,onRemove}){
    return(
        <div style = {{border : "1px solid black"}} >
            <p>{data.id}: ({data.car}) ({data.number}) <button onClick={() => onRemove(data.id)}>삭제</button> </p>
        </div>
    )
}

function Counter({Cars,onRemove}) {
  return (
    <div>
        {Cars.map(dummy => {
           return <CarLayout data = {dummy} key={dummy.id} onRemove ={onRemove}/>
        })}
    </div>
  );
}

export default Counter;