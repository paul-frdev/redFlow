import { Entypo } from "@expo/vector-icons";
import { FC } from "react";
import { Pressable } from "react-native";

interface IArrowLeftProps {
  onPress: () => void;
  iconName: keyof typeof Entypo.glyphMap;
  size: number;
  color: string;
}
export const ArrowLeft: FC<IArrowLeftProps> = ({ onPress, iconName, size, color }) => {
  return (
    <Pressable onPress={onPress} className="opacity-50">
      <Entypo name={iconName} size={size} color={color} />
    </Pressable>
  );
};
