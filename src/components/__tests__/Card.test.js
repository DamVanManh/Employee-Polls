import { render } from "@testing-library/react";
import * as React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import Card from "../Card";

describe("Card", () => {
  it("should matchs DOM snapshot", () => {
    const component = render(
      <Router>
        <Card />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });
});
