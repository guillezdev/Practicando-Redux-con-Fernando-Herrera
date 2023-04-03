import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {increment,decrement,reset, incrementBy,} from "../store/slices/counter/counterSlice";

export function Counter() {
  const contador = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(incrementBy(5))}>Increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <h1>{contador}</h1>
      </div>
    </div>
  );
}
