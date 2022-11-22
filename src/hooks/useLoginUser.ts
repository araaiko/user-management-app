/* 外部import */
import { useContext } from "react";

/* 内部import */
import {
  LoginUserContext,
  LoginUserContextType,
} from "../providers/LoginUserProvider";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
