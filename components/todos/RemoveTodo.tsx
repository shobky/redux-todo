"use client";
import { todoSlice, useDispath } from "@/lib/redux";
import { memo, useState } from "react";
import Confirmation from "../ui/Confirmation";
import { title } from "process";

const RemoveTodo = memo(({ id }: { id: number }) => {
  const dispatch = useDispath();
  const [clicked, setclicked] = useState(false);

  const deleteTodo = () => {
    dispatch(todoSlice.actions.remove(id));
  };
  const handleCancel = () => {
    setclicked(false);
  };
  return (
    <div className="w-fit h-fit">
      <button
        className="bg-red-500 text-white py-1 px-2 text-md mt-2 rounded-md "
        onClick={() => setclicked(true)}
      >
        delete
      </button>
      {clicked && (
        <Confirmation
          header="Are you sure you want to remove this todo forever?"
          doBtn="Remove"
          cancelBtn="Cancel"
          cancelfunc={handleCancel}
          dofunc={deleteTodo}
        />
      )}
    </div>
  );
});
export default RemoveTodo;
