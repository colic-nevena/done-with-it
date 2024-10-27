import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import myTheme from "@/constants/NavigationTheme";
import OfflineNotice from "@/components/OfflineNotice";
import { useEffect, useState } from "react";
import AuthContext from "@/auth/Context";
import { User } from "@/model/UserViewModel";
import { useRouter } from "expo-router";
import authStorage from "@/auth/AuthStorage";
import logger from "../utils/Logger"

logger.start()

export default function RootLayout() {
  const [user, setUser] = useState<User>({ email: "", name: "", userId: -1 })
  const router = useRouter();

  useEffect(() => {
    restoreUser()
  }, [])

  useEffect(() => {
    if (user.email) {
      router.replace({ pathname: "/home" });
    } else {
      router.replace({ pathname: "/(auth)" });
    }
  }, [user.email]);

  const restoreUser = async () => {
    const user = await authStorage.getUser()
    if (user) setUser(user as User)
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <ThemeProvider value={myTheme}>
        <OfflineNotice />
        <Stack>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="home" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}
