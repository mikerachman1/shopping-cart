import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import Cart from "../Cart";

describe('Cart component', () => {
  
  it('renders items in cart', () => {
    const cartItems = [{ id: 1, item: { title: 'Foo', price: 5 } }]
    const quantityItems = [{ id: 1, number: 1 }];
    const subtotalItems = [{ id: 1, number: 5 }];
    const totalItems = 1;
    const totalPrice = 5;
    const deleteFromCartMock = jest.fn();
    const incrementItemMock = jest.fn();
    const decrementItemMock = jest.fn();

    render(<Cart cartItems={cartItems}
                  quantityItems={quantityItems}
                  subtotalItems={subtotalItems}
                  totalItems={totalItems}
                  totalPrice={totalPrice}
                  deleteFromCart={deleteFromCartMock}
                  incrementItem={incrementItemMock}
                  decrementItem={decrementItemMock}
                  />)

    const title = screen.getByText('Foo');
    expect(title.textContent).toBe('Foo');
  });

  it('incrementing item calls incrementItemMock', () => {
    const cartItems = [{ id: 1, item: { title: 'Foo', price: 5 } }]
    const quantityItems = [{ id: 1, number: 1 }];
    const subtotalItems = [{ id: 1, number: 5 }];
    const totalItems = 1;
    const totalPrice = 5;
    const deleteFromCartMock = jest.fn();
    const incrementItemMock = jest.fn();
    const decrementItemMock = jest.fn();

    render(<Cart cartItems={cartItems}
                  quantityItems={quantityItems}
                  subtotalItems={subtotalItems}
                  totalItems={totalItems}
                  totalPrice={totalPrice}
                  deleteFromCart={deleteFromCartMock}
                  incrementItem={incrementItemMock}
                  decrementItem={decrementItemMock}
                  />)
    
    const incButton = screen.getByRole('button', {name: /More/i});

    userEvent.click(incButton);
    
    expect(incrementItemMock).toBeCalled();
  });

  it('decrementing item updates all prices/quantity info', () => {
    const cartItems = [{ id: 1, item: { title: 'Foo', price: 5 } }]
    const quantityItems = [{ id: 1, number: 1 }];
    const subtotalItems = [{ id: 1, number: 5 }];
    const totalItems = 1;
    const totalPrice = 5;
    const deleteFromCartMock = jest.fn();
    const incrementItemMock = jest.fn();
    const decrementItemMock = jest.fn();

    render(<Cart cartItems={cartItems}
                  quantityItems={quantityItems}
                  subtotalItems={subtotalItems}
                  totalItems={totalItems}
                  totalPrice={totalPrice}
                  deleteFromCart={deleteFromCartMock}
                  incrementItem={incrementItemMock}
                  decrementItem={decrementItemMock}
                  />)
    
    const decButton = screen.getByRole('button', {name: /Less/i});

    userEvent.click(decButton);
    
    expect(decrementItemMock).toBeCalled();
  });

  it('deleting item from cart updates cart info', () => {
    const cartItems = [{ id: 1, item: { title: 'Foo', price: 5 } }]
    const quantityItems = [{ id: 1, number: 1 }];
    const subtotalItems = [{ id: 1, number: 5 }];
    const totalItems = 1;
    const totalPrice = 5;
    const deleteFromCartMock = jest.fn();
    const incrementItemMock = jest.fn();
    const decrementItemMock = jest.fn();

    render(<Cart cartItems={cartItems}
                  quantityItems={quantityItems}
                  subtotalItems={subtotalItems}
                  totalItems={totalItems}
                  totalPrice={totalPrice}
                  deleteFromCart={deleteFromCartMock}
                  incrementItem={incrementItemMock}
                  decrementItem={decrementItemMock}
                  />)
    
    const delButton = screen.getByRole('button', {name: /Delete/i});

    userEvent.click(delButton);
    
    expect(deleteFromCartMock).toBeCalled();
  });
});