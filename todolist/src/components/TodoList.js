import React from 'react';
import styled from 'styled-components';
import { useTodoNextId, useTodoState } from '../Context/TodoContext';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  padding: 1rem 2rem;
  padding-bottom: 10rem;
  overflow:auto;
  &::-webkit-scrollbar{
    display:none
  }
`;

function TodoList() {
  const todos = useTodoState();
  const nextId = useTodoNextId;
  // const lastRef = useRef();
  return (
    <TodoListBlock>
      {todos.map(todo =>(
        <TodoItem 
        key={todo.id}
        id={todo.id}
        text={todo.text}
        done={todo.done} 
        ref={nextId.current}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;