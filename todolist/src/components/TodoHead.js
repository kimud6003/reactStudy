import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../Context/TodoContext';

const TodoHeadBlock = styled.div`
  padding-top : 32px;
  padding-bottom : 24px;
  background-color:#44475a;
  /* border-radius: 16px; */
  border-bottom: 1px solid #e9ecef;
  display:flex;
  flex-direction: column;
  align-items:center;

  h1{
    margin:0;
    font-size:2rem;
    color : #343a40;
  }
  .day{
    color: #868e96;
    text-align:right;
  }
  .tasks{
    color: #20C997;
    font-size:1rem;
    font-weight: bold;
  }

`

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);
  
  const today = new Date();
  const dateString =today.toLocaleDateString('ko-KR',{
    year:"numeric",
    month:'long',
    day:'numeric'
  });

  const dayName = today.toLocaleDateString('ko-KR',{weekday:'long'})
  
  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks"> 해야 할 일 {undoneTasks.length}</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;