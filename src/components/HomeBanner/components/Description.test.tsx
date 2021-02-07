import { render, screen } from "@testing-library/react";
import { Description } from "./Description";

describe("HomeBanner", () => {
  describe("Description", () => {
    test("renders description text", () => {
      const description = "I am a description";
      render(<Description description={description} />);
      const component = screen.getByText(description);
      expect(component).toBeInTheDocument();
    });
  });
});
