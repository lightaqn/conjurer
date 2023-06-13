import React from "react";
import Image from "next";
import ClipLoader from "react-spinners/ClipLoader";

interface ISolution {
  result: string;
  loading: boolean;
}

export default function ConjuredImage({ result, loading }: ISolution) {
  return (
    <section className="my-10 flex relative items-center justify center w-[70vw] h-[40vh]">
      {result ? (
        <Image
          src={result}
          alt=""
          layout="fill"
          className="w-full h-full rounded-2xl"
        />
      ) : (
        <Image
          src="/imagePlaceholder.jpg"
          alt=""
          layout="fill"
          className="w-full h-full rounded-2xl opacity-50"
        />
      )}

      {loading && (
        <div className="absolute rounded-2xl items-center justify-center flex inset-0 z-0 w-full h-full text-9xl font-extrabold text-white">
          <ClipLoader size="7.0rem" color="white" />
        </div>
      )}
    </section>
  );
}
