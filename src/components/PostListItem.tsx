import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Post } from "@/types";
import { FontAwesome6 } from "@expo/vector-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const PostListItem = ({ post }: { post: Post }) => {
  // Format timestamp (you can enhance this with a proper date library)
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / 60000);

    if (diffInMinutes < 60) return `${diffInMinutes}m`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h`;
    return date.toLocaleDateString();
  };

  return (
    <View className="flex-row px-4 py-3 border-b border-gray-800/70 bg-black">
      {/* Profile Image */}
      <View className="mr-3">
        <Image
          source={{ uri: post.user.image }}
          className="w-12 h-12 rounded-full"
        />
      </View>

      {/* Post Content */}
      <View className="flex-1">
        {/* Header: Name, Username, Time */}
        <View className="flex-row items-center mb-1">
          <Text className="text-white font-semibold mr-2">
            {post.user.name}
          </Text>

          <Text className="text-gray-500 ml-2">
            {dayjs(post.createdAt).fromNow()}
          </Text>
        </View>

        {/* Post Content */}
        <Text className="text-white text-base mb-3 leading-6">
          {post.content}
        </Text>

        {/* Engagement Buttons */}
        <View className="flex-row items-center gap-4 px-4">
          {/* Reply */}
          <TouchableOpacity className="flex-row items-center">
            <FontAwesome6 name="comment" size={16} color="#6b7280" />
            <Text className="text-gray-500 ml-2 text-sm">12</Text>
          </TouchableOpacity>

          {/* Repost */}
          <TouchableOpacity className="flex-row items-center">
            <FontAwesome6 name="retweet" size={16} color="#6b7280" />
            <Text className="text-gray-500 ml-2 text-sm">4</Text>
          </TouchableOpacity>

          {/* Like */}
          <TouchableOpacity className="flex-row items-center">
            <FontAwesome6 name="heart" size={16} color="#6b7280" />
            <Text className="text-gray-500 ml-2 text-sm">89</Text>
          </TouchableOpacity>

          {/* Share */}
          <TouchableOpacity className="flex-row items-center">
            <FontAwesome6 name="share" size={16} color="#6b7280" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PostListItem;
