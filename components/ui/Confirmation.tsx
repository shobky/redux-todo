interface Body {
  header: string;
  description?: string;
  doBtn: string;
  cancelBtn: string;
  dofunc: () => void;
  cancelfunc: () => void;
}

export default function Confirmation(props: Body) {
  return (
    <>
      <div className="bg-black absolute top-0 left-0 h-full w-full blur opacity-5"></div>
      <div className="bg-white absolute p-8 h-[35vh] min-h-[200px] top-0 bottom-0 left-0 right-0 m-auto w-[80%] flex flex-col items-center gap-8 rounded-[25px]">
        <h1 className="font-semibold text-2xl text-zinc-800 text-center">
          {props.header}
        </h1>
        <p>{props.description ?? ""}</p>
        <div className="flex justify-between gap-2">
        <button
            className="font-semibold text-lg py-4 px-6 flex-1 text-gray-500 border border-gray-500 rounded-md"
            onClick={props.cancelfunc}
          >
            {props.cancelBtn}
          </button>
          <button
            className="font-semibold text-lg py-4 px-6 flex-1 bg-red-500 text-white rounded-md"
            onClick={props.dofunc}
          >
            {props.doBtn}
          </button>
        
        </div>
      </div>
    </>
  );
}
