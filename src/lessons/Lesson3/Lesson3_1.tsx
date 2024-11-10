// refの説明:
// 1. refとは、コンポーネントのレンダリングに影響を与えずに値を保持するためのReactの機能
// 2. 主な特徴:
//    - レンダリング間で値を保持できる（通常の変数は毎回リセットされる）
//    - 値を変更してもコンポーネントの再レンダリングが発生しない（stateとは異なる）
//    - コンポーネントのインスタンスごとに独立した値を持つ
// 3. 一般的な使用例:
//    - DOMノードへの直接アクセス
//    - タイマーIDの保持
//    - アニメーションの制御
//    - 外部ライブラリとの統合
//    - レンダリングに影響しない値の保持

import { useRef, useState } from "react";

const Lesson3_1 = () => {
  const [input, setInput] = useState("");

  // const ref = useRef<number>(0);
  const ref = useRef<string>("useRef");
  console.log(ref);

  function handleClick() {
    ref.current += 1;
    console.log(ref.current);
  }

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleClick}>Click me!</button>
      <p>{input}</p>
    </div>
  );
};

export default Lesson3_1;
