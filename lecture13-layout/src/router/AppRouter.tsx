// 이 프로젝트에서는 BrowserRouter 사용 안함
// RouterProvider를 통한 통합 관리 방법 사용

import {createBrowserRouter} from "react-router";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import AuthLayout from "../layouts/AuthLayout.tsx";
import Login from "../pages/auth/Login.tsx";
import SignUp from "../pages/auth/SignUp.tsx";

export const router = (onClick: () => void) =>
    createBrowserRouter([
        {
            element: <MainLayout onClick={onClick}/>, // 레이아웃 컴포넌트
            children: [
                {path: "/", element: <Home/>},
                {path: "/about", element: <About/>},
            ], // 그 레이아웃을 따르는 페이지 컴포넌트
        },
        {
            element: <AuthLayout/>,
            children: [
                {path: "/auth/login", element: <Login/>},
                {path: "/auth/signUp", element: <SignUp/>},
            ],
        },
    ]);
