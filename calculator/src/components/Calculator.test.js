import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

test("it should show result text", () => {
  render(<App></App>);

  expect(screen.getByText("Result")).toBeInTheDocument();
});

test("it should be show 6", () => {
  const additionButton = screen.getByText("+");

  const add5Button = screen.getByText("5");
  const add1Button = screen.getByText("1");

  const result = screen.getByTestId("result");

  userEvent.click(add1Button);
  userEvent.click(additionButton);
  userEvent.click(add5Button);

  expect(result.textContent).toEqual("6");
});
