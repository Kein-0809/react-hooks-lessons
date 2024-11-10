// useContext


// useContextを使ってログイン機能を実装する
// AuthProviderを作成し、それをmain.tsxにあるAppコンポーネントの外側で挟むように配置する (ラップする)
// 

import { ReactNode, createContext, useContext, useState } from "react";

type User = {
	id: string;
	username: string;
	email: string;
};

interface AuthContextType {
	user: User | null;
	login: (userInfo: User) => void;
	logout: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
// 1. Contextの作成
// - createContextを使ってContextを作成
// - 初期値を設定可能
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};


const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);

	const login = (userInfo: User) => {
		if (
			userInfo.username === "testUser" &&
			userInfo.email === "test@gmail.com"
		) {
			setUser(userInfo);
		} else {
			console.log("ログイン失敗");
		}
	}

	const logout = () => {
		setUser(null);
	};

	const contextValue = {
		user,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{ children }
		</AuthContext.Provider>
	)
};

export default AuthProvider;

// 2. Contextの提供 (Parent Component 「〇〇Provider」 = main.tsx内のコンポーネントにラップするやつ)
// - Provider componentでContextの値を子コンポーネントに提供
// - valueプロパティで値を設定

// main.tsx内のコード
/*
↓ //!  Parent Component (useContextの説明用)
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />						//! Child Component (useContextの説明用)
    </AuthProvider>
  </React.StrictMode>
);
*/