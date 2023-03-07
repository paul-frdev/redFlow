import { FC, PropsWithChildren } from "react";
import { Pressable, PressableProps, Text } from "react-native";

interface IButton extends PressableProps {}
export const Button: FC<PropsWithChildren<IButton>> = ({ children, className, ...rest }) => {
  return (
    <Pressable className={`${className} self-center mt-4 bg-primary px-8 py-4 rounded-xl`} {...rest}>
      <Text className="font-semibold text-white text-base uppercase">{children}</Text>
    </Pressable>
  );
};
