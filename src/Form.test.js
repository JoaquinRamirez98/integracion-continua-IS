import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  it("renders without crashing", () => {
    render(<Form />);
  });
  expect(Form).toBeDefined();
});
