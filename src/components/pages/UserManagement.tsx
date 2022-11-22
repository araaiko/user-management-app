/* eslint-disable react-hooks/exhaustive-deps */
/* 外部import */
import { FC, memo, useCallback, useEffect } from "react";
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

/* 内部import */
import { HeaderLayout } from "../templates/HeaderLayout";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();
  console.log(loginUser);

  useEffect(() => {
    getUsers();
  }, []);

  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id: id, users: users, onOpen: onOpen });
  }, [users]);

  return (
    <HeaderLayout>
      {loading ? (
        <Center h={"100vh"}>
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify={"center"}>
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                imageUrl={"https://source.unsplash.com/random"}
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
                id={user.id}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}

      <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} />
    </HeaderLayout>
  );
});
