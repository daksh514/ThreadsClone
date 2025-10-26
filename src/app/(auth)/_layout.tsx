import { useAuth } from "@/providers/AuthProviders";
import { Redirect, Stack } from "expo-router";

const AuthLayout = () => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) return <Redirect href="/(protected)" />;
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
