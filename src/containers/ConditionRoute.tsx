import React, { FC } from "react";
import { Route, RouteComponentProps, RouteProps } from "react-router-dom";

type ConditionRouteProps = RouteProps & {
  condition: (props: RouteComponentProps) => boolean;
  failed: JSX.Element;
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
      if (condition(props)) return <>{children}</>;
      else return <>{failed}</>;
    }}
  />
);
