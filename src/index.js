import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/scss/style.scss";      // scss 연동

const root = ReactDOM.createRoot(document.getElementById("root"));  // root라는 ID요소를 선택
root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
);                                                                  // root라는 ID요소에 App.js 컴포넌트를 렌더링
