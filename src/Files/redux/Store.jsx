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
        filtercart:CartSlice,
        Address:CartSlice,
        Admincart:CartSlice
    }
})
export default store