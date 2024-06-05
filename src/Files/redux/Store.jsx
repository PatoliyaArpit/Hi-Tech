import{configureStore} from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";


const store=configureStore({
    reducer:{
        cart:CartSlice,
        reg:CartSlice,
        log:CartSlice,
        payment:CartSlice,
        plan:CartSlice,
        check:CartSlice,
        Otp:CartSlice,
        cart1:CartSlice,
        filtercart:CartSlice
    }
})
export default store