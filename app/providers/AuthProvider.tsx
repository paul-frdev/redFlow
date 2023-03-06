import { IUser } from "@/types/user";
import * as Splash from "expo-splash-screen";
import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useEffect, useState } from "react";

export type UserTypeState = IUser | null;
interface IAuthContext {
  user: UserTypeState;
  setUser: Dispatch<SetStateAction<UserTypeState>>;
}

let ignore = Splash.preventAutoHideAsync();
export const AuthContext = createContext({} as IAuthContext);

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = useState<UserTypeState>({} as IUser);

  useEffect(() => {
    let isMounted = false;

    const getUserFromStorage = async () => {
      if (isMounted) {
      }
      await Splash.hideAsync();
    };
    let ignore = getUserFromStorage();
    return () => {
      isMounted = false;
    };
  }, []);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
