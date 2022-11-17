/* 外部import */
import { FC, memo } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;

  return (
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
  );
});
