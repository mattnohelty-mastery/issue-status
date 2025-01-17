import styled from "styled-components";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const SegmentContainer = styled.div`
  display: flex;
  position: relative;
`;

const IncidentSegment = styled.div`
  height: 30px;
  background-color: rgb(35, 38, 39);
  flex: 1;
  padding: 0;
  margin-right: 2px;
  background: #ececec;
  position: relative;
`;

const IncidentSegmentInner = styled.div`
  background: ;
  background-color: ${(props) =>
    props.hasIncident ? "red" : "rgb(20, 184, 118)"};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;

const Segment = ({ segment, index }) => {
  const formatIncidents = (incidents) => {
    const init = `<div>${new Date(segment.date).toDateString()}</div><br />`;
    let incidentStr = "";
    if (!segment.incidents.length) {
      incidentStr = `<div>No Incident</div>`;
    } else {
      incidentStr = incidents
        .slice(0, 5)
        .map((incident) => {
          return `<div>${incident.title}</div>`;
        })
        .join("<br />");
    }
    return `${init}${incidentStr}`;
  };
  const tooltip = formatIncidents(segment.incidents);
  return (
    <>
      <IncidentSegment
        id={`tooltip-anchor-data-html-${index}`}
        data-tooltip-html={tooltip}
      >
        <IncidentSegmentInner hasIncident={segment.incidents.length} />
      </IncidentSegment>
      <Tooltip anchorId={`tooltip-anchor-data-html-${index}`} />
    </>
  );
};

export default function SegmentChart({ segments }) {
  return (
    <SegmentContainer>
      {segments.map((segment, index) => (
        <Segment segment={segment} index={index} key={index} />
      ))}
    </SegmentContainer>
  );
}
