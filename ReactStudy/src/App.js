import React,{useRef,useState,useMemo} from 'react';
// import Count from './component/Count'
import Dummy from './dummy/cars'
import CreateCar from './component/CreateCar'
import ArrayRender from './component/arrayRender'
import './App.css';

function App(props) {
  function countActiveCars(cars) {
    console.log('활성 자동차수 카운트 ');
    return cars.filter(car=> car.active).length;
  }
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
  // const count = useMemo(() => countActiveCars(Cars), [Cars]);
  const count = countActiveCars(Cars)
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
      활성된 자동차수 : {count}
    </div>
  );
}

export default App;