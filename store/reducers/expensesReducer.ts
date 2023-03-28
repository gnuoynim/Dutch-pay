import { createSlice } from "@reduxjs/toolkit";
import ExpenseInterface from "@/interface/expense-interface";
const initialState :ExpenseInterface[]= [{
  date: "",
  desc: "",
  amount: 0,
  payer: null,
}];
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
export const { setState } = expenseReducer.actions;
export default expenseReducer.reducer;
