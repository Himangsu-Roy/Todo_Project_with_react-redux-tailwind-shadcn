import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

const app = () => {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    if (value % 4 === 0) {
      console.log("even");
      setSquares([...squares, value]);
      // setCount(value);
    } 

    // if (value > 0) {
    //   // setCount((prevCount) => prevCount - 1);

    //   // Remove the last square UI box when count is decremented
      // if (value % 4 === 0) {
      //   setSquares((prevSquares) => prevSquares.slice(0, -1));
      //   console.log("decrement")
      // }
    // }
  }, [value]);

  console.log("Squares==>",squares);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="flex border border-purple-300 rounded-md bg-slate-50 p-10">
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-3 mr-5 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          IncrementByAmount
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          Increment
        </button>
        <h1 className="text-3xl mx-10">{value}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white"
        >
          Decrement
        </button>
      </div>

      <div className="flex flex-row gap-10">
        {squares.map((square, index) => (
          <div
            key={index}
            className=" mt-3 self-start border-red-800 bg-purple-200 p-10 "
          >
            {square}
          </div>
        ))}
      </div>
    </div>
  );
};

export default app;
