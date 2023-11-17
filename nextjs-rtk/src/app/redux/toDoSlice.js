import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    toDo: [],
}

const toDoSlice = createSlice({
    name: "toDoSlice",
    initialState,
    reducers: {
        getItem : (state, action)=> {
           return state.toDo;
        },
        addItem : (state, action) => {
           state.toDo.push(action.payload);
        //    return state.toDo;
        },
        removeItem : (state, action) => {
            let remainingItems = state.toDo.filter(item => item == action.payload);
            state.toDo = remainingItems;
            return remainingItems;
        }
    }
})

export const { getItem, addItem, removeItem } = toDoSlice.actions;
export default toDoSlice.reducer;