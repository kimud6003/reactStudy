import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width:512px;
  height:80vh;

  position : relative;
  background-color: white;
  border-radius: 16px;

  margin: 0 auto;
  margin-top:4%;
  display:flex;
  flex-direction:column;
`;
function TodoTemplate({ children }) {
  return( 
  <TodoTemplateBlock>
      {children}
  </TodoTemplateBlock>
  )
}

export default TodoTemplate;