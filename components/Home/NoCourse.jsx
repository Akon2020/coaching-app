import { View, Text, Image } from "react-native";
import React from "react";
import Button from "../Shared/Button";
import { useRouter } from "expo-router";

export default function NoCourse() {
  const router = useRouter();
  return (
    <View style={{ marginTop: 40, display: "flex", alignItems: "center" }}>
      <Image
        source={require("./../../assets/images/book.jpg")}
        style={{ height: 300, width: 350, objectFit: "contain" }}
      />
      <Text
        style={{ fontFamily: "outfit-bold", fontSize: 23, textAlign: "center" }}
      >
        Vous n'avez pas encore de cours
      </Text>
      <Button
        text={"+ Créez un nouveau cours"}
        onPress={() => router.push("ajoutCours")}
      />
      <Button text={"Explorer les cours existants"} type="outline" />
    </View>
  );
}
