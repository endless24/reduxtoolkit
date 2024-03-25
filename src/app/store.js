import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./feactures/todos/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
