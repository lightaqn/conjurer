import React from "react";

interface IResolverItems {
  setPrompt: (e: any) => void;
  generateText: (e: any) => void;
  selectOption: (option: any) => void;
  array: string[];
  option: any;
  loading: boolean;
  prompt: string;
  handleSubmit: (e: any) => void;
}
// array,
export default function ResolverItems({
  selectOption,
  setPrompt,
  generateText,
  loading,
  prompt,
  handleSubmit,
}: IResolverItems) {
  return (
    <form
      onSubmit={handleSubmit}
      id="form"
      name="form"
      className="space-y-10 p-5 flex flex-col w-[70vw] h-[40vh] items-center justify-center"
    >
      <textarea
        placeholder="Enter your Search text"
        className="p-7 mx-3 hover:shadow-lg shadow-md w-full h-1/3 text-center rounded-2xl text-3xl ring-0 focus-none"
        value={prompt}
        cols={20}
        rows={4}
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>

      {/* <select
        name="size"
        id="size"
        className="hover:shadow-lg shadow-md p-5 rounded-xl cursor-pointer"
      >
        {array.map(({ option, name, description }: any) => {
          return (
            <option className="" onClick={() => selectOption(option)}>
              {name}
            </option>
          );
        })}
      </select> */}

      <button
        type="submit"
        className="hover:shadow-lg shadow-md border border-white hover:border-slate-500 px-10 py-5 tracking-wider  text-xl text-slate-400 font-bold rounded-2xl hover:text-slate-600 hover:bg-slate-200 mt-10"
        onClick={generateText}
      >
        {loading ? "Resolving..." : "Resolve"}
      </button>
    </form>
  );
}
