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
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
  onClickLogout: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const {
    isOpen,
    onClose,
    onClickHome,
    onClickUserManagement,
    onClickSetting,
    onClickLogout
  } = props;

  return (
    <Drawer placement={"left"} size={"sm"} isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody p={0} bg={"gray.100"}>
          <Button w={"100%"} onClick={onClickHome}>
            TOP
          </Button>
          <Button w={"100%"} onClick={onClickUserManagement}>
            ユーザー一覧
          </Button>
          <Button w={"100%"} onClick={onClickSetting}>
            設定
          </Button>
          <Button w={"100%"} onClick={onClickLogout}>
            ログアウト
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
