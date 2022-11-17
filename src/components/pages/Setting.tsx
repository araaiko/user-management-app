/* 外部import */
import { FC, memo } from "react";

/* 内部import */
import { HeaderLayout } from "../templates/HeaderLayout";

export const Setting: FC = memo(() => {
  return (
    <HeaderLayout>
      <p>設定ページです</p>
    </HeaderLayout>
  );
});
