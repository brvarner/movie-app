import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ActorFlatlist from "../../components/actor/actorFlatlist";
import { getActors } from "../../functions/apiFetcherFunctions";
import React from "react";
import { useState, useEffect } from "react";

export default function ActorsScreen({ navigation }) {
  const [actorList, setActorList] = useState(null);

  useEffect(() => {
    const actorGrab = async () => {
      let actors = await getActors();
      setActorList(actors);
    };
    actorGrab();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>See All Your Favorite Actors Here</Text>
      {actorList ? (
        <ActorFlatlist data={actorList?.results} />
      ) : (
        <View style={{ backgroundColor: "pink", flex: 1 }}></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 500,
    top: "5%",
  },
});
