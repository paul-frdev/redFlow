import Navigation from "./app/navigation/Navigation";
import AuthProvider from "./app/providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

const queryCLient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryCLient}>
      <AuthProvider>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <Navigation />
        </SafeAreaProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
