import "./App.css";

import React, { useState } from "react";

import Chart from "./chart";
import ClusterSummary from "./clustersummary";
import Components from "./components";
import Footer from "./footer";
import Header from "./header";
import Incidents from "./incidents";
import Services from "./services";
import Status from "./status";
import Subscribe from "./subscribe";
import styled from "styled-components";
import useIssues from "./useIssues";
import useServices from "./useServices";

const Container = styled.div`
  max-width: 1008px;
  padding: 16px;
  margin: 16px auto;
`;

const ComponentsContainer = styled.div`
  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);
  border-radius: 3px;
  background-color: white;
  padding: 16px;
`;

const HistoryList = styled.div`
  cursor: pointer;
  margin: 30px;
`;

const processIncidents = (list) => {
  const sixHoursAgo = new Date().getTime() - 6 * 60 * 60 * 1000;

  const activeIncidents = [];
  const inactiveIncidents = [];
  list.forEach((item) => {
    if (
      item.state.toLowerCase() === "open" ||
      new Date(item.updated_at).getTime() < sixHoursAgo
    ) {
      activeIncidents.push(item);
    } else {
      inactiveIncidents.push(item);
    }
  });
  return [activeIncidents, inactiveIncidents];
};

export default () => {
  // loading, errors, results, refetch
  const [
    componentsLoading,
    componentsError,
    componentsResults,
    componentsRefetch,
  ] = useIssues("component");

  const [incidentsLoading, incidentsError, incidentsResults, incidentsRefetch] =
    useIssues("incident");

  const [servicesLoading, servicesError, servicesResults] = useServices();

  const [activeIncidents, inactiveIncidents] =
    processIncidents(incidentsResults);

  const [showHistory, setShowHistory] = useState(false);

  return (
    <>
      <Header />
      <Container>
        <ComponentsContainer>
          {/* <Status
            loading={componentsLoading || incidentsLoading}
            error={{
              hasError: componentsError || incidentsError,
              errors: { componentsError, incidentsError },
            }}
            components={componentsResults}
            refetch={() => {
              componentsRefetch();
              incidentsRefetch();
            }}
          /> */}
          <ClusterSummary services={servicesResults} />
          <h2>Components</h2>
          <Services loading={servicesLoading} services={servicesResults} />
          <h2>Domains</h2>
          <Components
            loading={componentsLoading}
            components={componentsResults}
          />
        </ComponentsContainer>
        <Chart loading={incidentsLoading} incidents={incidentsResults} />
        <Incidents
          loading={incidentsLoading}
          incidents={activeIncidents}
          active={true}
        />
        <HistoryList onClick={() => setShowHistory(!showHistory)}>
          {showHistory ? (
            <>&larr; Hide Incident History</>
          ) : (
            <>Show Incident History &rarr;</>
          )}
        </HistoryList>
        {showHistory && (
          <Incidents
            loading={incidentsLoading}
            incidents={inactiveIncidents}
            active={false}
          />
        )}
        <Footer />
        <Subscribe />
      </Container>
    </>
  );
};
