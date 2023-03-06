import { IRoute } from "../types/navigation";
import { HomeScreen } from "@/screens/HomeScreen";
import { ProfileScreen } from "@/screens/ProfileScreen";
import { SettingsScreen } from "@/screens/SettingsScreen";
import { StatisticsScreen } from "@/screens/StatisticsScreen";

export const routes: IRoute[] = [
  { name: "Home", component: HomeScreen },
  { name: "Settings", component: SettingsScreen },
  { name: "Profile", component: ProfileScreen },
  { name: "Statistics", component: StatisticsScreen },
];
