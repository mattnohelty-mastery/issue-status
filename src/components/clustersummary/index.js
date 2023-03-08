import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import useDidMount from "../useDidMount";

{
  /* <h2>Summary</h2>
          Operational:{" "}
          {
            hardCodedServices.filter((service) => {
              return service.status === "Operational";
            })?.length
          }
          <br />
          Degraded:{" "}
          {
            hardCodedServices.filter((service) => {
              return service.status === "Degraded";
            })?.length
          }
          <br />
          Offline:{" "}
          {
            hardCodedServices.filter((service) => {
              return service.status === "Offline";
            })?.length
          }
          <br />
          Total: {hardCodedServices?.length}
          {/* <Components
            loading={componentsLoading}
            components={componentsResults}
          /> 
          <br /> */
}

const SummaryContainer = styled.div`
  display: flex;
  //   flex: 1 1 0px;
  flex-direction: row;
  justify-content: space-between;
  margin: 32px auto 0 auto;
  //   align-content: flex-start;
`;

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChartContainer = styled.div`
  position: relative;
  height: auto;
  //   width: 80vw;
`;

export default (props) => {
  const serviceResults = props.services;
  const [hasMounted] = useDidMount();

  const operationalServices = serviceResults.filter((service) => {
    return service.status === "Operational";
  });

  const degradedServices = serviceResults.filter((service) => {
    return service.status === "Degraded";
  });

  const offlineServices = serviceResults.filter((service) => {
    return service.status === "Offline";
  });

  return (
    <>
      <h2>Summary</h2>
      <SummaryContainer>
        <OverviewContainer>
          <p>Operational: {operationalServices?.length ?? 0}</p>
          <p>Degraded: {degradedServices?.length ?? 0}</p>
          <p>Offline: {offlineServices?.length ?? 0}</p>
          <p>Total: {serviceResults?.length ?? 0}</p>
        </OverviewContainer>
        <ChartContainer>
          <Doughnut
            options={{
              responsive: true,
            }}
            data={{
              labels: ["Operational", "Degraded", "Offline"],
              datasets: [
                {
                  label: "Cluster Pod Overview",
                  data: [
                    operationalServices?.length ?? 0,
                    degradedServices?.length ?? 0,
                    offlineServices?.length ?? 0,
                  ],
                  backgroundColor: ["#247234", "#74582a", "#8e3b31"],
                  hoverOffset: 4,
                },
              ],
            }}
          />
        </ChartContainer>
      </SummaryContainer>
    </>
  );
};

// ervicesResults.filter((service) => {
// return service.status === "Operational";
// })?.length

// const Container = styled.div`
//   margin: 32px auto 0 auto;
//   max-width: 1040px;
//   display: flex;
//   flex-direction: column;
//   box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);
//   border-radius: 3px;
//   background-color: white;
//   padding: 16px;
// `;
