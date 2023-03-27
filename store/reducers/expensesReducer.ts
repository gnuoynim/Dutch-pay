import { createSlice } from "@reduxjs/toolkit";

const expenseReducer = createSlice({
  name: "expenses",
  initialState: {
    expenses: [],
  },
  reducers: {
    setExpenses(state, action) {
      state.expenses = action.payload;
    },
  },
});
export const { setExpenses } = expenseReducer.actions;
export default expenseReducer.reducer;
