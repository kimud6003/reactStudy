import React from 'react';
import Cars from'../dummy/cars';

function CarLayout({data}){
    return(
        <div style = {{border : "1px solid black"}} >
            <p>{data.id}</p>
            <p>{data.car}</p>
            <p>{data.number}</p>
        </div>
    )
}

function Counter() {
  return (
    <div>
        {Cars.map(dummy => {
           return <CarLayout data = {dummy}/>
        })}
    </div>
  );
}

export default Counter;