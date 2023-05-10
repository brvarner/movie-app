import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Actors")}>
        <Text>See All Actors</Text>
      </TouchableOpacity>
    </View>
  );
}
