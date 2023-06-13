import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { ResultAnimation } from "../components";

interface ISolution {
  result: string;
  loading: boolean;
}

export default function Solution({ result, loading }: ISolution) {
  return (
    <section className="my-10 flex relative items-center justify center w-[70vw] h-[40vh]">
      {result?.length ? (
        <div className="m-5 mr-10 flex w-full items-center justify-center rounded-2xl border border-white bg-purple-700/30 p-5 pr-10 text-xl font-extrabold text-white shadow-md backdrop-blur-md hover:shadow-lg md:text-2xl lg:text-3xl xl:text-4xl">
          <ResultAnimation results={result} />
        </div>
      ) : null}

      {loading && (
        <div className="absolute rounded-2xl items-center justify-center flex inset-0 z-0 w-full h-full text-9xl font-extrabold text-white">
          <ClipLoader size="7.0rem" color="blue" />
        </div>
      )}
    </section>
  );
}
