import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items:["Banana, Apples"]
    },
    reducers:{
        addItemAction: (state, action) => {
            state.items.push(action.payloa);
        },
        removeItemAction: (state, action) => {
            state.items.pop();
        },
        clearCartAction: (state) => {
            state.items = [];
        }
    }
});

export default cartSlice.reducer;
export const {addItemAction, removeItemAction, clearCartAction} = cartSlice.actions;
