import { Entypo } from "@expo/vector-icons";
import { FC } from "react";
import { Pressable } from "react-native";

interface IArrowRightProps {
  onPress: () => void;
  iconName: keyof typeof Entypo.glyphMap;
  size: number;
  color: string;
}
export const ArrowRight: FC<IArrowRightProps> = ({ onPress, iconName, size, color }) => {
  return (
    <Pressable onPress={onPress} className="opacity-50">
      <Entypo name={iconName} size={size} color={color} />
    </Pressable>
  );
};
