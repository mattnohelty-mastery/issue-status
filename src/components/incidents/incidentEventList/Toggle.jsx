import React, { useState } from "react";
import styled from "styled-components";

const ToggleIcon = styled.div`
  cursor: pointer;
`;

const Toggle = ({ children, open = false }) => {
  const [isActive, setIsActive] = useState(open);

  return (
    <>
      <ToggleIcon
        onClick={() => setIsActive(!isActive)}
        title={isActive ? "close" : "open"}
      >
        {isActive ? "-" : "+"}
      </ToggleIcon>
      {isActive && children}
    </>
  );
};

export default Toggle;
