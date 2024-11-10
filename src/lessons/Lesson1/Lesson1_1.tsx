// setState() = dispatch関数
// dispatch関数は、stateを更新するための関数
//? useState()を使って値を管理するときとしないときの違いについて
//? なぜuseState()を使うのかについて
//? stateの変更が即時反映されない理由
//? 状態更新関数の使い方
//? Reactがレンダリングするタイミングを理解する
//? onChangeイベントを使った状態更新の理解

import { useState, ChangeEvent } from "react";

const Lesson1_1 = () => {
  // <number>は、stateの型を指定している
  const [age, setAge] = useState<number>(0);
  const [name, setName] = useState<string>("Taro");

   console.log("rendering!") // 9. Reactがレンダリングするタイミング

  const handleClick = () => {
    // 7. stateの更新が即時反映されない理由
    // setAge(age + 1);
    // console.log(age);
    // setAge(age + 1);
    // console.log(age);
    // setAge(age + 1);
    // console.log(age);

    // 8. 状態更新関数の使い方
    setAge((prevAge) => prevAge + 1); // setAge((0 ) => 0 + 1)
    console.log(age); // 0, 3, 6, 9...
    setAge((prevAge) => prevAge + 1); // setAge((1) => 1 + 1)
    console.log(age); // 0, 3, 6, 9...
    setAge((prevAge) => prevAge + 1); // setAge((2) => 2 + 1)
    console.log(age); // 0, 3, 6, 9...
  };

  return (
    <div>
      {/* ChangeEvent<HTMLInputElement>の説明:
        - ChangeEventは、input要素の値が変更された時に発生するイベントの型
        - HTMLInputElementは、HTML input要素の型を表す
        - つまり、<input>要素からの変更イベントであることを明示的に型定義している
        - これにより、e.target.valueの型安全性が保証される */}
      <input type="text" value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
      <button
        className="border p-2 rounded-md bg-red-100"
        onClick={handleClick}
      >
        Add Age
      </button>
      <p></p>
    </div>
  );
};

export default Lesson1_1;
