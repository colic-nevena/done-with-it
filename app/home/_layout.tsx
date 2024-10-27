import { Stack } from "expo-router";

export default function HomeLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="details/listing-details" options={{ title: "" }} />
            <Stack.Screen name="messages/index" options={{ title: "Messages" }} />
        </Stack>
    );
}
