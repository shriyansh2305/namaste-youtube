import React, { useRef, useState } from "react";

const Demo2 = () => {
  const [x, setX] = useState(0);
  let y = 0;
  const ref = useRef(0);
  return (
    <div className={`w-96 h-96 border p-2 m-2 border-black `}>
      <div>
        <button
          className="p-2 m-2 border border-black rounded-2xl bg-green-200"
          onClick={() => setX((prev) => prev + 1)}
        >
          Change X
        </button>
        <span>State value : {x}</span>
      </div>
      <div>
        <button
          className="p-2 m-2 border border-black rounded-2xl bg-green-200"
          onClick={() => {
            y = y + 1;
            console.log("Let : ", y);
          }}
        >
          Change Y
        </button>
        <span>Let value : {y}</span>
      </div>
      <div>
        <button
          className="p-2 m-2 border border-black rounded-2xl bg-green-200"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("Ref: ", ref.current);
          }}
        >
          Change Ref
        </button>
        <span>Ref value : {ref.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
