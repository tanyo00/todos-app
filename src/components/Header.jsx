import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: whitesmoke;
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
`;

const HeaderInner = styled.h1`
  width: 100%;
  height: 7vh;
  text-align: center;
  margin-top: 10px;
  box-shadow: 3px 3px 3px #ccc;
  border-radius: 10px;
`;
export default function Header() {
  return (
    <HeaderContainer>
      <HeaderInner>Todo app</HeaderInner>
    </HeaderContainer>
  );
}
