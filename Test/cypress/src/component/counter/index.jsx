// import { useEffect, useState } from "react";
// const Counter = ({ initialValue = 0 }) => {
//   const [count, setCount] = useState(initialValue);

//   const increament = () => setCount((count) => count + 1);

//   const decreament = () => setCount((count) => count - 1);

//   useEffect(() => {
//     if (count < 0) {
//       setCount(0);
//     }
//   }, [count]);

//   return (
//     <div>
//       <button disabled={count == 0} onClick={() => decreament()}>
//         Azalt
//       </button>
//       <p data-test-id="counter">{count}</p>
//       <button onClick={() => increament()}>Arttir</button>
//     </div>
//   );
// };

// export default Counter;

import { useEffect } from "react";
import { useCount } from "../../stores/app/hook";
import {
  setCount,
  setDecreament,
  setIncreament,
} from "../../stores/app/actions";

const Counter = () => {
  const count = useCount();

  const decreament = () => setDecreament();
  const increament = () => setIncreament();

  useEffect(() => {
    if (count < 0) {
      setCount(0);
    }
  }, [count]);

  return (
    <div>
      <button disabled={count == 0} onClick={decreament}>
        Azalt
      </button>
      <p data-test-id="counter">{count}</p>
      <button onClick={increament}>Arttir</button>
    </div>
  );
};

export default Counter;
