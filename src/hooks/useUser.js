import { useContext } from "react";
import { UserContext } from "../context/UserContext";


const useUser = () => {
  const { userToken, setUserToken, clearToken } = useContext(UserContext);

  return { userToken, setUserToken, clearToken };
};

export default useUser;