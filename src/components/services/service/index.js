import Collapsible from "react-collapsible";
import React from "react";
import Status from "./status";
import styled from "styled-components";

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
  cursor: pointer;
`;

const ServiceBody = styled.div`
  background-color: #f7f8f9;
  /* padding: 8px 16px; */
  flex-direction: column;
`;

const PodHeader = styled.div`
  background-color: #eff0f0;
  /* padding: 2px 16px; */
  padding: 8px 0px 8px 16px;
  margin: 4px 0px;
  border-radius: 3px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  cursor: pointer;
`;

const PodLabel = styled.div`
  padding: 12px 0px 2px 0px;
  font-size: 14px;
`;

const PodBody = styled.div`
  background-color: #f7f8f9;
  /* padding: 8px 16px; */
  border-radius: 3px;
  align-items: center;
`;

const MINION_API_COMPONENT_RESPONSE = {
  component: "minion-api",
  status: "Operational",
  pods: [
    {
      id: "9e4cbd9b-0a50-4953-96fc-98c45258cf9c",
      name: "minion-api",
      hostname: "minion-api-57d656db55-xnldk",
      version: "latest-181d0c8253d4414eacae362c1ef5d10f7babea2a",
      state: "running",
      startedAt: "2023-03-02T12:02:19Z",
      stoppedAt: null,
    },
    {
      id: "e59f4951-04db-4f44-a360-2995935b7000",
      name: "minion-api",
      hostname: "minion-api-78bc9999f8-qp79x",
      version: "v1.0.34",
      state: "running",
      startedAt: "2023-03-06T15:30:51Z",
      stoppedAt: null,
    },
    {
      id: "1a3cfe4f-d9a5-4d83-8aff-a361173fe82d",
      name: "minion-api",
      hostname: "minion-api-78bc9999f8-s8wq9",
      version: "v1.0.34",
      state: "running",
      startedAt: "2023-03-06T15:31:33Z",
      stoppedAt: null,
    },
    {
      id: "42985518-dea2-4370-8ea0-7951206ef598",
      name: "minion-api",
      hostname: "minion-api-78bc9999f8-snvcm",
      version: "v1.0.34",
      state: "terminated",
      startedAt: "2023-03-06T15:32:13Z",
      stoppedAt: null,
    },
  ],
};

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
      <Collapsible
        trigger={
          <ServiceHeader>
            {service.component}
            <Status label={service.status} />
          </ServiceHeader>
        }
        transitionTime="200"
      >
        <ServiceBody>
          <PodLabel>Pods</PodLabel>

          {service?.pods.map((pod, i) => {
            return (
              <Collapsible
                trigger={
                  <PodHeader>
                    <div>{pod.hostname}</div>
                    <div>
                      <Status label={pod.state} />
                    </div>
                  </PodHeader>
                }
                transitionTime="200"
              >
                <PodBody>
                  <ul>
                    <li>Started at: {pod.startedAt}</li>
                    <li>Stopped at: {pod.stoppedAt || "--"}</li>
                    <li>ID: {pod.id}</li>
                  </ul>
                </PodBody>
              </Collapsible>
            );
          })}
        </ServiceBody>
      </Collapsible>
    </Service>
  );
};
