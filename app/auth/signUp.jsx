import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState } from "react";
import Colors from "./../../constant/Colors";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { UserDetailContext } from "../../context/UserDetailContext";

export default function SignUp() {
  const router = useRouter();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [loading, setLoading] = useState(false);

  const createNewAccount = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        const user = res.user;
        console.log(user);
        await saveUser(user);
        setLoading(false);
      })
      .catch((e) => {
        consle.log(e.message);
        setLoading(false);
      });
    console.log("Pressed");
  };

  const saveUser = async (user) => {
    const data = { nom: fullName, email: email, membre: false, uid: user?.uid };
    await setDoc(doc(db, "users", email), data);
    setUserDetail(data);
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
        disabled={loading}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          width: "100%",
          marginTop: 25,
          borderRadius: 5,
        }}
      >
        {!loading ? (
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
        ) : (
          <ActivityIndicator size={"large"} color={Colors.SECOND} />
        )}
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
