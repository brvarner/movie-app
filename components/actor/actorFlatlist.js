import { View, FlatList, StyleSheet, Text } from "react-native";
import ActorRenderItem from "./actorRenderItem";

export default function ActorFlatlist({ data }) {
  return (
    <View style={styles.flatListContainer}>
      {data ? (
        <FlatList
          data={data}
          renderItem={({ item }) => <ActorRenderItem item={item} />}
          keyExtractor={(item) => item.nconst}
          style={styles.FlatList}
          numColumns={3}
        />
      ) : (
        <View style={{ backgroundColor: "pink", height: 10 }}></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  FlatList: {
    backgroundColor: "red",
    flex: 1,
  },
  flatListContainer: {
    flex: 1,
    top: 50,
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
});
