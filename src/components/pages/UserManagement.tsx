/* 外部import */
import { FC, memo } from "react";

/* 内部import */
import { HeaderLayout } from "../templates/HeaderLayout";

export const UserManagement: FC = memo(() => {
  return (
    <HeaderLayout>
      <p>ユーザー管理ページです</p>
    </HeaderLayout>
  )
});
