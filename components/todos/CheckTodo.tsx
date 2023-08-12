"use client";

import { todoSlice, useDispath } from "@/lib/redux";
import { memo } from "react";
import { TbCircleCheck, TbCircleCheckFilled} from 'react-icons/tb'
interface Props {
  id: number;
  checked: boolean;
}
const CheckTodo = memo(({ id, checked }: Props) => {
  const dispatch = useDispath();
  return (
      <button className="w-fit h-fit text-3xl text-green-500 " onClick={() => dispatch(todoSlice.actions.check({ id }))}>
        {checked? <TbCircleCheckFilled/> : <TbCircleCheck/>}
      </button>
  );
});
export default CheckTodo;
