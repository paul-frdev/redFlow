import { ActionButton } from "./ui/ActionButton";
import { EnumStatus } from "@/types/timer";
import { useState } from "react";
import { Text, View } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

export const Timer = () => {
  const [isAction, setIsAction] = useState(false);
  const [status, setStatus] = useState<EnumStatus>(EnumStatus.REST);
  const [curSession, setCurSession] = useState(6);

  const flowDuration = 1 * 60;
  const sessionCount = 7;
  const breakDuration = 1 * 60;
  return (
    <View className="flex-1 justify-center">
      <View className="self-center">
        <CountdownCircleTimer
          isPlaying={isAction}
          duration={flowDuration}
          colors={["#3a4570", "#664ff3"]}
          colorsTime={[7, 0]}
          trailColor="#2f2f4c"
          onComplete={() => setIsAction(false)}
          size={300}
          strokeWidth={2}
        >
          {({ remainingTime }) => {
            let minutes: string | number = Math.floor(remainingTime / 60);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            let seconds: string | number = remainingTime % 60;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            return (
              <View>
                <Text className="text-white text-6xl font-semibold">
                  {minutes}:{seconds}
                </Text>
                <Text className="text-center text-[22px] text-white mt-2">{status === EnumStatus.WORK ? "HARD WORK" : "REST"}</Text>
              </View>
            );
          }}
        </CountdownCircleTimer>

        <View className="mt-14 flex-row justify-center">
          {Array.from(Array(sessionCount)).map((_, index) => (
            <View className="flex-row items-center justify-center" key={`point ${index}`}>
              <View className={`${index + 1 <= curSession ? "bg-primary opacity-70" : "bg-[#2c2b3c]"} w-4 h-4 opacity-75 rounded-full`} />
              {index + 1 !== sessionCount && <View className={`${index + 1 < curSession ? "bg-primary opacity-70" : "bg-[#2c2b3c]"} w-6 h-0.5`} />}
            </View>
          ))}
        </View>
      </View>
      <ActionButton isPlaying={isAction} onPress={() => setIsAction(!isAction)} iconName={!isAction ? "play" : "pause"} color="white" />
    </View>
  );
};
