import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, memo } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

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

        {/* SP hamburger icon */}
        <IconButton
          aria-label="メニューボタン"
          icon={<HamburgerIcon />}
          size={"sm"}
          variant={"unstyled"}
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />
      </Flex>

      {/* SP nav */}
      <Drawer placement={"left"} size={"sm"} isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody p={0} bg={"gray.100"}>
            <Button w={"100%"}>TOP</Button>
            <Button w={"100%"}>ユーザー一覧</Button>
            <Button w={"100%"}>設定</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
});
