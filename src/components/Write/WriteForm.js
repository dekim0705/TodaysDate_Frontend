import React, { useState } from "react";
import styled from "styled-components";
import InputField from "./InputField";
import Region from "./Select/Region";
import Schedule from "./Select/Schedule";
import Theme from "./Select/Theme";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin-bottom: 20px;
  p {
    /* 본문 텍스트 */
    font-size: 1em;
    padding: 10px 30px;
    line-height: 1.8em;
  }
`;

const SelectWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width:768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const WriteForm = ({ onTitleChange, onDistrictChange, onComment1Change, onComment2Change, onComment3Change }) => {
  return (
    <Container>
      <InputField 
        onTitleChange={onTitleChange}
        onDistrictChange={onDistrictChange}
        onComment1Change={onComment1Change}
        onComment2Change={onComment2Change}
        onComment3Change={onComment3Change}
      />
      <SelectWrapper>
        <Region />
        <Schedule />
        <Theme />
      </SelectWrapper>
    </Container>
  );
}

export default WriteForm;