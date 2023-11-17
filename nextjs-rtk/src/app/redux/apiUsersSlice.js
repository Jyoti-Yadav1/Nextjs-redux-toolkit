const { createSlice, nanoid , current, createAsyncThunk} = require("@reduxjs/toolkit");

// fetching the api for pushing data in redux store
export const fetchUsers = createAsyncThunk("fetchUsers", async()=>{
    console.log("Api call");
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
})

const initialState = {
    users :[]
}

const ApiUsersSlice = createSlice({
    name: "apiUserSlice",
    initialState,
    reducers:{
        addUser: (state, action) => {
         state.users.push(
            {
            name: action.payload,
            id: nanoid()  
            }
         )
        },
          
    },
    extraReducers: (builder) => {
        console.log("reducer");
        builder.addCase(fetchUsers.fulfilled, (state, action)=> {
            state.isLoading =false;
            state.userApiData = action.payload
        })
    }
});

export const { addUser, removeUserAction } = ApiUsersSlice.actions;
export default ApiUsersSlice.reducer;