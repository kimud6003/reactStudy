import React,{useRef,useState} from 'react';
// import Count from './component/Count'
import Dummy from './dummy/cars'
import CreateCar from './component/CreateCar'
import ArrayRender from './component/arrayRender'
import './App.css';

function App(props) {
  const nextId = useRef(4);
  const [inputs, setInputs] = useState({
    car : "",
    number : ""
  })
  const [Cars, setCars] = useState([...Dummy])
  const onChange = (e) =>{
    const {name, value}= e.target;
    setInputs({
      ...inputs,
      [name] : value
    })
  }
  const {car,number} = inputs;
  const onCreate = () => {
    const Car = {
      id : nextId.current,
      car,
      number
    };
    setCars(Cars.concat(Car));
    console.log(Cars)
    setInputs({
      car:'',
      number:''
    })
    nextId.current+=1;
  }
  const onRemove = (id) => {
    setCars(Cars.filter(Car => Car.id !== id));
  }
  return (
    <div className="App">
      {/* <Count/> */}
      <CreateCar
        carName={car}
        carNumber={number}
        onChange={onChange}
        onCreate={onCreate}
      />
      <ArrayRender Cars={Cars} onRemove = {onRemove}/>
    </div>
  );
}

export default App;