import { createSlice } from "@reduxjs/toolkit";
import ExpenseInterface from "@/interface/expense-interface";
import { stat } from "fs";

const initialState: ExpenseInterface[] = [
  {
    date: "",
    desc: "",
    amount: 0,
    payer: null,
    validity:false,
  },
];

const expenseReducer = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    setState(state, action) {
      state = action.payload;
      return state;
    },
   
  },
});
export const { setState} = expenseReducer.actions;
export default expenseReducer.reducer;
