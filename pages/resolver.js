import React, { useState } from "react";
// import ResolverItems from "./components/ResolverItems";
// import Solution from "../components/Solution";
// import { Configuration, openAIApi } from "openai";
// import {array} from "../utils/constants"

function Resolver(textGenerated) {
  const [option, setOption] = useState({});
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  

  const selectOption = (option) => {
    setOption(option);
  };
  // const solve = () => {
  //   e.preventDefault();
  //   setOption({ ...option, prompt: input });
  //   setAnswer(textGenerated);
  //   //getServerData(prompt);
  // };

  
  return (
    <div>
      {Object.values(option).length === 0 ? (
        <div>
          <ResolverItems array={array} selectOption={selectOption} />
        </div>
      ) : (
        <div>
          <Solution setInput={setInput} solve={solve} answer={answer} />
        </div>
      )}
    </div>
  );
}

export default Resolver;

// export async function getServerSideProps(context) {
//   // const { option, input: prompt } = context.params;
//   let textGenerated;
//   const configuration = new Configuration({
//     apiKey: import.meta.env.OPENAI_API_KEY,
//   });

//   const openai = new openAIApi(configuration);
//   try {
//     const textResponse = await openai.createCompletion(context.params);
//     textGenerated = textResponse.data.choices[0].text;
//   } catch (err) {
//     // error: err.message;
//   }

//   return {
//     props: { textGenerated },
//   };
// }
