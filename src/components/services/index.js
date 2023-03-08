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
      services?.sort(sortComponents).map((service, i) => (
        <Service key={i} service={service} />
      ))
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
