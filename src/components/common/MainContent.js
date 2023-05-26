import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  width: 55%;
  padding-top: 30px;
  gap: 15px;
`;

const MainContent = (props) => {

  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  );
}

export default MainContent;