import React from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, FlatList, ScrollView, Dimensions } from "react-native"; // Removed duplicate Image import
import news_data from "./news_data.json";
import NewsCard from "./components/NewsCard";
import news_banner_data from "./news_banner_data.json";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.HeaderText}>News</Text>
        <FlatList
        ListHeaderComponent={() => <ScrollView horizontal showsHorizontalScrollIndicator ={false}>
        {news_banner_data.map(bannerNews => (
          <Image style={styles.banner_image} source={{ uri: bannerNews.imageUrl }} key={bannerNews.id} />
        ))}
      </ScrollView>}
          data={news_data}
          renderItem={({ item }) => <NewsCard news={item} />}
        />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceff1",
  },
  banner_image: {
    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").width / 2,

  },
  HeaderText: {
    fontWeight:"bold",
    fontSize:50,
  },
});

export default App;
