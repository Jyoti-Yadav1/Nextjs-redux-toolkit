'use client'
import { store } from "./store";

const { Provider } = require("react-redux");

/**
 * it is used to connect next.js/react.js application and rtk
 */
export function Providers({children}){
return (
    <Provider store={store}>
        {children}
    </Provider>
)
}