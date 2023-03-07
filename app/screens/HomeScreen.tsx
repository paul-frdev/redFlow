import { Timer } from "@/components/Timer";
import { MainLayout } from "@/components/layout/MainLayout";

export const HomeScreen = () => {
  return (
    <MainLayout title="Home">
      <Timer />
    </MainLayout>
  );
};
