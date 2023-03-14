import { Entypo } from "@expo/vector-icons";
import { FC, PropsWithChildren } from "react";
import { Pressable, PressableProps, Text } from "react-native";

interface IButton extends PressableProps {
  iconName?: keyof typeof Entypo.glyphMap;
  size?: number;
  color?: string;
  onPress?: () => void;
}
export const Button: FC<PropsWithChildren<IButton>> = ({ onPress, iconName, size = 34, color = "#fff", children, className, ...rest }) => {
  return (
    <Pressable onPress={onPress} className={`${className} self-center mt-4 bg-primary px-8 py-4 rounded-xl`} {...rest}>
      {children ? (
        <Text className="font-semibold text-white text-base uppercase">{children}</Text>
      ) : (
        <Entypo name={iconName} size={size} color={color} />
      )}
    </Pressable>
  );
};
