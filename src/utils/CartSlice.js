import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items:[]
    },
    reducers:{
        addItem: (state, action) => {
            state.items.push(action.payload);
            console.log(state.items);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export default cartSlice.reducer;
export const {addItem, removeItem, clearCart} = cartSlice.actions;
