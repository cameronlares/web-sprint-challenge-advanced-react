import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  //render app component
  render(<CheckoutForm />);

  const header = screen.getByText(/Checkout Form/i);
  expect(header).toBeInTheDocument();

  //Test will fail if an error is thrown from any function/component

  // breakTheTest(true)
});

// function breakTheTest(someValue) {

//     if(someValue===true) {
//         //do nothing
//     }else{
//         throw new Error ("This test failed because we threw an error inside breakTheTest")
//     }

// }
test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const firstName = screen.getByLabelText(/First Name:/i);
  const lastName = screen.getByLabelText(/Last Name:/i);
  const address = screen.getByLabelText(/Address:/i);
  const city = screen.getByLabelText(/city:/i);
  const state = screen.getByLabelText(/state:/i);
  const zip = screen.getByLabelText(/zip:/i);

  //events with React Testing Library
  fireEvent.change(firstName, { target: { value: "Dustin" } }); //Pass in event object
  fireEvent.change(lastName, { target: { value: "Myers" } }); //Pass in event object
  fireEvent.change(address, { target: { value: "505 Ezy St" } }); //Pass in event object
  fireEvent.change(city, { target: { value: "New York City" } }); //Pass in event object
  fireEvent.change(state, { target: { value: "New York" } }); //Pass in event object
  fireEvent.change(zip, { target: { value: "12345" } }); //Pass in event object

  const submmitButton = screen.getByTestId(/form/i);
  fireEvent.click(submmitButton);
});
