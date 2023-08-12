import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./rootReducer";
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from "react-redux";

export const store = configureStore({
  reducer,
});

export const useDispath = () => useReduxDispatch<Dispatch>();
export const useSelector: TypedUseSelectorHook<State> = useReduxSelector;

export type Store = typeof store;
export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
