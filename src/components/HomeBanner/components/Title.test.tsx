import React from "react";
import { render, screen } from "@testing-library/react";
import { Title } from "./Title";

const title = "Lovely Title";

describe("HomeBanner", () => {
  describe("Title", () => {
    test("renders title text", () => {
      render(<Title title={title} />);
      const component = screen.getByText(title);
      expect(component).toBeInTheDocument();
    });
  });
});
