import { FC, PropsWithChildren } from "react";
import { Platform, SafeAreaView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const MainLayout: FC<PropsWithChildren<{ title?: string }>> = ({ children, title }) => {
  const { top } = useSafeAreaInsets();
  return (
    <SafeAreaView className="flex-1 w-full">
      <View className={`mb-8 px-6`} style={{ top: Platform.OS === "ios" ? top / 5 : top * 1.6 }}>
        {title && <Text className="text-3xl text-center text-white fond-semibold">{title}</Text>}
      </View>
      <View className=" w-full items-center">
        <Text>{children}</Text>
      </View>
    </SafeAreaView>
  );
};
