/* 外部import */
import { useCallback, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/* 内部import */
import { User } from "../types/api/user";
import { useMessage } from "../hooks/useMessage";
import { useLoginUser } from "../hooks/useLoginUser";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            setLoginUser(res.data);
            showMessage({
              title: "ログインしました",
              status: "success",
            });
            navigate("/home");
          } else {
            showMessage({
              title: "ユーザーが見つかりません",
              status: "error",
            });
          }
        })
        .catch(() => {
          showMessage({
            title: "ログインできません",
            status: "error",
          });
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [navigate, showMessage, setLoginUser]
  );

  return { login, loading };
};
