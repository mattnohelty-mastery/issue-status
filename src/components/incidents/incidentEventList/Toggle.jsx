import React, { useState } from "react";
import styled from "styled-components";

const ToggleIcon = styled.div`
  cursor: pointer;
  font-size: 13px;
  color: #678;
`;

const Toggle = ({ children, open = false }) => {
  const [isActive, setIsActive] = useState(open);

  return (
    <>
      <ToggleIcon
        onClick={() => setIsActive(!isActive)}
        title={isActive ? "close" : "open"}
      >
        {isActive ? "- hide events" : "+ show events"}
      </ToggleIcon>
      {isActive && children}
    </>
  );
};

export default Toggle;
