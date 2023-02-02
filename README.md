# Shipper Shopper

An online shop built with React.

[👉 Live demo 👈](https://mikerachman1.github.io/shopping-cart/)

## Functionality
  - Routing with `react-router` with 3 different pages to visit: About, Shop, and Cart
  - The Shop page allows users to browse products and add them to their cart with a specified quantity
  - There is a sticky header on the Shop page that lets the user keep track of their cart quantity and total without navigating to the Cart page
  - On the Cart Page a user can edit their cart contents by changing the quantity of an Item, or by deleting an Item.

## Reflection
  I learned a lot about passing props between Components in this project. In particular keeping track of the `cartItems` and `quantityItems` states. 
  
  Initially I had created those states in the Cart component. When I lifted the state up to the App component the features I wanted became much easier to implement.

  I ended up making the `padPrices.js` helper function to ensure that prices are displayed correctly to the user.

  This project includes a suite of tests created using the React Testing Library and Jest. Tests do not provide full coverage, as they were written to practice testing skills.
## Screenshot
![screenshot](/src/images/screenshot.png?raw=true)

## Notes
  - The "Complete Order" button has no functionality, checking out is beyond the scope of this project. 
  - Product info was used from: Fake Store API https://fakestoreapi.com and stored in a helper file `products.js`
  - This was built as part of the Odin Project curriculum. [Project description](https://www.theodinproject.com/lessons/javascript-shopping-cart)