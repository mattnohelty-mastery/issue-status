import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Skeleton from "../components/skeleton";
import useDidMount from "../useDidMount";
import SegmentChart from "./SegmentChart";

const Container = styled.div`
  margin: 32px auto 0 auto;
  max-width: 1040px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 16px;
  display: flex;
  align-self: center;
  color: rgba(0, 0, 0, 0.75);
`;

const ChartFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const normalizeDate = (date) => {
  return new Date(date).setHours(0, 0, 0, 0);
};

const MAX_SEGMENT_DAYS = 60;
const TODAY = normalizeDate(new Date());
const TODAY_DATE = new Date(TODAY).getDate();

export default ({ loading, incidents }) => {
  const [hasMounted] = useDidMount();

  const process = (incidents) => {
    const segments = [];
    let incidentDays = 0;

    for (let day = 0; day < MAX_SEGMENT_DAYS; day++) {
      const newDay = normalizeDate(new Date().setDate(TODAY_DATE - day));
      const incidentsToday = incidents.filter(
        (incident) => normalizeDate(incident.created_at) === newDay
      );
      if (incidentsToday.length) incidentDays++;
      segments.push({
        date: newDay,
        incidents: incidentsToday,
      });
    }
    const uptime = Math.round(
      ((MAX_SEGMENT_DAYS - incidentDays) / MAX_SEGMENT_DAYS) * 100
    );
    return [uptime, segments.reverse()];
  };

  const [uptime, segments] = process(incidents);
  return (
    <Container>
      <Title>{uptime}% Uptime</Title>
      {!loading || hasMounted ? (
        <SegmentChart segments={segments} />
      ) : (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
      <ChartFooter>
        <div>{MAX_SEGMENT_DAYS} days ago</div>
        <div>today</div>
      </ChartFooter>
    </Container>
  );
};
