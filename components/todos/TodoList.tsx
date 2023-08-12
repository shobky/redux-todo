"use client";

import {
  selectAllTodos,
  todoSlice,
  useDispath,
  useSelector,
} from "@/lib/redux";

import Task from "./Task";

export default function TodoList() {
  const todos = useSelector(selectAllTodos);
  const dispatch = useDispath();
  return (
    <div className="py-6 h-[80%] overflow-y-scroll">
      <button onClick={() => dispatch(todoSlice.actions.removeAll())}>
        Remove all
      </button>
      <button onClick={() => dispatch(todoSlice.actions.checkAll())}>
        check all
      </button>
      <button onClick={() => dispatch(todoSlice.actions.unCheckAll())}>
        un check all
      </button>
      <div className="grid gap-4 ">
        {Object.keys(todos).map(todoId => (
          <Task key={todoId} task={todos[Number(todoId)]} />
        ))}
      </div>
    </div>
  );
}
