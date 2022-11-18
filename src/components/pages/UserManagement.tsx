/* 外部import */
import { FC, memo } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";

/* 内部import */
import { HeaderLayout } from "../templates/HeaderLayout";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: FC = memo(() => {
  return (
    <HeaderLayout>
      <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <UserCard
            imageUrl={"https://source.unsplash.com/random"}
            userName={"アスカ"}
            fullName={"Asuka Hongo"}
          />
        </WrapItem>
      </Wrap>
    </HeaderLayout>
  );
});
