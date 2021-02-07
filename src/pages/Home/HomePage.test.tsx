import { render, screen } from "@testing-library/react";
import { HomePage } from "./HomePage";

describe("HomePage", () => {
  test("renders HomePage title", () => {
    render(<HomePage />);
    const component = screen.getByText(/TV Bland/i);
    expect(component).toBeInTheDocument();
  });

  test("renders HomePage description", () => {
    render(<HomePage />);
    const component = screen.getByText(/web series database/i);
    expect(component).toBeInTheDocument();
  });

  test("renders HomePage subtitle", () => {
    render(<HomePage />);
    const component = screen.getByText(/Latest Added Shows/i);
    expect(component).toBeInTheDocument();
  });
});
