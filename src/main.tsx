import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AuthProvider from "./lessons/Lesson4/Lesson4_1/context/AuthContext.tsx";


//https://ja.react.dev/reference/react/useState#updating-state-based-on-the-previous-state

//! ↓ Parent Component (useContextの説明用)
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />						//! Child Component (useContextの説明用)
    </AuthProvider>
  </React.StrictMode>
);
