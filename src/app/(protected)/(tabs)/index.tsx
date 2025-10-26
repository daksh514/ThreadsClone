import { StatusBar } from "expo-status-bar";
import { FlatList, Text, View } from "react-native";
import { dummyPosts } from "@/dummyData";
import PostListItem from "@/components/PostListItem";
import { Link } from "expo-router";
export default function App() {
  return (
    <FlatList
      data={dummyPosts}
      renderItem={({ item }) => <PostListItem post={item} />}
      // ListHeaderComponent={
      //   <View style={{ padding: 16, backgroundColor: "#fff" }}>
      //     <Text style={{ fontSize: 24, fontWeight: "bold" }}>Posts</Text>
      //   </View>
      // }
      ListHeaderComponent={
        <Link href="/new" className="text-blue-500 p-4 text-center text-3xl ">
          New Posts
        </Link>
      }
    />
  );
}
