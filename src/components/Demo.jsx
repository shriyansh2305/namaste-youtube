import { useMemo, useState } from "react";
import { nThPrime } from "../utils/helper";

const Demo = () => {
  const [val, setVal] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);
  // console.log("rendered: ", val);

  //   const prime = nThPrime(val);
  const prime = useMemo(() => nThPrime(val), [val]);
  return (
    <div
      className={`w-96 h-96 border p-2 m-2 border-black ${
        darkTheme ? "bg-gray-900 text-white" : ""
      }`}
    >
      <input
        className="px-2 border border-black"
        type="number"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <p>Nth Prime is : {prime}</p>
      <button
        className="p-2 m-2 border border-black rounded-2xl"
        onClick={() => setDarkTheme((prev) => !prev)}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Demo;
