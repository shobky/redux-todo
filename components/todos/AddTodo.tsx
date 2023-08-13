"use client";

import { TodoAddPayload, todoSlice, useDispath } from "@/lib/redux";
import { useRef, useState } from "react";

export default function AddTodo() {
  const [adding, setAdding] = useState(false);
  const dispatch = useDispath();

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const task: TodoAddPayload = {
      name: String(formData.get("name")),
      category: String(formData.get("category")),
      description: String(formData.get("description"))
    };

    dispatch(todoSlice.actions.add(task));
  };
  return (
    <>
      <button
        onClick={() => setAdding(true)}
        className="rounded-md w-1/2 absolute bottom-4 bg-green-500 left-0 right-0 block m-auto text-white text-xl p-4"
      >
        Create
      </button>
      {adding && (
        <div className="bg-black absolute w-full h-full top-0 left-0 opacity-20 blur-md "></div>
      )}
      <div className={ `${adding ? "bg-white shadow-2xl absolute top-0  w-full left-0  p-6 rounded-b-[25px] mt-0" : " absolute -top-[35rem]"} ease-in-out duration-150` }>
        <h1 className="font-semibold text-center text-xl text-stone-700">
          New Task
        </h1>
        <hr className="my-4"></hr>
        <form onSubmit={addTodo} className="grid gap-4">
          <div className="grid gap-2">
            <label className="text-lg font-semibold text-stone-600">
              Title
            </label>
            <input
              required
              name="name"
              placeholder="Name your task"
              className="bg-stone-100 p-[.7rem] rounded-md text-md "
            />
          </div>
          <div className="grid gap-2">
            <label className="text-lg font-semibold text-stone-600">
              Category
            </label>
            <input
              name="category"
              placeholder="Categorize it"
              className="bg-stone-100 p-[.7rem] rounded-md text-md "
            />
          </div>
          <div className="grid gap-2">
            <label className="text-lg font-semibold text-stone-600">
              Descreption
            </label>
            <textarea
              name="description"
              placeholder="Descripe it"
              rows={3}
              className="bg-stone-100 p-[.7rem] rounded-md text-md "
            />
          </div>
          <div className="flex justify-between gap-4 ">
            <button
              onClick={() => setAdding(false)}
              className="rounded-md py-[.8rem] flex-1 text-green-400 border-2 border-green-400 text-lg font-[500]"
              type="button"
            >
              Cancel
            </button>
            <button
              className="rounded-md py-[.8rem] flex-1 bg-green-400 text-white text-lg font-[500]"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
