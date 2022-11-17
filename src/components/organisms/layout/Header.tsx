/* 外部import */
import { FC, memo } from "react";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";

/* 内部import */
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <Box as={"a"} _hover={{ cursor: "pointer", opacity: 0.7 }}>
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
            <Link>ユーザー一覧</Link>
          </Box>
          <Box>
            <Link>設定</Link>
          </Box>
        </Flex>

        {/* SP menu icon button */}
        <MenuIconButton onOpen={onOpen} />
      </Flex>

      {/* SP nav */}
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
});
