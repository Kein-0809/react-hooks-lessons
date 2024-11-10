import { useEffect, useState } from "react";

const Lesson2_1 = () => {

  // エフェクト (副作用) <=> イベント
  // エフェクトは、イベントが発生した時に実行される
  // エフェクトは、なにかしらのイベントが発生したあとに自動的に実行される
  // イベントは、ユーザーの操作や、ブラウザの動作などのユーザー側の故意の操作によって発生するアクション

  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // console.log("Outside useEffectがレンダリングされました");

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    console.log("useEffectが実行されました");
    
    window.addEventListener("pointermove", handleMove);

    // クリーンアップ関数
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "blue",
        borderRadius: "50%",
        opacity: 0.6,
        pointerEvents: "none",
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -20,
        top: -20,
        width: 50,
        height: 50,
      }}
    ></div>
  );
};

export default Lesson2_1;
