import { act, render, screen, waitFor } from "@testing-library/react";
import { HomePage } from "./HomePage";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

var mockAxios = new MockAdapter(axios);

describe("HomePage", () => {
  beforeEach(() => {
    mockAxios
      .onGet("http://api.tvmaze.com/schedule")
      .reply(200, [{ id: 1, name: "a tv show name" }]);
  });
  afterEach(() => {
    mockAxios.reset();
  });

  test("renders HomePage title", async () => {
    render(<HomePage />);
    const component = await waitFor(() => screen.getByText(/TV Bland/i));
    expect(component).toBeInTheDocument();
  });

  test("renders HomePage description", async () => {
    render(<HomePage />);
    const component = await waitFor(() =>
      screen.getByText(/web series database/i)
    );
    expect(component).toBeInTheDocument();
  });

  test("renders HomePage subtitle", async () => {
    render(<HomePage />);
    const component = await waitFor(() =>
      screen.getByText(/Latest Added Shows/i)
    );
    expect(component).toBeInTheDocument();
  });

  test("loads with shows", async () => {
    render(<HomePage />);
    const component = await waitFor(() =>
      screen.getByTestId("shows-container")
    );
    expect(component).toBeInTheDocument();
  });

  test("loads with no shows", async () => {
    mockAxios.onGet("http://api.tvmaze.com/schedule").reply(200, []);
    render(<HomePage />);
    const component = await waitFor(() =>
      screen.getByTestId("shows-container")
    );
    expect(component.hasChildNodes()).toBe(false);
  });
});
