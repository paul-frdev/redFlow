import { validEmail } from "./email.rgx";
import { IAuthFormData } from "@/types/auth";
import { FC } from "react";
import { Control, Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

interface ILoginFormProps {}
export const LoginForm: FC<{ control: Control<IAuthFormData> }> = ({ control }) => {
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: "Email is required",
          pattern: { value: validEmail, message: "Your email is invalid" },
        }}
        name="email"
        render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
          <>
            <View className={`${error ? "border-red-500" : "border-transparent"} rounded-sm border pb-5 pt-2 px-4 my-2 rounded bg-[#272541]`}>
              <TextInput
                autoCapitalize="none"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Enter email"
                className="text-white text-lg"
              />
            </View>
            {error && <Text className="text-red-500">{error.message}</Text>}
          </>
        )}
      />
      <Controller
        control={control}
        rules={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password at least 6 characters",
          },
        }}
        name="password"
        render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
          <>
            <View className={`${error ? "border-red-500" : "border-transparent"} rounded-sm border pb-5 pt-2 px-4 my-2 rounded bg-[#272541]`}>
              <TextInput
                autoCapitalize="none"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Enter password"
                className="text-white text-lg"
                secureTextEntry
              />
            </View>
            {error && <Text className="text-red-500">{error.message}</Text>}
          </>
        )}
      />
    </>
  );
};
