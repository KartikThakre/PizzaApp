//Rendering the form input properly

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Signup } from "./Signup";

test("renders form properly", () => {
  const { getByText, getByLabelText } = render(<Signup />);
  const nameLabel = getByText(/Name:/i);
  const ageLabel = getByText(/Age:/i);
  expect(nameLabel).toBeInTheDocument();
  expect(ageLabel).toBeInTheDocument();
  // checking the datatype of form for validation
  const input = getByLabelText(/Age:/i);
  const input1 = getByLabelText(/Name:/i);
  expect(input).toHaveAttribute("type", "number");
  expect(input1).toHaveAttribute("type", "text");
});

test("btn should be disabled for empty name", () => {
  const { getByLabelText, getByRole } = render(<Signup />);
  const nameInput = getByLabelText(/Name:/i);
  fireEvent.change(nameInput, { target: { value: "" } });
  const btn = getByRole("button", { name: "Submit" });
  expect(btn).toHaveAttribute("disabled");
});


test("btn should be enabled for non-empty name", () => {
  const { getByLabelText, getByRole, debug } = render(<Signup />);
  const nameInput = getByLabelText(/Name:/i);
  fireEvent.change(nameInput, { target: { value: "" } });
  const btn = getByRole("button", { name: "Submit" });
  expect(btn).toHaveAttribute("disabled");
  debug(btn);
  fireEvent.change(nameInput, { target: { value: "KartikThakre" } });
  debug(btn);
  expect(btn).not.toHaveAttribute("disabled");
});



test("render the checkbox", () => {
  const { getByLabelText } = render(<Signup />);
  const input = getByLabelText(
    /This should only be visible when checkbox is checked/i
  );
  expect(input).toHaveAttribute("type", "checkbox");
});


const CHECKBOX_ID = "my-checkbox";
const DIV_ID = "my-div";
test("changes style of div as checkbox is checked/unchecked", () => {
  const { getByTestId } = render(<Signup />);
  const checkbox = getByTestId(CHECKBOX_ID);
  const div = getByTestId(DIV_ID);
  expect(checkbox.checked).toEqual(false);
  expect(div.style["display"]).toEqual("none");
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
  expect(div.style["display"]).toEqual("block");
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(false);
  expect(div.style["display"]).toEqual("none");
});


test("render radiobutton without crashing", () => {
  const { getByLabelText, debug } = render(<Signup />);

  debug(getByLabelText("Female"));
  fireEvent.change(getByLabelText("Female"), { target: { value: "Random" } });
  fireEvent.click(getByLabelText("Female"));
  expect(getByLabelText("Female")).toHaveAttribute("checked");

});


