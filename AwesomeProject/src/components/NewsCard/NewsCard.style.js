import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get("window").height / 4,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  description: {
    marginTop: 3,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  author: {
    fontStyle: "italic",
    textAlign: "right",
  },
  inner_container: {
    padding: 5,
  },
});
