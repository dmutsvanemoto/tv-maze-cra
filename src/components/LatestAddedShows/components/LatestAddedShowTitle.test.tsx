import { render, screen } from "@testing-library/react";
import { LatestAddedShowTitle } from "./LatestAddedShowTitle";

describe("LatestShow", () => {
  describe("LatestShowsTitle", () => {
    test("renders LatestShowsTitle", () => {
      render(<LatestAddedShowTitle />);
      const component = screen.getByTestId("latestshowstitle");
      expect(component).toBeInTheDocument();
    });

    test("renders pending text", () => {
      render(<LatestAddedShowTitle />);
      const component = screen.getByText(/Latest Added Shows/i);
      expect(component).toBeInTheDocument();
    });
  });
});
