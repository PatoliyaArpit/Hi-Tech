import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const initialState = {
  cart: [],
  detail: [],
  reg: JSON.parse(localStorage.getItem("reg")) || [],
  log: JSON.parse(localStorage.getItem("log")) || [],
  quantity: 0,
  payment: [],
  plan: JSON.parse(localStorage.getItem("plan")) || [],
  Otp: [],
  filtercart:[],
  Address:JSON.parse(localStorage.getItem("Address")) || [],
  Admincart:JSON.parse(localStorage.getItem("Admincart")) || [],
  
 
};

// Load state from local storage if available
const savedCart = localStorage.getItem("cart");
if (savedCart) {
  initialState.cart = JSON.parse(savedCart);
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const itemId = action.payload.Id;
      const existingItemIndex = state.cart.findIndex(
        (item) => item.Id === itemId
      );

      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      // Save cart to local storage
      console.log(action);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
   
    removecart: (state, action) => {
      state.cart = state.cart.filter((x) => x.Id !== action.payload.Id);
      // Save cart to local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    update: (state, action) => {
      state.cart = action.payload;

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state, action) => {
      state.cart = [];
      localStorage.removeItem("cart");
    },

    Detail: (state, action) => {
      state.detail.push({ ...action.payload });
      // console.log(action);
    },
    add: (state, action) => {
      state.reg = [...state.reg, { ...action.payload }];
      localStorage.setItem("reg", JSON.stringify(state.reg));
    },
    updatepassword: (state, action) => {
      console.log(action);
      const { Email, newPassword } = action.payload;
      const userIndex = state.reg.findIndex((user) => user.Email === Email);
      if (userIndex !== -1) {
        state.reg[userIndex].Password = newPassword;
        localStorage.setItem("reg", JSON.stringify(state.reg));
      }
    },
    fadd: (state, action) => {
      const { data } = action.payload;
      const check = state.log.findIndex((user) => user.Email === data.Email);
      if (check !== -1) {
      } else {
        state.log = [...state.log, { ...action.payload }];
        localStorage.setItem("log", JSON.stringify(state.log));
      }
    },
    updatelog: (state, action) => {
      const {
        Name,
        Contact,
        Github,
        Twitter,
        Instagram,
        Facebook,
        Bio,
        Profile,
        Id,
      } = action.payload; // Destructure payload to get Name and Contact
      const userIndex = state.log.findIndex((user) => user.Id === Id);
      if (userIndex !== -1) {
        state.log[userIndex].Name = Name;
        state.log[userIndex].Contact = Contact;
        state.log[userIndex].Github = Github;
        state.log[userIndex].Twitter = Twitter;
        state.log[userIndex].Instagram = Instagram;
        state.log[userIndex].Facebook = Facebook;
        state.log[userIndex].Bio = Bio;
        state.log[userIndex].Profile = Profile;
        localStorage.setItem("log", JSON.stringify(state.log));
      }
    },
    logcleare: (state, action) => {
      state.log = [];
      localStorage.removeItem("log");
    },
    pay: (state, action) => {
      // Check if the payment already exists in the state
      const existingPayment = state.payment.find(
        (payment) => payment.id === action.payload.id
      );

      // If the payment doesn't exist, add it to the state
      if (!existingPayment) {
        state.payment.push({ ...action.payload });
      }

      // console.log(action);
    },
    plan: (state, action) => {
      state.plan.push({ ...action.payload });
      localStorage.setItem("plan", JSON.stringify(state.plan));

      console.log(action);
    },
    clearplan: (state, action) => {
      state.plan = [];
    },
    addotp: (state, action) => {
      state.Otp.push({ ...action.payload });
    },
    cleareotp: (state, action) => {
      state.Otp = [];
    },
    filterdata:(state,action)=>{
      console.log(action);
      state.filtercart.push({...action.payload});
    },
    Addressselect:(state,action)=>{

      state.Address = [{ ...action.payload }];
      localStorage.setItem("Address",JSON.stringify(state.Address))
    },
    cleareAddress:(state,action)=>{
      state.Address=[]
    },
    Adcart:(state,action)=>{
      state.Admincart = [{ ...action.payload }];
      localStorage.setItem("Admincart",JSON.stringify(state.Admincart))
 
    }
   
  },
});

export default cartSlice.reducer;
export const {
  addCart,
  removecart,
  update,
  Detail,
  add,
  fadd,
  pay,
  clearCart,
  plan,
  clearplan,
  logcleare,
  addotp,
  updatepassword,
  cleareotp,
  updatelog,
  filterdata,
  Addressselect,
  cleareAddress,
  Adcart
  
 
} = cartSlice.actions;
