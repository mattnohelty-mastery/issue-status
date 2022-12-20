import React from "react";
import styled from "styled-components";

const FlexBox = styled.div`
  margin: 32px auto 0 auto;
  max-width: 1040px;
`;

const Label = styled.div`
  margin-right: 8px;
  display: inline;
`;

const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: ${props => props.inputColor || "white"};
  border: none;
  border-radius: 3px;
`;

export default () =>
    <FlexBox>
        <Label>Subscribe to notifications:</Label>
        <Input defaultValue="name@domain" type="text" />
        <Button>Unsubscribe</Button>
        <Button primary>Subscribe</Button>
    </FlexBox>;
