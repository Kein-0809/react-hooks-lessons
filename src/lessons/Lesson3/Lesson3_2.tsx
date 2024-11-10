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

import { useRef, RefObject } from "react";

const Lesson3_2 = () => {

  // RefObject<HTMLUListElement>の説明:
// - RefObjectは、DOMノードへの参照を保持するためのReactの型
  // - HTMLUListElementは、<ul>要素のDOM型を表す
  // - RefObject<HTMLUListElement>は、<ul>要素への読み取り専用の参照を表す型
  // - この型定義により、listRef.currentは null か HTMLUListElement型のどちらかになる
  const listRef: RefObject<HTMLUListElement> = useRef<HTMLUListElement>(null);

  const scrollToIndex = (index: number) => {
    console.log(listRef.current);
    const listNode = listRef.current;
    // listNode?.querySelectorAll("li > img")[index] の説明:
    // - listNode?: はオプショナルチェーン演算子で、listNodeがnullまたはundefinedの場合にundefinedを返す
    // - querySelectorAll("li > img") は、<li>要素の直下にある<img>要素をすべて取得するCSSセレクター
    // - [index] は、取得した画像要素の配列から指定したインデックスの要素を取得
    // - つまり:
    //   1. listNode配下のli要素内のimg要素をすべて取得
    //   2. 取得した要素の配列からindex番目の要素を取得
    //   3. listNodeがない場合は安全にundefinedを返す
    const imgNode = listNode?.querySelectorAll("li > img")[index];
    console.log(imgNode);

    imgNode?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div>
      <nav>
        <button onClick={() => scrollToIndex(0)}>Cat1</button>
        <button onClick={() => scrollToIndex(1)}>Cat2</button>
        <button onClick={() => scrollToIndex(2)}>Cat3</button>
      </nav>
      <div style={{ overflowX: "auto", maxWidth: "700px", margin: "auto" }}>
        <ul
          className="flex items-center justify-between"
          style={{ minWidth: "1300px" }} // コンテナより大きいサイズを指定
          // refの説明:
            // 1. refはReactの特別な属性（prop）で、DOM要素への参照を取得するために使用
            // 2. 主な用途:
            //    - DOM要素への直接アクセス
            //    - フォーカス制御
            //    - アニメーション
            //    - スクロール位置の制御
            //    - 要素のサイズや位置の取得
            // 3. ref={listRef}の場合:
            //    - listRefオブジェクトのcurrentプロパティにこのDOM要素（<ul>）が格納される
            //    - コンポーネント内でlistRef.currentでこのDOM要素にアクセス可能
            //    - レンダリングに影響を与えずにDOM操作が可能
          // listRefの説明:
            // - useRefで作成したrefオブジェクトをDOM要素に紐付ける
            // - この紐付けにより、listRef.currentでこのDOM要素に直接アクセスが可能になる
            // - スクロール操作やDOM要素の測定など、直接的なDOM操作が必要な場合に使用
            // - Reactの管理外でDOM操作を行う必要がある場合の「エスケープハッチ」として機能
          ref={listRef}
        >
       <ul>
  <li>
    <img src="https://api.thecatapi.com/v1/images/search?size=small" alt="Cat 1" width="200" height="200" />
  </li>
  <li>
    <img src="https://api.thecatapi.com/v1/images/search?size=med" alt="Cat 2" width="300" height="200" />
  </li>
  <li>
    <img src="https://api.thecatapi.com/v1/images/search?size=small" alt="Cat 3" width="250" height="200" />
  </li>
</ul>
        </ul>
      </div>
    </div>
  );
};

export default Lesson3_2;
