import React from "react";
import Skeleton from "./skeleton";
import Component from "./component";
import useDidMount from "../useDidMount";

const sortComponents = ( a, b ) => {
  if ( a.title < b.title ){
    return -1;
  }
  if ( a.title > b.title ){
    return 1;
  }
  return 0;
}

export default ({ loading, components }) => {
  const [hasMounted] = useDidMount();

  return !loading || hasMounted ? (
    components?.length > 0 ? (
      components?.sort(sortComponents).map((component) => (
        <Component key={component.id} component={component} />
      ))
    ) : (
      <p>No Components found.</p>
    )
  ) : (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  );
};
