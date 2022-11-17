/* 外部import */
import { FC, memo, useCallback } from "react";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

/* 内部import */
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: FC = memo(() => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickHome = useCallback((): void => {
    navigate("/home");
  }, [navigate]);

  const onClickUserManagement = useCallback((): void => {
    navigate("/home/user_management");
  }, [navigate]);

  const onClickSetting = useCallback((): void => {
    navigate("/home/setting");
  }, [navigate]);

  return (
    <>
      <Flex
        as={"nav"}
        bg={"teal.500"}
        color={"gray.50"}
        align={"center"}
        justify={"space-between"}
        padding={{ base: 3, md: 5 }}
      >
        {/* brand name */}
        <Heading as={"h1"} fontSize={{ base: "md", md: "lg" }} mr={8}>
          <Box
            as={"a"}
            _hover={{ cursor: "pointer", opacity: 0.7 }}
            onClick={onClickHome}
          >
            ユーザー管理アプリ
          </Box>
        </Heading>

        {/* PC nav */}
        <Flex
          align={"center"}
          fontSize={"sm"}
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Box>
            <Link onClick={onClickSetting}>設定</Link>
          </Box>
        </Flex>

        {/* SP menu icon button */}
        <MenuIconButton onOpen={onOpen} />
      </Flex>

      {/* SP nav */}
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
