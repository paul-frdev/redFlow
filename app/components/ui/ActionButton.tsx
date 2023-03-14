import { GlobalStyles } from "@/constants/colors";
import { Foundation } from "@expo/vector-icons";
import { FC } from "react";
import { Pressable, Text } from "react-native";

interface IActionButtonProps {
  iconName: keyof typeof Foundation.glyphMap;
  color?: string;
  onPress: () => void;
  isPlaying: boolean;
}
export const ActionButton: FC<IActionButtonProps> = ({ iconName, color, onPress, isPlaying }) => {
  return (
    <Pressable
      onPress={onPress}
      className={`${!isPlaying ? "pl-1" : "pl-0"} mx-10 bg-primary rounded-full w-[65px] h-[65px] justify-center items-center self-center`}
      style={{
        shadowColor: GlobalStyles.primary,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.6,
        shadowRadius: 8,

        elevation: 20,
      }}
    >
      <Foundation name={iconName} color={color} size={38} />
    </Pressable>
  );
};
