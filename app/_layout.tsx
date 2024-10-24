import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import myTheme from "@/constants/NavigationTheme";

export default function RootLayout() {
  return (
    <ThemeProvider value={myTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
