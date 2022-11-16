// 外部インポート
import { FC, memo } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// 内部ファイルのインポート
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { homeRoutes } from "./HomeRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Login />} />

      {/* 分けずに直接記述でもよかったかも */}
      {homeRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}

      <Route path={"*"} element={<Page404 />} />
    </>
  )
);

export const Router: FC = memo(() => {
  return <RouterProvider router={router} />;
});