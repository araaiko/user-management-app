/* 外部import */
import { FC, memo } from "react";

/* 内部import */
import { HeaderLayout } from "../templates/HeaderLayout";

export const Home: FC = memo(() => {
  return (
    <HeaderLayout>
      <p>HOMEページです</p>
    </HeaderLayout>
  );
});
