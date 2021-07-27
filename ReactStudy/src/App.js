import React,{useRef,useState} from 'react';
// import Count from './component/Count'
import Dummy from './dummy/cars'
import CreateCar from './component/CreateCar'
import ArrayRender from './component/arrayRender'
import './App.css';

function App(props) {
  const nextId = useRef(4); //더미데이터의 길이가 3이기 때문에 4부터 시작
  const [inputs, setInputs] = useState({ //Input State 설정
    car : "",
    number : ""
  })
  const [Cars, setCars] = useState([...Dummy]) // Dummy데이터를 state로 설정해 변화에 반응하게 세팅
  const onChange = (e) =>{
    const {name, value}= e.target; // e.target에 있는 name과 value를 들고 온다 
    setInputs({
      ...inputs,
      [name] : value
    })
  }
  const {car,number} = inputs;
  const onCreate = () => { //동적 생성 
    const Car = { //현재 Ref의 값과, input값들을 넣어준다 
      id : nextId.current,
      car,
      number
    };
    setCars(Cars.concat(Car));
    setInputs({
      car:'',
      number:''
    })
    nextId.current+=1;
  }
  const onRemove = (id) => {
    setCars(Cars.filter(Car => Car.id !== id));
  }
  const onToggle = id => {
    setCars(
      Cars.map(car=>
        car.id === id ? { ...car, active: !car.active } : car
      )
    );
  };
  return (
    <div className="App">
      {/* <Count/> */}
      <CreateCar
        carName={car}
        carNumber={number}
        onChange={onChange}
        onCreate={onCreate}
      />
      <ArrayRender Cars={Cars} onRemove = {onRemove} onToggle = {onToggle}/>
    </div>
  );
}

export default App;