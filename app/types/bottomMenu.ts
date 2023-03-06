import { TypeRootStackParamList } from "@/types/navigation";
import { Feather } from "@expo/vector-icons";

export interface IMenuItem {
  iconName: keyof typeof Feather.glyphMap;
  path: keyof TypeRootStackParamList;
}

export type TypeNav = (name: keyof TypeRootStackParamList) => void;
