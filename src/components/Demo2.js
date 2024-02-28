import { useState, useRef, useEffect } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;

  const ref = useRef(0);
  console.log("Rendering....");
  const i = useRef(null);

  useEffect(() => {
    if (i.current) return;
    i.current = setInterval(() => {
      //console.log("Use Efffect Called", Math.random());
    }, 1000);
  }, []);

  return (
    <div className="p-2 m-4 border border-black bg-slate-50 w-96 h-96">
      <div>
        <button
          className="p-2 m-4 bg-green-100"
          onClick={() => {
            x = x + 1;
            console.log("x=" + x);
          }}
        >
          Increase x
        </button>
        <span className="text-xl font-bold">Let = {x}</span>
      </div>
      <div>
        <button
          className="p-2 m-4 bg-green-100"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase Y
        </button>
        <span className="text-xl font-bold">State = {y}</span>
      </div>
      <div>
        <button
          className="p-2 m-4 bg-green-100"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref=", ref.current);
          }}
        >
          Increase Ref
        </button>
        <span className="text-xl font-bold">Ref = {ref.current}</span>
      </div>
      <button
        className="p-4 m-4 font-bold text-white bg-red-900 rounded-lg"
        onClick={() => {
          clearInterval(i.current);
        }}
      >
        Stop Printing
      </button>
    </div>
  );
};
export default Demo2;
