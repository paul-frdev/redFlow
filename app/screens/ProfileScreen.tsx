import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/Button";
import useAuth from "@/hooks/useAuth";
import { View } from "react-native";

export const ProfileScreen = () => {
  const { setUser } = useAuth();
  return (
    <MainLayout title="Profile">
      <View className="w-full">
        <Button onPress={() => setUser(null)}>Log out</Button>
      </View>
    </MainLayout>
  );
};
