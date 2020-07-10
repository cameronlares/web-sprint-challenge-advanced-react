import React from "react";
import { render,screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {


    //render app component
    render (<CheckoutForm />)

    const header = screen.getByText(/Checkout Form/i)
    expect(header).toBeInTheDocument()

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

        


    });
    

