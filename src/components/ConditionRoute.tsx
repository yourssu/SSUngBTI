import React, { FC } from "react";
import { Route, RouteComponentProps, RouteProps } from "react-router-dom";

type ConditionRouteProps = Omit<RouteProps, "render"> & {
  condition:
    | ((props: RouteComponentProps) => boolean)
    | ((props: RouteComponentProps) => React.ReactNode);
  failed: React.ReactNode;
};
export const ConditionRoute: FC<ConditionRouteProps> = ({
  condition,
  failed,
  children,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props => {
      const condResult = condition(props);
      if (typeof condResult === "boolean")
        return condResult ? children : failed;
      else return condResult;
    }}
  />
);
