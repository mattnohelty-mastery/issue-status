import React from "react";
import Skeleton from "./skeleton";
import Service from "./service";
import useDidMount from "../useDidMount";

const sortComponents = (a, b) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}

export default ({ loading, services }) => {
  const [hasMounted] = useDidMount();

  return !loading || hasMounted ? (
    services?.length > 0 ? (
      services?.sort(sortComponents).map((service) => (
        <Service key={service.component} service={service} />
      ))
    ) : (
      <p>No Services found.</p>
    )
  ) : (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  );
};
