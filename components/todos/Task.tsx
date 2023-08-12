"use client";
import type { Task } from "@/lib/redux/slices/todoSlice";
import RemoveTodo from "./RemoveTodo";
import CheckTodo from "./CheckTodo";
import { memo } from "react";
import { format } from "date-fns";

const Task = memo(({ task }: { task: Task }) => {
  return (
    <div className=" w-full bg-white shadow-md p-4 rounded-xl flex justify-between items-center">
      <div>
        <p
          className={`font-semibold text-xl ${task.checked && " line-through"}`}
        >
          {task.name}
        </p>
        <p className=" text-gray-500 text-sm font-medium">
          {format(task.timeStamp, "E, d LLL yyyy")}
        </p>
        <p>{task.description}</p>
        <RemoveTodo id={task.id} />
      </div>
      <CheckTodo id={task.id} checked={task.checked} />
    </div>
  );
});
export default Task;
