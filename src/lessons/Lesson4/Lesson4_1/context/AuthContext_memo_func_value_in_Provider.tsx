// メモ化された関数とメモ化された値をProviderに渡す記述

import { ReactNode, createContext, useContext, useState, useCallback, useMemo } from "react";

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

	// loginをメモ化
	const login = useCallback((userInfo: User) => {
		if (
			userInfo.username === "testUser" &&
			userInfo.email === "test@gmail.com"
		) {
			setUser(userInfo);
		} else {
			console.log("ログイン失敗");
		}
	}, []); // 依存配列が空なので、関数は一度だけ作成される

	// logoutをメモ化
	const logout = useCallback(() => {
		setUser(null);
	}, []); // 依存配列が空なので、関数は一度だけ作成される

	// contextValueをメモ化
	const contextValue = useMemo(() => ({
		user,
		login,
		logout,
	}), [user, login, logout]); // userまたはメモ化された関数が変更された時のみ再作成

	return (
		<AuthContext.Provider value={contextValue}>
			{children}
		</AuthContext.Provider>
	)
};

export default AuthProvider;