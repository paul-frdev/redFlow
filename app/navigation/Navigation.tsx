import { BottomMenu } from "../components/BottomMenu";
import useAuth from "../hooks/useAuth";
import { PrivateNavigation } from "./PrivateNavigation";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [currentRoute, setCurrentRoute] = useState<string | undefined>(undefined);

  const navRef = useNavigationContainerRef();
  const { user } = useAuth();

  useEffect(() => {
    setCurrentRoute(navRef.getCurrentRoute()?.name);
    const listener = navRef.addListener("state", () => setCurrentRoute(navRef.getCurrentRoute()?.name));

    return () => {
      navRef.removeListener("state", listener);
    };
  }, []);

  return (
    <>
      <NavigationContainer ref={navRef}>
        <PrivateNavigation />
      </NavigationContainer>
      {user && currentRoute && <BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />}
    </>
  );
};

export default Navigation;
