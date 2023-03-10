import { ActionButton } from "./ui/ActionButton";
import { EnumStatus } from "@/types/timer";
import clx from "clsx";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

export const Timer = () => {
  const [isAction, setIsAction] = useState(false);
  const [status, setStatus] = useState<EnumStatus>(EnumStatus.REST);
  const [curSession, setCurSession] = useState(1);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isAction && status === EnumStatus.REST) {
      setKey(prev => prev + 1);
    }
  }, [isAction]);

  const flowDuration = 5;
  const sessionCount = 2;
  const breakDuration = 1 * 60;
  const isAllSessionsCompleted = curSession === sessionCount;

  return (
    <View className="flex-1 justify-center">
      <View className="self-center">
        <CountdownCircleTimer
          key={key}
          isPlaying={isAction}
          duration={flowDuration}
          colors={["#3a4570", "#664ff3"]}
          colorsTime={[flowDuration, 0]}
          trailColor="#2f2f4c"
          onComplete={() => {
            setIsAction(false);
            setCurSession(prev => prev + 1);
            setStatus(EnumStatus.REST);

            if (isAllSessionsCompleted) {
              // Animation
              setStatus(EnumStatus.COMPLETED);
            }
          }}
          size={300}
          strokeWidth={2}
          onUpdate={remainingTime => {
            if (!!remainingTime) setStatus(EnumStatus.WORK);
          }}
        >
          {({ remainingTime }) => {
            let minutes: string | number = Math.floor(remainingTime / 60);
            let seconds: string | number = remainingTime % 60;

            if (status === EnumStatus.REST) {
              minutes = Math.floor(flowDuration / 60);
              seconds = flowDuration % 60;
            }

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            return (
              <View>
                <Text className="text-white text-6xl font-semibold">
                  {minutes}:{seconds}
                </Text>
                <Text className="text-center text-[22px] text-white mt-2">{status.toUpperCase()}</Text>
              </View>
            );
          }}
        </CountdownCircleTimer>

        <View className="mt-14 flex-row justify-center">
          {Array.from(Array(sessionCount)).map((_, index) => (
            <View className="flex-row items-center justify-center" key={`point ${index}`}>
              <View
                className={clx(
                  "w-5 h-5 rounded-full border-[5px]",
                  index + 1 === curSession ? "border-[#664efe] bg-transparent w-7 h-7" : "border-transparent bg-[#2c2b3c]",
                  {
                    "bg-primary opacity-70": index + 1 <= curSession && index + 1 !== curSession,
                  }
                )}
              />
              {index + 1 !== sessionCount && <View className={`${index + 1 < curSession ? "bg-primary opacity-70" : "bg-[#2c2b3c]"} w-5 h-0.5`} />}
            </View>
          ))}
        </View>
      </View>
      <ActionButton isPlaying={isAction} onPress={() => setIsAction(!isAction)} iconName={!isAction ? "play" : "pause"} color="white" />
    </View>
  );
};
