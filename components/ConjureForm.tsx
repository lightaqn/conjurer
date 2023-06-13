import React from "react";

interface IForm {
  handleChange: (event: any) => void;
  handleSubmit: (event: any) => void;
  prompt: string;
  loading: boolean;
}

export default function ResolverItems({
  handleSubmit,
  prompt,
  handleChange,
  loading,
}: IForm) {
  return (
    <form
      onSubmit={handleSubmit}
      id="form"
      name="form"
      className="space-y-10 p-5 flex flex-col w-[70vw] h-[40vh] items-center justify-center"
    >
      <input
        id="prompt"
        value={prompt}
        type="text"
        placeholder="Enter your Image spell"
        className="p-5 hover:shadow-lg shadow-md w-1/2 text-center rounded-2xl text-3xl ring-0 focus-none"
        onChange={handleChange}
      />
      <select
        name="size"
        id="size"
        className="hover:shadow-lg shadow-md p-5 rounded-xl cursor-pointer"
      >
        <option className="p-5 text-lg text-slate-500" value="low">
          Low
        </option>
        <option className="p-5 text-lg text-slate-500" value="medium" selected>
          Medium
        </option>
        <option className="p-5 text-lg text-slate-500" value="high">
          High
        </option>
      </select>

      <button
        type="submit"
        className="hover:shadow-lg shadow-md border border-white hover:border-slate-500 px-10 py-5 tracking-wider  text-xl text-slate-400 font-bold rounded-2xl hover:text-slate-600 hover:bg-slate-200 mt-10"
        onClick={handleSubmit}
      >
        {loading ? "Loading..." : "Abracadabra"}
      </button>
    </form>
  );
}
