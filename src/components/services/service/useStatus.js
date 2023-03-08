import { useState, useEffect } from "react";
import statuses from "./statuses";

export default (label) => {
  const [status, setStatus] = useState();

  useEffect(() => {
    setStatus(
      Object.values(statuses).find((status) =>
        // labels.find((label) => label.name === status.name.toLowerCase())
        label.toLowerCase() === status.name.toLowerCase()
      )
    );
  }, [label]);

  if (!status) setStatus(statuses.unknown);

  return [status];
};
