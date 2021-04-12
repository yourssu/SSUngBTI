import React from "react";
import { MemoryRouter } from "react-router";
import { render, waitFor } from "./utils/test-utils";

import App from "App";

test("render Home page", async () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  const linkElement = getByText("시작하기");
  await waitFor(() => expect(linkElement).toBeInTheDocument());
});
