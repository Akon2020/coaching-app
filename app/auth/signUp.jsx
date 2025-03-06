import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Colors from "./../../constant/Colors";
import { useRouter } from "expo-router";
// import {createUserWithEmailAndPassword} from "firebase/auth";

export default function SignUp() {
  const router = useRouter();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const createNewAccount = () => {
    console.log("Pressed");
  };

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
          fontSize: 25,
        }}
      >
        Créer un nouveau compte
      </Text>
      <TextInput
        placeholder="Votre Nom Complet"
        onChangeText={(value) => setFullName(value)}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Votre Adresse Mail"
        onChangeText={(value) => setEmail(value)}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Votre Mot de passe"
        onChangeText={(value) => setPassword(value)}
        secureTextEntry={true}
        style={styles.textInput}
      />
      <TouchableOpacity
        onPress={createNewAccount}
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
          Inscription
        </Text>
      </TouchableOpacity>

      <View
        style={{ display: "flex", flexDirection: "row", gap: 5, marginTop: 20 }}
      >
        <Text style={{ fontFamily: "outfit" }}>Vous avez déjà un compte?</Text>
        <Pressable onPress={() => router.push("/auth/signIn")}>
          <Text style={{ color: Colors.PRIMARY, fontFamily: "outfit-bold" }}>
            Connectez-vous
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
