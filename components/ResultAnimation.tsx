import React, { useState, useEffect, useRef } from "react";

const results = "Have you been thinking about that next holiday destination?";

const MessageAnimation = ({ results }: any) => {
  const [message, setMessage] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    const flicker = () => {
      setMessage((prev: any) => prev + results[indexRef.current]);
      indexRef.current++;
    };
    if (indexRef.current <= results.length) {
      const addLetter = setInterval(flicker, 200);
      return () => clearInterval(addLetter);
    } else {
      setMessage(results);
    }
  }, [message]);

  return (
    <div className="flex w-full font-extrabold gradient-to-r from-amber-500 to-teal-300 text-slate-500 text-xl md:text-2xl lg:text-3xl xl:text-4xl items-center justify-center whitespace-nowrap">
      {message.length ? message : null}
    </div>
  );
};
export default MessageAnimation;
