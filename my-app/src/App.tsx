import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  box-sizing: border-box;
  width: fit-content;
  font-size: 24px;
  height: 5rem;
  justify-content: center;
  align-items: center;
  div {
    margin: 20px;
    width: 200px;
    padding: 20px;
    height: 200px;
  }
`;

function App() {
  return (
    <Container>
      <Wrapper>
        <div>
          This is Dark Theme 👻
          <button type="submit">button</button>
        </div>
      </Wrapper>
    </Container>
  );
}
export default App;
