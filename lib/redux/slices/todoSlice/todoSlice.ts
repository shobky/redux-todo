import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import produce from "immer";

export const initialState: TodoState = {};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TodoAddPayload>) => {
      const newItem = {
        id: Object.keys(state).length, // Use a suitable ID generation method
        checked: false,
        timeStamp: Date.now(),
        name: action.payload.name,
        category: action.payload.category,
        description: action.payload.description
      };
      return {
        ...state,
        [newItem.id]: newItem,
      };
    },
    remove: (state, action: PayloadAction<number>) => {
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    },
    check: (state, action: PayloadAction<{ id: number }>) => {
      const id = action.payload.id;
      return {
        ...state,
        [id]: {
          ...state[id],
          checked: !state[id].checked,
        },
      };
    },
    checkAll: state => {
      return produce(state, newState => {
        for (const id in newState) {
          newState[id].checked = true;
        }
      });
    },
    unCheckAll: state => {
      return produce(state, newState => {
        for (const id in newState) {
          newState[id].checked = false;
        }
      });
    },
    removeAll: () => ({}),
  },
});

export interface TodoAddPayload {
  name: string;
  category: string;
  description?:string
}
export interface Task {
  id: number;
  name: string;
  checked: boolean;
  timeStamp: ReturnType<typeof Date.now>;
  category: string | null;
  description?: string
}
export type TodoState = Record<number, Task>;
