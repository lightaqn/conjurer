import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState, SetStateAction } from "react";
import {
  ResolverItems,
  Solution,
  ConjureForm,
  ConjuredImage,
} from "../components";
import ClipLoader from "react-spinners/ClipLoader";
import { URL } from "../utils/config";
import { array } from "../utils/constants";
import { NextPage } from "next";
import axios from "axios";

interface IProps {
  array: string[];
  prompt: string;
  handleChange: (event: any) => void;
  handleSubmit: (event: any) => void;
  setPrompt: (event: any) => void;
}

function Home(props: IProps) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState<SetStateAction<boolean>>(false);
  const [toggle, setToggle] = useState<SetStateAction<boolean>>(false);
  const [result, setResult] = useState<SetStateAction<string> | any>("");
  const [option, setOption] = useState({});
  let size;
  const resolution =
    size === "low" ? "256x256" : size === "medium" ? "512x512" : "1024x1024";

  const handleChange = (e: any) => {
    setPrompt(e.target.value);
  };
  const selectOption = (option: any) => {
    setOption(option);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    const response = await axios
      .post("http://localhost:3000/api/conjure", {
        prompt,
        resolution,
      })
      .then((response) => {
        setResult(response.data), setLoading(false);
      })
      .catch((error) => alert(error));
  };

  const generateText = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    const response = await axios
      .post("http://localhost:3000/api/resolve", {
        prompt,
        option,
      })
      .then((response) => {
        setResult(response.data), setLoading(false);
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="py-0 px-2">
      <Head>
        <title>The Conjurer</title>
        <meta
          name="description"
          content="Abracadabra, any type of image will be conjured on demand"
        />
      </Head>

      <main
        className={`min-h-[100vh] py-4 px-0 flex flex-1 flex-col justify-center items-center ${
          toggle && "bg-slate-700"
        }`}
      >
        <h1
          className={`m-0 my-10 leading-[1.15] text-6xl border border-slate-500 py-5 px-10 rounded-2xl flex space-x-5 shadow-md hover:shadow-lg ${
            toggle ? "bg-white text-slate-600" : "bg-slate-400 text-white"
          }`}
        >
          {!toggle ? (
            <a href="#">The Resolver</a>
          ) : (
            <a href="#" className="">
              The Conjurer
            </a>
          )}
        </h1>
        {/* mx-auto ml-5 border-2 border-white bg-slate-500 mb-5 font-bold text-lg text-white cursor-pointer rounded-full w-[100px] px-6 py-3 */}
        <div
          className={`mb-5 mx-auto ml-5 items-center justify-center active:border-r-slate-600 active:border-r-8 w-40 px-10 py-5 pb-7 text-center rounded-full shadow-md hover:shadow-xl hover:cursor-pointer hover:bg-gray-100 text-gray-500 font-bold active:scale-90 transition duration ease-in whitespace-nowrap
          ${toggle && "bg-white text-slate-500 border-slate-500"}`}
          onClick={() => setToggle(!toggle)}
        >
          {/* Switch */}
          {toggle ? "Generate Text" : "Conjure Image"}
        </div>

        <div
          className={`flex items-center justify-center flex-wrap max-w-[800px] rounded-3xl ${
            toggle && "bg-slate-600"
          }`}
        >
          <section className="border-2 rounded-2xl shadow-md hover:shadow-xl hover:bg-gray-100 hover:border-slate-500 bg-slate-400/30 backdrop-blur-lg mt-10">
            {toggle ? (
              <ConjureForm
                handleSubmit={handleSubmit}
                prompt={prompt}
                handleChange={handleChange}
                loading={loading}
              />
            ) : (
              <section className="border border-2xl space-y-2">
                <ResolverItems
                  selectOption={selectOption}
                  setPrompt={setPrompt}
                  loading={loading}
                  generateText={generateText}
                />
              </section>
            )}
          </section>
          <div className="flex flex-col my-10 m-5 mt-20 w-1/2 items-center justify-center">
            <hr className="h-1 w-1/2 bg-slate-500 " />
            <h2 className="text-2xl font-semibold text-gray-500 py-5 my-5">
              {prompt}
            </h2>
            <hr className=" h-1 w-1/2 bg-slate-500" />
          </div>

          {/* (result || resultImage */}
          {toggle ? (
            <section className="my-10 flex rounded-2xl relative items-center justify center w-[70vw] h-[40vh]">
              {result ? (
                <Image
                  src={result}
                  alt=""
                  layout="fill"
                  className="w-full h-full rounded-2xl"
                  objectFit="contain"
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
          ) : (
            // <ConjuredImage result={result} loading={loading} />
            <Solution result={result} loading={loading} />
            // <div className="">{result}</div>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
export default Home;
