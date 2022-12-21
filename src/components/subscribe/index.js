import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";

const FlexBox = styled.div`
  margin: 32px auto 0 auto;
  max-width: 1040px;
`;

const Label = styled.label`
  margin-right: 8px;
  display: inline;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? "green" : "white")};
  color: ${(props) => (props.primary ? "white" : "gray")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => (props.primary ? "green" : "gray")};
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: "black";
  background: ${(props) => props.inputColor || "white"};
  border: ${(props) => (props.isError ? "1px solid red" : "none")};
  border-radius: 3px;
`;

export default () => {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  );
  const notify = (type, msg) => {
    switch (type) {
      case "error":
        toast.error(msg);
        break;
      case "info":
      default:
        toast(msg);
        break;
    }
  };

  const [email, setEmail] = useState("");
  const [emailInputError, setEmailInputError] = useState(false);

  const validateEmail = () => {
    if (!emailRegex.test(email)) {
      notify("error", "Please enter a valid email address");
      setEmailInputError(true);
      return false;
    } else {
      setEmailInputError(false);
      return true;
    }
  };

  const handleSubscribeClick = async (toSubscribeOrNotToSubscribe) => {
    if (!validateEmail()) return;

    const endpoint = toSubscribeOrNotToSubscribe ? "subscribe" : "unsubscribe";
    try {
      const baseUrl = process.env.REACT_APP_NOTIFICATION_SERVICE_BASEURL ?? "http://localhost";
      const response = await axios.put(`${baseUrl}/${endpoint}?email=${email}`);
      console.log(response);
      notify("info", "Subscription Updated");
    } catch (err) {
      notify("error", "error :(");
      console.error(err);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubscribeClick(true);
    }
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <FlexBox>
        <Label htmlFor="emailInput">Subscribe to notifications:</Label>
        <Input
          placeholder="email@example.com"
          type="email"
          id="emailInput"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          isError={emailInputError}
          onKeyDown={handleKeyDown}
        />
        <Button primary onClick={() => handleSubscribeClick(true)}>
          Subscribe
        </Button>
        <Button onClick={() => handleSubscribeClick(false)}>Unsubscribe</Button>
      </FlexBox>
    </>
  );
};
