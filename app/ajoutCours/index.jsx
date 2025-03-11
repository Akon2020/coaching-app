import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Colors from "../../constant/Colors";
import Button from "../../components/Shared/Button";

export default function AjoutCours() {
  const [loading, setLoading] = useState(false);
  const genererSujet = () => {};
  return (
    <View style={{ padding: 25, backgroundColor: Colors.WHITE }}>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 26 }}>
        Créer un nouveau cours
      </Text>
      <Text style={{ fontFamily: "outfit", fontSize: 16 }}>
        Que voulez-vous apprendre aujourd'hui?
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 16,
          marginTop: 10,
          color: Colors.GRAY,
        }}
      >
        Quel cours voulez-vous créer (ex. Apprendre Python, le marketing
        digital, les Sciences appliquées, etc...)
      </Text>
      <TextInput
        placeholder="(Ex. Apprendre Python, Apprendre l'anglais)"
        style={styles.textInput}
        numberOfLines={3}
        multiline={true}
      />
      <Button
        text={"Générer le cours"}
        type="fill"
        onPress={() => genererSujet()}
        loading={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    height: 100,
    marginTop: 10,
    alignItems: "flex-start",
    fontSize: 16,
  },
});
