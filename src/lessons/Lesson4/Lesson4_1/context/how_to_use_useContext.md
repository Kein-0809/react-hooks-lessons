// useContextの使い方の説明:

// 1. Contextの作成
// - createContextを使ってContextを作成
// - 初期値を設定可能
const MyContext = createContext(initialValue);

// 2. Contextの提供
// - Provider componentでContextの値を子コンポーネントに提供
// - valueプロパティで値を設定
function ParentComponent() {
  return (
    <MyContext.Provider value={someValue}>
      <ChildComponent />
    </MyContext.Provider>
  );
}

// 3. Contextの使用
// - useContextフックを使って、Contextの値を取得
// - Providerで提供された最新の値を取得可能
function ChildComponent() {
  // useContextの使用
  const contextValue = useContext(MyContext);
  
  return (
    // contextValueを使用した処理
  );
}

主なポイント:
1. グローバルな状態管理に使用
- コンポーネント間でのpropsバケツリレーを防ぐ
- 深いネストのコンポーネントでも直接状態にアクセス可能

2. 特徴:
- Providerの値が変更されると、useContextを使用している全てのコンポーネントが再レンダリング
- 最も近いProviderの値を取得
- カスタムフックと組み合わせて再利用可能なロジックを作成可能

3. 一般的な使用例:
- テーマ設定
- ユーザー認証情報
- 言語設定
- アプリケーションの設定