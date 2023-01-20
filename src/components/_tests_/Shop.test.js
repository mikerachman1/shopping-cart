/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Shop from "../Shop";
import { MemoryRouter } from "react-router-dom";

describe('Shop component', () => {

  it('renders products', () => {
    const products = [{id: 1, 
      title: "Foo",
      price: 1,
      image: "",
      description: ""
    }];
    const addToCartMock = jest.fn();
    const totalItems = 0;
    const totalPrice = 0;

    render(<Shop products={products}
                  addToCart={addToCartMock}
                  totalItems={totalItems}
                  totalPrice={totalPrice} />, {wrapper: MemoryRouter});
    
    expect(document.querySelector('.item-price').innerHTML).toBe('$1.00');
  });

  it('renders sticky-cart with proper cart info', () => {
    const products = [{id: 1, 
      title: "Foo",
      price: 1,
      image: "",
      description: ""
    }];
    const addToCartMock = jest.fn();
    const totalItems = 1;
    const totalPrice = 10;

    render(<Shop products={products}
                  addToCart={addToCartMock}
                  totalItems={totalItems}
                  totalPrice={totalPrice} />, {wrapper: MemoryRouter});
    
    const stickyTotal = screen.getByText('Total:', {exact: false});
    expect(stickyTotal.textContent).toBe('Total: $10.00');
  });
});