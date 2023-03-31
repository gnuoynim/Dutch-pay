import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import expensesReducer from "./reducers/expensesReducer";
import groupMemberReducer from "./reducers/groupMemberReducer";
import groupNameReducer from "./reducers/groupNameReducer";
import validityReducer from "./reducers/validityReducer";

export const store = configureStore({
  reducer: {
    groupName: groupNameReducer,
    groupMember: groupMemberReducer,
    expenses: expensesReducer,
    validity: validityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
