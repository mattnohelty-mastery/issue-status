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
    width: 6px;
    background-color: #eee;
    top: 0;
    bottom: 0;
    left: 0;
    margin-left: -3px;
  }
`;

const Container = styled.div`
  font-size: 13px;
  left: 0;
  padding: 0px 15px;
  position: relative;
  background-color: inherit;
  /*width: 50%;*/
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    /*right: -17px;*/
    background-color: white;
    border: 4px solid #b25d42;
    top: 3px;
    border-radius: 50%;
    z-index: 1;
  }
  &::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    /*right: 30px;*/
    border: medium solid white;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent white;
  }
`;

const Content = styled.div`
  padding: 0px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
`;

const DateTime = styled.p`
  color: #777;
`;

const TimeLineEvent = ({ item }) => {
  return (
    <Container>
      <Content>
        <p>{item.event}</p>
        <DateTime>{new Date(item.created_at).toUTCString()}</DateTime>
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
