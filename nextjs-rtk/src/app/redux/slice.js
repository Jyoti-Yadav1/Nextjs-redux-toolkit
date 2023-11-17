const { createSlice, nanoid , current} = require("@reduxjs/toolkit");

const initialState = {
    users :JSON.parse(localStorage.getItem("users") ||[])   // Getting data from localStorage if it is needed, earlier it was []
}

const Slice = createSlice({
    name: "addUserSlice",
    initialState,
    reducers:{
        addUser: (state, action) => {
         state.users.push(
            {
            name: action.payload,
            id: nanoid()  
            }
         )
         // Storing redux data in localStorage if it need to be maintained after page refresh, tab close or browser close.
         localStorage.setItem("users", JSON.stringify(current(state.users)));
        },
        removeUserAction: (state, action) => {
            const newUsers = state.users.filter(user=> user.id !== action.payload.id)
            state.users= newUsers;

            localStorage.setItem("users", JSON.stringify(newUsers));
           }
          
    }
});

export const { addUser, removeUserAction } = Slice.actions;
export default Slice.reducer;