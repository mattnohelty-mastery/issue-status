import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const DotElement = styled.span`
  position: relative;
  display: inline-block;
  margin-top: 10px;
  width: 50px;
  margin: 10px 1px;
  height: 5px;
  background: #b25d42;
  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    right: -12px;
    top: -12px;
    height: 20px;
    width: 20px;
    background: white;
    border: 5px solid #b25d42;
    border-radius: 50%;
  }
`;

const Title = styled.h2`
  font-size: 18px;
`;

const Container = styled.div`
  display: flex;
`;

const DotContainer = styled.div``;

const Dot = ({ item, index }) => {
  return (
    <DotContainer
      id={`tooltip-timeline-data-html-${index}`}
      data-tooltip-html={formatTimelineItem(item)}
    >
      <DotElement></DotElement>
      <Tooltip anchorId={`tooltip-timeline-data-html-${index}`} />
    </DotContainer>
  );
};

const formatTimelineItem = (item) => {
  return `<div>${item.created_at}</div><div>${item.event}</div>`;
};

const TimelineList = ({ timelineItems }) => {
  return (
    <>
      <Title>timeline</Title>
      <Container>
        <span>created </span>
        {timelineItems?.length > 0 ? (
          timelineItems.map((item, index) => (
            <Dot item={item} index={index} key={index}></Dot>
          ))
        ) : (
          <></>
        )}
      </Container>
    </>
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

  return <TimelineList timelineItems={data} />;
  //   return <>{JSON.stringify(data)}</>;
};
