import { Feather } from "@expo/vector-icons";
import { FC } from "react";
import { Pressable, Text } from "react-native";

interface IActionButtonProps {
  iconName: keyof typeof Feather.glyphMap;
  color?: string;
  onPress: () => void;
}
export const ActionButton: FC<IActionButtonProps> = ({ iconName, color, onPress }) => {
  return (
    <Pressable onPress={onPress} className="bg-primary rounded-full w-[70px] h-[70px] justify-center items-center">
      <Feather name={iconName} color={color} size={38} />
    </Pressable>
  );
};
