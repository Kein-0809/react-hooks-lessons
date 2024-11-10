/*
メモ化の定義:
1. 重い計算結果をキャッシュして再利用する最適化手法
2. 同じ入力に対して同じ出力を返す場合に有効
3. 不要な再計算を防ぎパフォーマンスを向上させる
*/

/*
以下のような場合にmemoを使用することが推奨されます：

1. 重い計算や処理を含むコンポーネント
   - レンダリングコストが高いコンポーネント
   - 複雑なデータ処理を行うコンポーネント

2. 頻繁に再レンダリングが発生する親の中の子コンポーネント
   - 親コンポーネントのステート更新が多い
   - 子コンポーネントのpropsが変更されない

3. 純粋なコンポーネント（同じpropsで常に同じ出力）
   - 内部でステートを持たない
   - 外部の影響を受けない

4. パフォーマンス最適化が必要な場合
   - ユーザー体験の改善が必要
   - アプリケーションの応答性向上が求められる
*/

/*
以下の場合はmemoの使用を避けるべきです：

1. propsが頻繁に変更される場合
   - オブジェクトや配列を毎回新しく作成する
   - インラインで関数を定義する

2. シンプルなコンポーネント
   - レンダリングコストが低い
   - 最適化の効果が小さい

3. コンポーネントが内部ステートを持つ場合
   - ステートの変更で再レンダリングが必要
   - メモ化の効果が限定的
*/

import { useState, memo } from "react";

const Lesson5_1 = () => {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  console.log("Parent rendering");

  return (
    <div>
      <button
        onClick={() => setCount1(count1 + 1)}
        className="border-2 px-2 py-2 rounded-md"
      >
        Parent Count
      </button>
      <button
        className="border-2 px-2 py-2 rounded-md ml-2"
        onClick={() => setCount2(count2 + 1)}
      >
        Child Count
      </button>
      <p>Parent: {count1}</p>
      <Child count2={count2} />
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
const Child = memo(({ count2 }: { count2: number }) => {
  console.log("Child rendering");
  //重い処理
  let i = 0;
  while (i < 10000000) i++;
  return <p>Child: {count2}</p>;
});

export default Lesson5_1;
