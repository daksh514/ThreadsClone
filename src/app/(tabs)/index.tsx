import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <Text className="text-red-500 text-2xl font-bold">Feed</Text>
      <StatusBar style="auto" />
    </View>
  );
}
