import { Slot } from "expo-router";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
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
      <Slot />
    </ThemeProvider>
  );
};

export default RootLayout;
