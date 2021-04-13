import React from "react";
import { MemoryRouter } from "react-router";
import { render, waitFor } from "./utils/test-utils";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import firebase from "firebase/app";

import App from "App";
import UserAnswerState from "store/UserAnswerState";
import { sbtiResults } from "constants/sbti";
import { Route } from "react-router-dom";
import { Location } from "history";

jest.mock("firebase/app", () => ({
  analytics: jest.fn(() => ({
    logEvent: jest.fn(),
  })),
}));

test("route home page", async () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  const btnElement = getByText("시작하기");
  await waitFor(() => expect(btnElement).toBeInTheDocument());
});

test("route calculate page", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/calculate"]}>
      <App />
    </MemoryRouter>,
    {
      initializeState: ({ set }) => {
        set(UserAnswerState, Array(12).fill(0));
      },
    }
  );
  const labelElement = getByText("계산중...");
  expect(labelElement).toBeInTheDocument();
});

test("route about page", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/about"]}>
      <App />
    </MemoryRouter>
  );
  const labelElement = getByText("만든 사람들");
  expect(labelElement).toBeInTheDocument();
});

describe("route all result pages", () => {
  beforeAll(() => {
    window.Kakao = {
      isInitialized: jest.fn(),
      init: jest.fn(),
      cleanup: jest.fn(),
      Link: { sendCustom: jest.fn() },
    };
  });
  afterAll(() => {
    delete window.Kakao;
  });

  for (const result of sbtiResults) {
    test(`route by result type: ${result.type}`, () => {
      const { getByText } = render(
        <MemoryRouter initialEntries={[`/result/${result.type}`]}>
          <App />
        </MemoryRouter>
      );
      const titleElement = getByText(result.title);
      expect(titleElement).toBeInTheDocument();
    });

    test(`redirect by result id: ${result.id}`, () => {
      let testLocation: Location;
      const { getByText } = render(
        <MemoryRouter initialEntries={[`/result/${result.id}`]}>
          <App />
          <Route
            path="*"
            render={({ location }) => {
              testLocation = location;
              return null;
            }}
          />
        </MemoryRouter>
      );
      expect(testLocation.pathname).toBe(`/result/${result.type}`);
      const titleElement = getByText(result.title);
      expect(titleElement).toBeInTheDocument();
    });
  }
});
