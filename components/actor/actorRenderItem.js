import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function ActorRenderItem({ item }) {
  return (
    <TouchableOpacity style={styles.actorCard}>
      <Text>{item?.primaryName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  actorCard: {
    height: 150,
    width: 100,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
    margin: 3,
    borderRadius: 10,
  },
});
