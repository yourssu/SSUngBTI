import React, { FC, ReactElement } from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { MutableSnapshot, RecoilRoot } from "recoil";

type AdditionalOptions = {
  initializeState?: (mutableSnapshot: MutableSnapshot) => void;
};
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries"> & AdditionalOptions
): RenderResult => {
  const AllTheProviders: FC = ({ children }) => {
    return (
      <RecoilRoot initializeState={options?.initializeState}>
        {children}
      </RecoilRoot>
    );
  };
  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from "@testing-library/react";

export { customRender as render };
