// Lesson2_3で使用するためのカスタムフック

import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
}

//! 引数を取らないカスタムフック
//! export const useFetchUser = () => {

// userIdを引数に取るカスタムフック
export const useFetchUser = (userId: number) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true; // このフラグはコンポーネントのマウント状態を追跡します

    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!response.ok) {
          throw new Error("データの取得に失敗しました");
        }
        const userData: User = await response.json();

        if (isMounted) {
          setUser(userData);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error(error);
          setLoading(false);
        }
      }
    };

    fetchUser();

    // クリーンアップ関数
    return () => {
      isMounted = false; // コンポーネントがアンマウントされたらフラグをfalseに設定
    };


  //! 引数を取らないカスタムフック
  //! }, []); // 空の依存配列

  // userIdを引数に取るカスタムフック
  }, [userId]); // 空の依存配列

	return { user, loading}
};