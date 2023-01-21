// const addToCart = (itemToAdd, quantity) => {
//   if (quantity < 1) { return }
//   //if item is already in cart update quantityItems with corresponding index
//   let itemsArray = [];
//   let idArray = [];
//   cartItems.forEach((item) => {
//     itemsArray.push(item.details);
//     idArray.push(item.id);
//   })

//   if (itemsArray.includes(itemToAdd)) {
//     const idIndex = itemsArray.indexOf(itemToAdd);
//     const itemId = idArray[idIndex];
//     setQuantityItems(quantityItems.map((quan) => {
//       if (quan.id === itemId) {
//         return { id: quan.id, number: quan.number + quantity }
//       } else {
//         return quan
//       }
//     }));
//     setSubtotalItems(subtotalItems.map((sub) => {
//       if (sub.id === itemId) {
//         return { id: sub.id, number: sub.number + (itemToAdd.price * quantity) }
//       } else {
//         return sub
//       }
//     }))
//   } else {
//     nextId += 1;
//     setCartItems([...cartItems, { id: nextId, details: itemToAdd }]);
//     setQuantityItems([...quantityItems, { id: nextId, number: quantity }]);
//     setSubtotalItems([...subtotalItems, { id: nextId, number: (itemToAdd.price * quantity) }]);  
//   }
//   setTotalItems(totalItems + quantity);
//   setTotalPrice(totalPrice + (itemToAdd.price * quantity));
// };