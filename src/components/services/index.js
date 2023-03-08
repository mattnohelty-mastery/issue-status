import React from "react";
import Service from "./service";
import Skeleton from "./skeleton";
import useDidMount from "../useDidMount";

const sortComponents = (a, b) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
};

export default ({ loading, services }) => {
  const [hasMounted] = useDidMount();

  return !loading || hasMounted ? (
    services?.length > 0 ? (
      services
        ?.sort(sortComponents)
        .map((service) => <Service key={service.component} service={service} />)
    ) : (
      <p>Loading.. or no services found. Hard to tell.</p>
    )
  ) : (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  );
};
