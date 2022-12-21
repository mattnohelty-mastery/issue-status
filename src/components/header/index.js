import React from "react";
import styled from "styled-components";

const Header = styled.header`
  margin-bottom: 16px;
  background-color: black;
  height: 30px;
  padding: 10px;
  display: flex;
`;

const Logo = styled.img`
  align-self: flex-start;
`;

const Title = styled.h1`
  width: 100%;
  color: white;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 28px;
  align-self: center;
  margin-left: -118px;
  text-align: center;
  letter-spacing: 5px;
  line-height: 1.2em;
`;

const TitlePrime = styled.span`
  color: #b25d42;
`;

export default () =>
  process.env.REACT_APP_LOGO || process.env.REACT_APP_NAME ? (
    <Header>
      {process.env.REACT_APP_LOGO ? (
        <Logo
          src={process.env.REACT_APP_LOGO}
          alt={process.env.REACT_APP_NAME}
        />
      ) : null}
      <Title>
        MasterMind <TitlePrime>Status</TitlePrime>
      </Title>
    </Header>
  ) : null;
