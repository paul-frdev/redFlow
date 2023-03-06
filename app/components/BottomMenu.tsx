import { MenuItem } from "./MenuItem";
import { menuData } from "@/constants/menuData";
import { TypeNav } from "@/types/bottomMenu";
import { FC } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IBottomMenu {
  nav: TypeNav;
  currentRoute?: string;
}

export const BottomMenu: FC<IBottomMenu> = props => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={{ paddingBottom: bottom + 10 }} className="pt-5 px-3 flex-row justify-between items-center w-full bg-[#1e1c2e]">
      {menuData.map(dataItem => (
        <MenuItem item={dataItem} key={dataItem.path} {...props} />
      ))}
    </View>
  );
};
