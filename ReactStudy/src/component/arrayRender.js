import React from 'react';

function CarLayout({data}){
    return(
        <div style = {{border : "1px solid black"}} >
            <p>{data.id}: ({data.car}) ({data.number})</p>
        </div>
    )
}

function Counter({Cars}) {
  return (
    <div>
        {Cars.map(dummy => {
           return <CarLayout data = {dummy} key={dummy.id}/>
        })}
    </div>
  );
}

export default Counter;