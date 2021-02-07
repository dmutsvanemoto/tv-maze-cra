import { render, screen } from "@testing-library/react";
import { LatestAddedShowPending } from "./LatestAddedShowPending";

describe("LatestShow", () => {
  describe("LatestAddedShowPending", () => {
    test("renders LatestAddedShowPending", () => {
      render(<LatestAddedShowPending />);
      const component = screen.getByTestId("latestshowspending");
      expect(component).toBeInTheDocument();
    });

    test("renders pending text", () => {
      render(<LatestAddedShowPending />);
      const component = screen.getByText(/Coming Soon/i);
      expect(component).toBeInTheDocument();
    });
  });
});
