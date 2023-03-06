import { TypeRootStackParamList } from "../types/navigation";
import { routes } from "./routes";
import { GlobalStyles } from "@/constants/colors";
import useAuth from "@/hooks/useAuth";
import { AuthScreen } from "@/screens/AuthScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<TypeRootStackParamList>();
export const PrivateNavigation = () => {
  const { user } = useAuth();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#1e1c2e",
        },
      }}
    >
      {user ? routes.map(route => <Stack.Screen key={route.name} {...route} />) : <Stack.Screen name="Auth" component={AuthScreen} />}
    </Stack.Navigator>
  );
};
