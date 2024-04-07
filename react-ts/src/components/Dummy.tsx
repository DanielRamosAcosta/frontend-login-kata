import { useState } from "react";

export const Dummy = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="dummy">
      <p>Counter value: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Type here"
      />
      <p>Text value: {text}</p>
    </div>
  );
};
