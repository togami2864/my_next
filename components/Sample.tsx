import React from 'react';
import styled from 'styled-components';
export const Sample: React.FC = () => {
  return (
    <div>
      <Wrapper>hello</Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  font-size: 23px;
  background-color: red;
`;
