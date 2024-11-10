import { useState, useRef } from "react";

const Lesson3_3 = () => {
  // const [inputText, setInputText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputText);

  const handleClick = () => {
    // alert(inputText);
    alert(inputRef.current?.value);
  };

  return (
    <div>
      <input
        type="text"
        className="border-b"
        // value={inputText}
        // onChange={(e) => setInputText(e.target.value)}
        ref={inputRef}
      />
      <button onClick={handleClick}>input入力値を見る</button>
    </div>
  );
};

export default Lesson3_3;
