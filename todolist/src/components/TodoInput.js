import React,{useState} from 'react';
import styled from 'styled-components';
import { useTodoDispatch, useTodoNextId } from '../Context/TodoContext';

const InsertFormPositioner = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 2rem;
  padding-top: 3rem;
  padding-right: 2rem;
  padding-bottom: 4rem;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;
`;

function TodoInput(props) {
  const [value, setValue] = useState('');
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  const onChange = e => setValue(e.target.value);

  const onSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });
    setValue('');
    // props.setOpen(false);

    nextId.current += 1;
    
  }
  return (
    <>
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              onChange={onChange}
              value={value}
            /> 
          </InsertForm>
        </InsertFormPositioner>
    </>
  );
}

export default React.memo(TodoInput);