import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import Colors from "./../../constant/Colors";
import { useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        paddingTop: 50,
        flex: 1,
        padding: 15,
        backgroundColor: Colors.WHITE,
      }}
    >
      <Image
        source={require("./../../assets/images/logo.png")}
        style={{ width: 180, height: 180 }}
      />
      <Text
        style={{
          fontFamily: "outfit-bold",
          color: Colors.SECOND,
          fontSize: 23,
        }}
      >
        Connectez-vous à votre compte
      </Text>
      <TextInput placeholder="Votre Adresse Mail" style={styles.textInput} />
      <TextInput
        placeholder="Votre Mot de passe"
        secureTextEntry={true}
        style={styles.textInput}
      />
      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          width: "100%",
          marginTop: 25,
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 19,
            textAlign: "center",
            color: Colors.SECOND,
          }}
        >
          Connexion
        </Text>
      </TouchableOpacity>

      <View
        style={{ display: "flex", flexDirection: "row", gap: 5, marginTop: 20 }}
      >
        <Text style={{ fontFamily: "outfit" }}>Vous êtes nouveau ici?</Text>
        <Pressable onPress={() => router.push("/auth/signUp")}>
          <Text style={{ color: Colors.PRIMARY, fontFamily: "outfit-bold" }}>
            Inscrivez-vous
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    width: "100%",
    borderRadius: 5,
    padding: 15,
    fontSize: 15,
    marginTop: 20,
  },
});
