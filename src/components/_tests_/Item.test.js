import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import Item from "../Item";

describe('Item component', () => {
  
  it('renders item info passed as prop', () => {
    const addToCartMock = jest.fn();
    const details = {id: 1, 
                    title: "Foo",
                    price: 1,
                    image: "",
                    description: ""
                  };
    render(<Item details={details} addToCart={addToCartMock} />)
    const title = screen.getByText('Foo');
    expect(title.textContent).toBe('Foo');
  });

  it('calls setQuantity correctly when number input changed', () => {
    const addToCartMock = jest.fn();
    const details = {id: 1, 
                    title: "Foo",
                    price: 1,
                    image: "",
                    description: ""
                  };
    render(<Item details={details} addToCart={addToCartMock} />);
    const input = screen.getByRole('spinbutton');

    userEvent.type(input, '2');

    expect(input).toHaveValue(12);
  });

  it('calls addToCart correctly when button clicked', () => {
    const addToCartMock = jest.fn();
    const details = {id: 1, 
                    title: "Foo",
                    price: 1,
                    image: "",
                    description: ""
                  };
    render(<Item details={details} addToCart={addToCartMock} />);
    const button = screen.getByRole('button');

    userEvent.click(button)

    expect(addToCartMock).toHaveBeenCalledWith(details, 1)
  });
});