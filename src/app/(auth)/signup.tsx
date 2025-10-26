import { View, Text, TextInput, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { supabase } from "../../lib/supabase";
import { useRouter } from "expo-router";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    // try {
    //   const { error } = await supabase.auth.signUp({
    //     email,
    //     password,
    //   });

    //   if (error) {
    //     Alert.alert("Error", error.message);
    //   } else {
    //     Alert.alert("Success", "Check your email to verify your account!");
    //     router.replace("/(auth)/login");
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
            Create account
          </Text>
          <Text className="text-gray-400 text-base mb-8">
            Sign up to get started
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

          <View className="mb-4">
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

          <View className="mb-6">
            <Text className="text-white text-sm mb-2">Confirm Password</Text>
            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm your password"
              placeholderTextColor="#6b7280"
              secureTextEntry
              className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-white"
            />
          </View>

          <Pressable
            onPress={handleSignup}
            disabled={loading}
            className="bg-white py-4 rounded-lg mb-4 disabled:opacity-50"
          >
            <Text className="text-black text-center font-semibold text-base">
              {loading ? "Creating account..." : "Create account"}
            </Text>
          </Pressable>

          <View className="flex-row justify-center items-center">
            <Text className="text-gray-400 mr-1">Already have an account?</Text>
            <Pressable onPress={() => router.back()}>
              <Text className="text-white font-semibold">Sign in</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Signup;
