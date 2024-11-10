import { useState, useEffect } from "react";
import { fetchBio } from "./fetchBio";

const Lesson2_2 = () => {

  const [person, setPerson] = useState("ShinCode");
  const [bio, setBio] = useState<string | null>(null);

  // <select>のvalueであるpersonが変更された時にuseEffectが実行される
  useEffect(() => {
    // コンポーネントがアンマウントされたかどうかを追跡するためのフラグ
    let isMounted = false;

    const startFetching = async () => {
      const response = await fetchBio(person);
      
      // メモリリークを防ぐため、コンポーネントがまだマウントされている場合のみ
      // 状態を更新する
      if (!isMounted) {
        setBio(response);
      }
    };

    startFetching();

    // クリーンアップ関数:
    // - コンポーネントがアンマウントされる時に実行される
    // - isMountedフラグをtrueに設定することで、
    //   アンマウント後の状態更新を防ぐ
    return () => {
      isMounted = true;
    };
  }, [person]); // personが変更される度に実行

  return (
    <div>
      <select value={person} onChange={(e) => setPerson(e.target.value)}>
        <option value="ShinCode">ShinCode</option>
        <option value="TestUser">TestUser</option>
        <option value="SampleUser">SampleUser</option>
      </select>

      <hr />

      <p className="text-black">{bio ?? "Loading..."}</p>
    </div>
  );
};

export default Lesson2_2;
