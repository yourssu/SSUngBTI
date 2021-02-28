import React, { FC } from "react";
import { Route, RouteComponentProps, RouteProps } from "react-router-dom";

type RouteRequireProps = RouteProps & {
  condition: (props: RouteComponentProps) => boolean;
  failed: JSX.Element;
};
export const ConditionRoute: FC<RouteRequireProps> = ({
  condition,
  failed,
  children,
  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      render={props => {
        if (condition(props)) return <>{children}</>;
        else return <>{failed}</>;
      }}
    />
  );
};
