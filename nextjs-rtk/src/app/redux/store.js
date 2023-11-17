const { configureStore } = require("@reduxjs/toolkit");
import UserReducer from "./slice";
import  ToDoReducer  from "./toDoSlice";
import ApiUsersReducer from "./apiUsersSlice";
// configureStore contains all the reducers 
export const store = configureStore({
    reducer: {
        userData: UserReducer,
      toDoData: ToDoReducer,
      apiUsersData: ApiUsersReducer
    }
})