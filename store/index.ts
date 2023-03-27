import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import groupMemberReducer from "./reducers/groupMemberReducer";
import groupNameReducer from "./reducers/groupNameReducer";

export const store = configureStore({
  reducer: { groupName: groupNameReducer, groupMember: groupMemberReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
