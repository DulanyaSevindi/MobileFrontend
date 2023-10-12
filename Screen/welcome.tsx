import { View, Text, Image, Button } from "react-native";
import React from "react";
const logoImag = require("../assets/bus.png");

export default function Welcome() {
  return (
    <View style={{ flex: 1, backgroundColor: "#BDEDFF", padding: 60 }}>
      <Text>
        <Text style={{ color: "white" }}>Dulanya</Text>World
      </Text>
      <Image source={logoImag} style={{ width: 300, height: 300 }} />
      <Button title="LOGIN" />
    </View>
  );
}
