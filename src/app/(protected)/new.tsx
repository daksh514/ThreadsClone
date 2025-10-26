import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { SafeAreaView } from "react-native-safe-area-context";
const NewPost = () => {
  const [text, setText] = useState("");
  return (
    <SafeAreaView className="p-4 flex-1" edges={["bottom"]}>
      <KeyboardAwareScrollView
        className="flex-1 "
        contentContainerStyle={{ flex: 1 }}
        enableOnAndroid={true}
      >
        <Text className="text-white text-lg font-bold">username</Text>

        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="What is on your mind?"
          placeholderTextColor={"#919191"}
          className="text-white text-lg"
          multiline
          numberOfLines={4}
        />

        <View className="mt-auto">
          <Pressable
            onPress={() => console.log("post: " + text)}
            className="bg-white p-3 px-6 self-end rounded-full"
          >
            <Text className="font-bold">Post</Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default NewPost;
