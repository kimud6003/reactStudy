# VeloPert React Study

## 리액트란?
- 기존 JS에서는 브라우저의 DOM Selector API를 사용해서 특정 DOM을 선택후, 특정 이벤트가 발생하면 변화를 주도록 선택해야한다. 

- 인터랙션이 자주 발생하고, 이에 따라 동적으로 UI를 표현해야한다면, 이러한 규칙이 다양해질것이고 , 그러면 관리하기도 힘들어질것입니다.

<img src="./Readmeimg/document.png" style="width : 50vw"> </img>
 
- 이러한 단점을 보완하고자 다양한 프레임 워크들이 개발이 되었습니다 (Angular,React,Vue) 

- React는 상태가 변경되는 Dom을 업데이트해서 기존의 상태가 전부 바뀌는것과 비교해 속도에서 차이를 보여줍니다.

- 이러한 변경점은 React의 가상돔(vitual Dom)에 대해서 알아보도록 하겠습니다.

    - 가상돔이란? : 실제 돔에 접근하여 조작하는 대신 추상화 시킨 JS객체를 사용하는것

    - 절차 : 변화 발생 -> 변화된 버전을 가상돔으로 변환 -> 가상돔 끼리 비교 -> 바뀐 부분만 적용

    <img src="./Readmeimg/VirtualDom.png"  style="width : 50vw" > </img>

## 리액트 시작하기

- 리액트를 처음부터 하나씩 세팅할수 있지만, `npx create-react-app 폴더명` 을 통해 간편하게 세팅할수 있다.

- 해당 명령어를 통해 설치를 하게되면 JSX라는 파일이 생긴다.

- JSX는 얼핏보면 HTML처럼 생겼지만 JS로 구성되어있어 HTML과는 다른 규칙을 따른다.

- index.jsx는 아래와 같은 형식을 가진다.

``` js
import React from 'react'; //react 설정
import ReactDOM from 'react-dom'; // reactDom 설정
import './index.css'; // CSS 파일 설정
import App from './App'; // 컴포넌트 설정
import reportWebVitals from './reportWebVitals'; // 리액트의 성능 측정

ReactDOM.render(
  <React.StrictMode> 
    <App />  // app.js 컴포넌트 출력
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

//reactDOM.render를 이용해 출력

// React.StrictMode 
//  1) 안전하지 않은 생명주기를 사용하는 컴포넌견 발견
//  2) 레거시 문자열 ref 사용에 대한 경고
//  3) 권장되지 않는 findDOMNode 사용에 대한 경고
//  4) 예상치 못한 부작용 검사
//  5) 레거시 context API 검사
```
- JSX의 규칙 : 태그들은 감싸져있어야 하며 닫혀있어야 한다.

## props 

- Props : properties의 줄임말

- 사용법 

```js
import React from 'react';
import tmp from './tmp';

function App() {
  return (
    <Hello name="react" />
  );
}

export default App;
```

```js
import React from 'react';

function tmp(props) {
  return <div>{props.name}</div>
}

export default tmp;
```

- 결과물

<img src="./Readmeimg/Props.png" style="width : 50vw" ></img>

## 조건부 렌더링 

- 조건부 렌더링은 if문을 return 구문에서 사용할수 없기에 삼항 연산자를 활용하여 구현한다.

```js
import React from 'react';

function tmp(name) {
  return (
    <div>
      { name ? <b>조건부 렌더링 성공\n</b> : null }
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: 'Props 전달 없음'
}

export default tmp;

```
- 결과물

<img src="./Readmeimg/conditionRender.png" style="width : 50vw" ></img>


## State

- 1. state가 바뀌면 해당 state를 사용하는 컴포넌트와 그 하위 자식 컴포넌트들은 재렌더링 된다. 
  
  - 때문에 재렌더링을 최소화하기 위해 필요한 state에 따라 컴포넌트를 분리해야 한다
  
  - 대표적으로 삼항연산자, form, 반복문(map, filter...), redux에서 state를 받아 쓰는 부분 등

 
- 2. 재 렌더링 된 후에 state가 반영된 것을 확인할 수 있으므로 setState 직후 state를 확인할 수는 없다.

- 3. 객체 형태로 setState를 하면 오브젝트 컴포지션이 되어 덮어씌워져 원하는 동작을 하지 않을 수도 있다.
  
  - 함수형 업데이트가 필요한 이유이다.
  
- 컴포넌트의 State를 설정하여 관리할수있습니다.

```js
import React from 'react';
  const [number, setnumber] = useState(0);
  const ChangeCount=(e)=>{
    setnumber(number+e)
  }
function Counter() {
  return (
    <div>
      <h1>0</h1>
      <button>+1</button>
      <button>-1</button>
    </div>
  );
}

export default Counter;
```
```js
import React, { useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    })
  };


  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
```

## useRef(js의 getElementById)

- js에서 DOM을 선택할때 getElementById나 querySelector와 같은 기능이 필요할때 사용합니다.

- 이번 강의에서는 class형 react를 사용하지 않지만 class 형태에서는 React.createRef를 사용합니다.

```js
import React, { useRef } from 'react';
const nameInput = useRef();
  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });
    nameInput.current.focus();
  };
```

## array Rendering

- 우리가 서버와 rest통신을 통해서 자료를 받아온다고 가정하면 User의 데이터가 배열 행태로 들어오게 될것입니다.

```js
  const cars = [
    {
      id: 1,
      car: 'bentz',
      number: '12가1234'
    },
    {
      id: 2,
      car: 'kia',
      number: '22타1014'
    },
    {
      id: 3,
      car: 'morning',
      number: '19라2038'
    }
  ];
```
- 위와 같은 데이터들이 있다고 가정하겠습니다.

- 데이터를 읽어 한줄씩 출력하기위해서는 map을 사용해야합니다. (return 구문안에서는 for문이 사용이 불가합니다)

```js
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
```

- 결과물 

<img src="./Readmeimg/ArrayRendering.png" style="width : 50vw" ></img>

- 결과물 자체는 문제 없이 출력 되지만 콘솔창을 들어가보면 key값을 배치해 달라는 글이 있다.

```js
  {Cars.map(dummy => {
    return <CarLayout data = {dummy} key = {dummy.id}/>
  })}
```

## 배열 CRUD

- 배열의 CRUD를 하기 위해서 떠올려야 하는것은 React는 state값에 의해 리랜더링을 진행한다는것

- 따라서 dummy 데이터를 state에 넣어줘야할 필요가 있음

- 배열의 key을 사용해 삭제 하거나 바꿀수 있음

``` js
//app.js
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
```

```js
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
```

## Hook 정리

- useEffect : 컴포넌트가 마운트, 언마운트 , 업데이트 될때 작업을 처리해라

  - deps : deps가 비어 있을경우 컴포넌트가 마운트 될때 useEffect에 등록함수가 실행, 언마운트가 될떄 cleanup 메소드 실행
> 마운트때 주로하는 작업 : Props값을 로컬 상태 저장, 외부 API호출, 라이브러리 사용


```js
  useEffect(() => {
    console.log('컴포넌트 마운트');
    return () => {
      console.log('컴포넌트가 언마운트 ');
    };
  }, [deps]);
```

- useMemo : 성능 최적화를 위해서 사용

  - ex : 존재하는 자동차의 activate 값을 체크하는데, 그냥 구현하면 input을 수정할 때마다 실행이 된다.

<img src="./Readmeimg/usememo전.png " style="width : 25vw"  ></img>
<img src="./Readmeimg/usememo전2.png " style="width : 30vw" ></img>

  - 왜 input을 수정하는데 컴포넌트가 마운트 되는것일까?

  - input을 수정하면 setInput이 작동하면서 컴포넌트가 마운트 된다. (이것은 React.memo를 이용하여 방지가능)

  ```js
  // props가 바뀌지 않는다면 렌더링을 하지 말아라 
  export default React.memo(CreateCar) 
  ```

- 따라서 useMemo를 사용해 이전에 사용한 값을 재사용해 효율적이게 만든다.

```js
  const count = useMemo(() => 최적화를원하는함수(), [변수])수
```
 - 첫번째 파라미터에는 함수를 두번째 파라미터에는 deps 배열

 - deps 배열 안에 넣은 내용이 바뀌면, 우리가 등록한 함수를 호출해서 값을 연산해주고,만약에 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용

 - useCallback : useMemo 는 특정 결과값을 재사용 , useCallback 은 함수를 만들지 않고 재사용하고 싶을때 사용

 - 함수 안에서 사용하는 state 혹은 props 가 있다면 꼭, deps 배열안에 포함

> Before
```js
  const onToggle = (id) => {
    setCars(
      Cars.map(car=>
        car.id === id ? { ...car, active: !car.active } : car
      )
    );
  };
```

> After
```js
  const onToggle = useCallback((id) => {
    setCars(
      Cars.map(car=>
        car.id === id ? { ...car, active: !car.active } : car
      )
    );
  },[Cars]);
```

## useState (함수형 업데이트로 최적화 하기)

  - setState는 생각해보면 비동기적으로 작동해야 한다(동기적일 경우 state값이 crtical section이 될수도 있다)

  - 그리고 비동기적으로 작업하기 위해서 react에서는 인자들을 순서로 합치는것이 아닌 `하나의 객체로 합쳐(오브젝트 컴포지션)` 진행

  ```js
  this.state.value = 3;
  this.setState({ vlaue :this.state.value +1});
  this.setState({ vlaue :this.state.value +2});
  this.setState({ vlaue :this.state.value +3});
  ```

  ```js
  const singleObj = Object.assign(
    {},
    objectFromSetStat1,
    objectFromSetStat2,
    objectFromSetStat3,
  )
  ```
  - 이런 비동기적인 방법을 해결하기 위해서 함수형 업데이트를 하면 `오브젝트 컴포지션`을 진행하지 않는다.
## useReudcer

- 상태 관리를 하기위해서 지금까지는 useState를 사용해 왔다.

- useState를 사용하면 해당 컴포넌트에서만 사용할수 있다는 단점이 존재

- useReducer를 사용하면 컴포넌트 밖에서도 사용할수 있음


```js
// app.js를 useReducer로

function countActiveCars(Cars) {
  console.log('활성 사용자 수를 세는중...');
  return cars.filter(car => car.active).length;
}

const [Cars, setCars] = useState([...Dummy]) 

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case 'CREATE_car':
      return {
        inputs: initialState.inputs,
        cars: state.cars.concat(action.car)
      };
    case 'TOGGLE_car':
      return {
        ...state,
        cars: state.cars.map(car =>
          car.id === action.id ? { ...car, active: !car.active } : car
        )
      };
    case 'REMOVE_car':
      return {
        ...state,
        cars: state.cars.filter(car => car.id !== action.id)
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = careducer(reducer, initialState);
  const nextId = caref(4);

  const { cars } = state;
  const { carname, email } = state.inputs;

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_car',
      car: {
        id: nextId.current,
        carname,
        email
      }
    });
    nextId.current += 1;
  }, [carname, email]);

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_car',
      id
    });
  }, []);

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_car',
      id
    });
  }, []);

  const count = useMemo(() => countActivecars(cars), [cars]);
  return (
    <>
     <CreateCar
        carName={car}
        carNumber={number}
        onChange={onChange}
        onCreate={onCreate}
      />
    <ArrayRender Cars={Cars} onRemove = {onRemove} onToggle = {onToggle}/>
      활성된 자동차수 : {count}
    </>
  );
}

export default App;
```
