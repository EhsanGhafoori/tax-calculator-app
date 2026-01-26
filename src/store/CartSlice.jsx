import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // Add item to cart
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.name === newItem.name);
      
      if (existingItem) {
        // If item already exists, increment quantity
        existingItem.quantity += 1;
      } else {
        // If item doesn't exist, add it with quantity 1
        state.items.push({
          ...newItem,
          quantity: 1,
        });
      }
    },
    
    // Remove item from cart
    removeItem: (state, action) => {
      const itemName = action.payload;
      state.items = state.items.filter(item => item.name !== itemName);
    },
    
    // Update quantity of an item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      
      if (existingItem) {
        if (quantity <= 0) {
          // Remove item if quantity is 0 or less
          state.items = state.items.filter(item => item.name !== name);
        } else {
          // Update quantity
          existingItem.quantity = quantity;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
