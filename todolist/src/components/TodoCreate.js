import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import TodoInput from './TodoInput';

const CircleButton = styled.button`
  background: #bd93f9;
  &:hover {
    background: #e2d5f5;
  }
  &:active {
    background: #ff79c6;
  }
  z-index:1;
  width: 5rem;
  height: 5rem;
  font-size: 3rem;
  color: white;
  
  border: none;
  border-radius: 50%;
  outline: none;

  cursor: pointer;
  position:absolute;
  left: 50%;
  bottom: 0;
  /* bottom: 10rem; */

  display:flex;
  justify-content:center;
  align-items:center;
  /* margin: 0 auto; */
  transition: 0.125s all ease-in;
  transform: translate(-50%, 50%);
  ${props =>
    props.open &&
    css`
      background: #ff79c6;
      &:hover {
        background: #e2d5f5;
      }
      &:active {
        background: #e2d5f5;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (<TodoInput setOpen={setOpen}/>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;