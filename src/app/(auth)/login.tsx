import { View, Text, TextInput, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { supabase } from "../../lib/supabase";

import { useRouter } from "expo-router";
import { supabase } from "@/lib/supabase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setLoading(true);
    // try {
    //   const { error } = await supabase.auth.signInWithPassword({
    //     email,
    //     password,
    //   });

    //   if (error) {
    //     Alert.alert("Error", error.message);
    //   } else {
    //     router.replace("/(protected)/(tabs)");
    //   }
    // } catch (error) {
    //   Alert.alert("Error", "An unexpected error occurred");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <KeyboardAwareScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        enableOnAndroid={true}
      >
        <View className="flex-1 justify-center px-6">
          <Text className="text-white text-3xl font-bold mb-2">
            Welcome back
          </Text>
          <Text className="text-gray-400 text-base mb-8">
            Sign in to your account
          </Text>

          <View className="mb-4">
            <Text className="text-white text-sm mb-2">Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor="#6b7280"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-white"
            />
          </View>

          <View className="mb-6">
            <Text className="text-white text-sm mb-2">Password</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              placeholderTextColor="#6b7280"
              secureTextEntry
              className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-white"
            />
          </View>

          <Pressable
            onPress={handleLogin}
            disabled={loading}
            className="bg-white py-4 rounded-lg mb-4 disabled:opacity-50"
          >
            <Text className="text-black text-center font-semibold text-base">
              {loading ? "Signing in..." : "Sign in"}
            </Text>
          </Pressable>

          <View className="flex-row justify-center items-center">
            <Text className="text-gray-400 mr-1">Don't have an account?</Text>
            <Pressable onPress={() => router.push("/(auth)/signup")}>
              <Text className="text-white font-semibold">Create one</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
