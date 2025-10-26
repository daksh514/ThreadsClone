import { View, Text } from "react-native";
import React from "react";
import { supabase } from "@/lib/supabase";

const Profile = () => {
  return (
    <View>
      <Text
        onPress={() => supabase.auth.signOut()}
        className="text-2xl text-white"
      >
        sign Out
      </Text>
    </View>
  );
};

export default Profile;
