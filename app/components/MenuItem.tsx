import { GlobalStyles } from "../constants/colors";
import { IMenuItem, TypeNav } from "../types/bottomMenu";
import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";

interface IMenuItemProps {
  item: IMenuItem;
  nav: TypeNav;
  currentRoute?: string;
}
export const MenuItem = ({ item, nav, currentRoute }: IMenuItemProps) => {
  const isActive = currentRoute === item.path;
  return (
    <Pressable
      style={
        isActive
          ? {
              shadowColor: GlobalStyles.primary,
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 7,
              shadowRadius: 12,

              elevation: 20,
            }
          : null
      }
      className="w-[24%] items-center"
      onPress={() => nav(item.path)}
    >
      <Feather name={item.iconName} size={24} color={isActive ? GlobalStyles.primary : "#8d8a99"} />
    </Pressable>
  );
};
