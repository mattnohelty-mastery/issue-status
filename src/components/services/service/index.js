import React from "react";
import styled from "styled-components";
import Status from "./status";
import Collapsible from 'react-collapsible';
// import usePods from "./usePods";

const Service = styled.div`
  background-color: #f7f8f9;
  padding: 8px 16px;
  border-radius: 3px;
  justify-content: space-between;
  align-items: center;
  
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

const ServiceHeader = styled.div`
  font-size: 18px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const ServiceBody = styled.div`
  background-color: #f7f8f9;
  /* padding: 8px 16px; */
  flex-direction: column;
`;

const PodHeader = styled.div`
  background-color: #EFF0F0;
  /* padding: 2px 16px; */
  padding: 8px 0px 8px 16px;
  margin: 4px 0px;
  border-radius: 3px;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

const PodLabel = styled.div`
  padding: 8px 0px;
`;

const PodBody = styled.div`
  background-color: #f7f8f9;
  /* padding: 8px 16px; */
  border-radius: 3px;
  align-items: center;
`;

export default ({ service }) => {
  // const [
  //   podsLoading,
  //   podsError,
  //   podsResults
  // ] = usePods(service?.component);

  // const loadData = () => {
  //   console.log("I MADE IT !!!!!!!!!!!");
  // }

  return (
    <Service>
      <Collapsible trigger={
        <ServiceHeader>
          {service.component}
          <Status label={service.status} />
        </ServiceHeader>
      } transitionTime="200">

        <ServiceBody>
          <PodLabel>Pods</PodLabel>

          {service?.pods.map((pod, i) => {
            return (
              <Collapsible key={i} trigger={
                <PodHeader>
                  <div>
                    {pod.hostname}
                  </div>
                  <div>
                    <Status label={pod.state} />
                  </div>
                </PodHeader>
              } transitionTime="200">
                <PodBody>
                  Version: {pod.version}
                  <ul>
                    <li>Started at: {pod.startedAt}</li>
                    <li>Stopped at: {pod.stoppedAt || '--'}</li>
                    <li>ID: {pod.id}</li>
                  </ul>
                </PodBody>
              </Collapsible>
            )
          })}
        </ServiceBody>
      </Collapsible>
    </Service>
  );
};
