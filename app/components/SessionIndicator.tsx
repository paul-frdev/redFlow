import { EnumStatus } from "@/types/timer";
import { AntDesign } from "@expo/vector-icons";
import clx from "clsx";
import { FC } from "react";
import { View } from "react-native";

interface SessionIndicatorProps {
  sessionCount: number;
  isSmallIndicator: boolean;
  curSession: number;
  status: EnumStatus;
}
export const SessionIndicator: FC<SessionIndicatorProps> = ({ status, curSession, isSmallIndicator, sessionCount }) => {
  return (
    <View className="mt-14 flex-row justify-center">
      {Array.from(Array(sessionCount)).map((_, index) => (
        <View className="flex-row items-center justify-center" key={`point ${index}`}>
          <View
            className={clx(
              "rounded-full border-[4px]",
              isSmallIndicator ? "w-4 h-4" : " w-5 h-5",
              index + 1 === curSession ? "border-[#664efe] bg-transparent w-6 h-6" : "border-transparent bg-[#2c2b3c]",
              {
                "bg-primary opacity-70": index + 1 <= curSession && index + 1 !== curSession,
              }
            )}
          />
          {index + 1 !== sessionCount && (
            <View className="relative">
              {index % 2 !== 0 && index + 1 !== sessionCount && (
                <View className={`absolute bottom-5 w-8 h-auto ${sessionCount > 7 ? "left-[-5px]" : "left-[-2px]"}`}>
                  <AntDesign
                    className="z-10"
                    style={{ opacity: curSession === index + 1 ? 1 : 0.5 }}
                    name="rest"
                    color={index + 1 === curSession && status === EnumStatus.REST ? "#664efe" : "#2c2b3c"}
                    size={30}
                  />
                </View>
              )}
              <View
                className={clx("w-5 h-0.5", index + 1 < curSession ? "bg-primary opacity-70" : "bg-[#2c2b3c]", isSmallIndicator ? "w-3" : "w-5")}
              />
            </View>
          )}
        </View>
      ))}
    </View>
  );
};
