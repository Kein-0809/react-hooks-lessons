import { useState } from "react";
import { useAuth } from "./context/AuthContext";


// 3. Contextの使用 (Child Component)
// - useContextフックを使って、Contextの値を取得
// - Providerで提供された最新の値を取得可能
const Lesson4_1 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // useContextを使って、Contextの値を取得
  const { user, login, logout } = useAuth();

  const handleLogin = () => {
    login({ id: "1", username: username, email: email });
  };

  return (
    <div>
      {user ? (
        <div>
          <p>ログイン済み: {user.username}</p>
          <button onClick={logout}>ログアウト</button>
        </div>
      ) : (
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleLogin}>ログイン</button>
        </div>
      )}
    </div>
  );
};

export default Lesson4_1;
