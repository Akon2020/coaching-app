import { View, Text, Image } from "react-native";
import React from "react";
import Button from "../Shared/Button";

export default function NoCourse() {
  return (
    <View style={{ marginTop: 40, display: "flex", alignItems: "center" }}>
      <Image
        source={require("./../../assets/images/book.png")}
        style={{ height: 300, width: 200 }}
      />
      <Text
        style={{ fontFamily: "outfit-bold", fontSize: 23, textAlign: "center" }}
      >
        Vous n'avez pas encore de cours
      </Text>
      <Button text={"+ Créez un nouveau cours"} />
      <Button text={"Explorer les cours existants"} type="outline" />
    </View>
  );
}
