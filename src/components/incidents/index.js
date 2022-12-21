import React from "react";
import styled from "styled-components";
import Incident from "./incident";
import Skeleton from "./skeleton";
import useDidMount from "../useDidMount";

const Container = styled.div`
  margin: 32px auto 0 auto;
  max-width: 1040px;
`;

const Title = styled.div`
  padding: 0 16px;
  font-size: 20px;
  margin-bottom: 16px;
`;

const NoFound = styled.div`
  margin: 0 8px;
`;

export default ({ loading, incidents }) => {
  const [hasMounted] = useDidMount();

  const sixHoursAgo = new Date().getTime() - 6 * 60 * 60 * 1000;
  const activeIncidents = incidents.filter(
    (i) =>
      i.state.toLowerCase() === "open" ||
      new Date(i.updated_at).getTime() > sixHoursAgo
  );

  return (
    <Container>
      <Title>Incidents</Title>
      {!loading || hasMounted ? (
        activeIncidents?.length > 0 ? (
          activeIncidents?.map((incident) => (
            <Incident key={incident.id} incident={incident} />
          ))
        ) : (
          <NoFound>No Incidents found.</NoFound>
        )
      ) : (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
    </Container>
  );
};
