//how to write a logic for getting defined value in react?
//how to write test cases for component in react?

// {props.stories.map((story) => {
//   const storyObj = (story.type === 'story' && story.story) ? story.story : story;
//   return (
//     <div key={story.id}>
//       <SliderItem story={storyObj} />
//     </div>
//   );
// })}

import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Cart from "../pages/Cart";
import Product from "./Product";
import Products from "./Products";
import Home from "../pages/Home";
//import Counter from "./Counter";
// describe(Product, () => {
//   it("counter displays correct initial count", () => {
//     const { getByTestId } = render(<Product Product />);
//     const countValue = Number(getByTestId("product").textContent);
//     expect(countValue).toEqual(0);
//   });
//   it("product should increment by 1 if the add or '+' button is clicked", () => {
//     const { getByTestId, getByRole } = render(<Cart existingQty />);
//     const incrementBttn = getByRole("button", { name: "Increment" });
//     const countValue1 = Number(getByTestId("cart").textContent);
//     expect(countValue1).toEqual(0);
//     fireEvent.click(incrementBttn);
//      const countValue2 = Number(getByTestId("cart").textContent);
//      expect(countValue2).toEqual(1);
//   });

// });

//  test("increment button is clicked and the value increments by 1", () => {
//    render(<Cart />);
//    const displayValue = screen.getByTitle("Display");
//    userEvent.click(screen.getByRole("button", { name: "+" }));
//    expect(displayValue.textContent).toBe("1");
//  });

test("product data should be rendered", () => {
  render(<Products />);
  //const usernameInputEl = screen.getByTestId('product');
  const element = screen.getByTestId("product");
  expect(element);
});

// test("increment button is clicked and the value increments by 1", () => {
//    render(<Product />);
//    const displayValue = screen.getAllByTestId("Display");
//    userEvent.click(screen.getByRole("button", { name: "+" }));
//    expect(displayValue.textContent).toBe("1");
// });
 


// test("increment button is clicked and the value increments by 1", async () => {
//   render(<Product />);
//   const button = screen.getByRole("button", { name: "ADD" });
//   fireEvent.click(button);
//   await screen.findByText("Clicked once");
//   fireEvent.click(button);
//   await screen.findByText("Clicked twice");
// });

test("button should be rendered", () => {
  render(<Home />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl);
});
