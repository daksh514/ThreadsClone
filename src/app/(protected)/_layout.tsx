import { useAuth } from "@/providers/AuthProviders";
import { Redirect, Stack } from "expo-router";

const ProtectedLayout = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Redirect href="/login" />;
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="new"
        options={{ presentation: "modal", animation: "slide_from_bottom" }}
      />
    </Stack>
  );
};

export default ProtectedLayout;
