import { GlobalStyles } from "@/constants/colors";
import { ActivityIndicator } from "react-native";

export const Loader = () => {
  return <ActivityIndicator color={GlobalStyles.primary} size="large" />;
};
