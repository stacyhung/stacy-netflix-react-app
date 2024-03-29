import React from "react";
import { LockBody, ReleaseBody, Spinner, Picture } from "./styles/loading";

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody({ children, ...restProps }) {
  return <ReleaseBody {...restProps}>{children}</ReleaseBody>;
};
