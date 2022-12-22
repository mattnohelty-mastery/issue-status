import { useEffect, useState } from "react";
import Toggle from "./Toggle";

import axios from "axios";
import styled from "styled-components";

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  &::after {
    content: "";
    position: absolute;
    width: 5px;
    background-color: #f7f8f9;
    top: 4px;
    bottom: 0;
    left: 10px;
  }
`;

const Container = styled.div`
  font-size: 13px;
  left: -11px;
  padding: 0px 15px;
  position: relative;
  background-color: inherit;
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: white;
    border: 4px solid #b25d42;
    top: 1px;
    border-radius: 50%;
    z-index: 1;
  }
`;

const Content = styled.div`
  padding: 5px 30px;
  background-color: #f7f8f9;
  position: relative;
  border-radius: 10px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;

const DateTime = styled.p`
  color: #777;
  margin: 0;
  padding-bottom: 5px;
`;

const Title = styled.p`
  padding-top: 2px;
  margin: 0;
  text-transform: capitalize;
`;

const formatTitle = (item) => {
  switch (item.event) {
    case "labeled":
      return `labled: ${item.label?.name}`;
    case "commented":
      return `commented: "${item.body}"`;
    default:
      return item.event;
  }
};

const TimeLineEvent = ({ item }) => {
  return (
    <Container>
      <Content>
        <Title>{formatTitle(item)}</Title>
        <DateTime>{new Date(item.created_at).toLocaleString()}</DateTime>
      </Content>
    </Container>
  );
};

const TimelineList = ({ timelineItems, active }) => {
  return (
    <Toggle open={active}>
      <Timeline>
        {timelineItems?.length > 0 ? (
          timelineItems.map((item, index) => (
            <TimeLineEvent item={item} key={index}></TimeLineEvent>
          ))
        ) : (
          <></>
        )}
      </Timeline>
    </Toggle>
  );
};

export default ({ incident }) => {
  //   console.log(incident);

  const [data, setData] = useState();

  useEffect(() => {
    const getData = async (url) => {
      try {
        const response = await axios.get(url);
        // console.log(response.data);
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    if (incident?.timeline_url) {
      getData(incident.timeline_url);
    }
  }, [incident]);

  return <TimelineList timelineItems={data} active={!incident.closed_at} />;
  //   return <>{JSON.stringify(data)}</>;
};
