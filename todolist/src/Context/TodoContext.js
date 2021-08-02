import React, { createContext, useContext, useReducer, useRef } from 'react';
import TodoInitial from './TodoInitial';


function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE': // 생성 
      return state.concat(action.todo);
    case 'TOGGLE': // Todoitem 클릭시 불린값 변경
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE': // 삭제 
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();


export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, TodoInitial);
  const nextId = useRef(5)
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>   
  );
}

export function useTodoState(){
  const context = useContext(TodoStateContext);
  if(!context){
    throw new Error('cannot find TodoProvider');
  }
  return context;
}

export function useTodoDispatch(){
  const context = useContext(TodoDispatchContext);
  if(!context)
    throw new Error("Cannot find TodoProvider");
  return context;
}

export function useTodoNextId(){
  const context = useContext(TodoNextIdContext);
  if(!context){
    throw new Error("Cannot find TodoProvider")
  }
  return context
}