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
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => {
    getUsers();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  const onClickUser = useCallback(() => {
    onOpen();
  }, [])

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
              />
            </WrapItem>
          ))}
        </Wrap>
      )}

      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </HeaderLayout>
  );
});
