import { ShowRating } from "./ShowRating";
import { render, screen } from "@testing-library/react";

describe("ShowRating", () => {
  test("should render component", () => {
    render(<ShowRating />);
    const showRating = screen.getByTestId("show-rating");
    expect(showRating).toBeInTheDocument();
  });
});
