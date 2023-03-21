import { SessionIndicator } from "./SessionIndicator";
import { ActionButton } from "./ui/ActionButton";
import { ArrowLeft } from "./ui/ArrowLeft";
import { ArrowRight } from "./ui/ArrowRight";
import { Button } from "./ui/Button";
import { GlobalStyles } from "@/constants/colors";
import { EnumStatus } from "@/types/timer";
import { AntDesign } from "@expo/vector-icons";
import clx from "clsx";
import { useRef, useState } from "react";
import { Text, View } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

const flowDuration = 5;
const sessionCount = 3;
const breakDuration = 10;
const isSmallIndicator = sessionCount > 7;

export const Timer = () => {
  const [isAction, setIsAction] = useState(false);
  const [status, setStatus] = useState<EnumStatus>(EnumStatus.WORK);
  const [curSession, setCurSession] = useState(1);
  const [curBreak, setCurBreak] = useState(0);
  const [key, setKey] = useState(0);

  const confettiRef = useRef<ConfettiCannon>(null);

  const isAllSessionsCompleted = curSession === sessionCount;
  const currentDuration = status === EnumStatus.REST ? breakDuration : flowDuration;

  const handlePCircleRev = () => {
    if (curSession !== 1) {
      setCurSession(prev => prev - 1);
      setKey(prev => prev - 1);
      if (curSession % 2) {
        setCurBreak(prev => prev - 1);
      }
    }
  };
  const handleCircleNext = () => {
    if (curSession !== sessionCount + 1) {
      setCurSession(prev => prev + 1);
      setKey(prev => prev + 1);
      setIsAction(false);
    }
  };

  const handleReset = () => {
    setKey(0);
    setIsAction(false);
    setCurSession(1);
    setStatus(EnumStatus.WORK);
  };

  return (
    <View className="flex-1 justify-center">
      <ConfettiCannon ref={confettiRef} autoStart={false} count={200} origin={{ x: 0, y: 0 }} />
      <Button onPress={handleReset} iconName="ccw" className="bg-transparent self-end" />
      <View className="self-center items-center">
        <CountdownCircleTimer
          key={key}
          isPlaying={isAction}
          duration={currentDuration}
          colors={["#3a4570", "#664ff3"]}
          colorsTime={[currentDuration, 0]}
          trailColor="#2f2f4c"
          onComplete={() => {
            setIsAction(false);

            if (isAllSessionsCompleted) {
              confettiRef.current?.start();
              setStatus(EnumStatus.COMPLETED);
            }
            setKey(prev => prev + 1);

            if (curSession % 2 === 0) {
              setStatus(EnumStatus.REST);
              setCurBreak(prev => prev + 1);
            } else {
              setCurSession(prev => prev + 1);
            }
            if (status === EnumStatus.REST) {
              setStatus(EnumStatus.WORK);
              setCurSession(prev => prev + 1);
            }
          }}
          size={300}
          strokeWidth={5}
        >
          {({ remainingTime }) => {
            let minutes: string | number;
            let seconds: string | number;

            if (status === EnumStatus.REST) {
              minutes = Math.floor(remainingTime / 60);
              seconds = remainingTime % 60;
            } else {
              minutes = Math.floor(remainingTime / 60);
              seconds = remainingTime % 60;
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

        <SessionIndicator status={status} sessionCount={sessionCount} isSmallIndicator={isSmallIndicator} curSession={curSession} />
      </View>
      <View className="flex-row  mt-10 justify-center items-center">
        <ArrowLeft iconName="chevron-left" size={38} onPress={handlePCircleRev} color={GlobalStyles.primary} />
        <ActionButton isPlaying={isAction} onPress={() => setIsAction(!isAction)} iconName={!isAction ? "play" : "pause"} color="white" />
        <ArrowRight iconName="chevron-right" size={38} onPress={handleCircleNext} color={GlobalStyles.primary} />
      </View>
    </View>
  );
};
