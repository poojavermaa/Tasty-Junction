import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
        // mutating the state here
        // Vanialla(older) Redux => DONT'T MUTATE STATE returning was mandatory


        // Redux toolkit - we have to mutate the state
        state.items.push(action.payload);
    },
    removeItem: (state, action) => {
    //   state.items.pop();
    state.items = state.items.filter(item => item.card.info.id !== action.payload.card.info.id);
    },
    clearCart: (state, action) => {
        // RTK - either Mutate the existing state or return a new State
      state.items.length = 0;

      // return {items : []};
    },
  },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;