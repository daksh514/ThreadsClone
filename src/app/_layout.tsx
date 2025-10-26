import { Slot } from "expo-router";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { AuthProvider } from "@/providers/AuthProviders";
import "../../global.css";

const appTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "white",
    card: "#101010",
  },
};

const RootLayout = () => {
  return (
    <ThemeProvider value={appTheme}>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
