import { LoginForm } from "@/components/forms/LoginForm";
import { validEmail } from "@/components/forms/email.rgx";
import { Button } from "@/components/ui/Button";
import { Loader } from "@/components/ui/Loader";
import useAuth from "@/hooks/useAuth";
import { IAuthFormData } from "@/types/auth";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Keyboard, Pressable, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";

export const AuthScreen = () => {
  const [isReg, setIsReg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { control, reset, handleSubmit } = useForm<IAuthFormData>({
    mode: "onChange",
  });
  const { setUser } = useAuth();

  const onSubmit: SubmitHandler<IAuthFormData> = data => {
    setUser({
      id: "sddsd",
      ...data,
    });
    reset();
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="items-center justify-center flex-1">
        <View className="w-3/4">
          <Text className="text-white text-4xl font-bold text-center mb-5">{isReg ? "Sign up" : "Sign in"}</Text>

          {isLoading ? (
            <Loader />
          ) : (
            <>
              <LoginForm control={control} />
              <Button onPress={handleSubmit(onSubmit)}>Let's go</Button>

              <Pressable onPress={() => setIsReg(!isReg)} className="w-16 self-end">
                <Text className="text-white text-opacity-60 text-base mt-3 text-right">{isReg ? "Login" : "Register"}</Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
