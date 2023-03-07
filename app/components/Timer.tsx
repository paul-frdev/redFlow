import { ActionButton } from "./ui/ActionButton";
import { useState } from "react";
import { Text, View } from "react-native";

export const Timer = () => {
  const [isAction, setIsAction] = useState(true);
  return (
    <View>
      <Text>Timer</Text>
      <ActionButton onPress={() => setIsAction(!isAction)} iconName={!isAction ? "pause" : "play"} color="white" />
    </View>
  );
};
