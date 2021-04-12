import React, { FC, ReactElement } from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { RecoilRoot } from "recoil";

const AllTheProviders: FC = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
