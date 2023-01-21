import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import App from "../App";

describe('App component', () => {

  describe('addToCart', () => {
    it('adds new item to cart if not already in cart', () => {
      render(<App />);
      const shopBtn = screen.getByTestId('nav-shop-link');
      userEvent.click(shopBtn);
      const addToCartButtons = screen.getAllByText('Add To Cart');
      userEvent.click(addToCartButtons[0]);
      const cartLink = screen.getByTestId('nav-cart-link');
      userEvent.click(cartLink);
      const cartItemQuantity = screen.getByTestId("item-quantity");
      expect(cartItemQuantity.textContent).toBe("Quantity : 1");
    });
    
    it('updates quantity if item already in cart', () => {
      render(<App />);
      const shopBtn = screen.getByTestId('nav-shop-link');
      userEvent.click(shopBtn);
      const addToCartButtons = screen.getAllByText('Add To Cart');
      userEvent.click(addToCartButtons[0]);
      userEvent.click(addToCartButtons[0]);
      const cartLink = screen.getByTestId('nav-cart-link');
      userEvent.click(cartLink);
      const cartItemQuantity = screen.getByTestId("item-quantity");
      expect(cartItemQuantity.textContent).toBe("Quantity : 2");
    })
  });

  describe('deleteFromCart', () => {
    it('removes item from cart', () => {
      render(<App />);
      const shopBtn = screen.getByTestId('nav-shop-link');
      userEvent.click(shopBtn);
      const addToCartButtons = screen.getAllByText('Add To Cart');
      userEvent.click(addToCartButtons[0]);
      userEvent.click(addToCartButtons[1]);
      const cartLink = screen.getByTestId('nav-cart-link');
      userEvent.click(cartLink);
      const cartDeleteButton = screen.getAllByRole('button', {name: /Delete/i});
      userEvent.click(cartDeleteButton[0]);
      const cartTotalQuantity = screen.getByTestId("total-quantity");
      expect(cartTotalQuantity.textContent).toBe("Items in Cart: 1");
    });
  });

  describe('incrementItem', () => {
    it('increments item', () => {
      render(<App />);
      const shopBtn = screen.getByTestId('nav-shop-link');
      userEvent.click(shopBtn);
      const addToCartButtons = screen.getAllByText('Add To Cart');
      userEvent.click(addToCartButtons[0]);
      const cartLink = screen.getByTestId('nav-cart-link');
      userEvent.click(cartLink);
      const itemMoreButton = screen.getByRole('button', {name: /More/i});
      userEvent.click(itemMoreButton);
      const cartItemQuantity = screen.getByTestId("item-quantity");
      expect(cartItemQuantity.textContent).toBe("Quantity : 2");
    });
  });

  describe('decrementItem', () => {
    it('decrements item', () => {
      render(<App />);
      const shopBtn = screen.getByTestId('nav-shop-link');
      userEvent.click(shopBtn);
      const addToCartButtons = screen.getAllByText('Add To Cart');
      userEvent.click(addToCartButtons[0]);
      userEvent.click(addToCartButtons[0]);
      const cartLink = screen.getByTestId('nav-cart-link');
      userEvent.click(cartLink);
      const itemLessButton = screen.getByRole('button', {name: /Less/i});
      userEvent.click(itemLessButton);
      const cartItemQuantity = screen.getByTestId("item-quantity");
      expect(cartItemQuantity.textContent).toBe("Quantity : 1");
    });
  });
});