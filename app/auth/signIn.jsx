import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState } from "react";
import Colors from "./../../constant/Colors";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { UserDetailContext } from "../../context/UserDetailContext";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        const user = res.user;
        console.log(user);
        await getUserDetail();
        setLoading(false);
        router.replace("/(tabs)/home");
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        ToastAndroid.show(
          "Email ou Mot de passe incorect",
          ToastAndroid.BOTTOM
        );
      });
  };
  const getUserDetail = async () => {
    const resultat = await getDoc(doc(db, "users", email));
    console.log(resultat.data());
    setUserDetail(resultat.data());
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
          fontSize: 23,
        }}
      >
        Connectez-vous à votre compte
      </Text>
      <TextInput
        placeholder="Votre Adresse Mail"
        onChangeText={(value) => {
          setEmail(value);
        }}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Votre Mot de passe"
        onChangeText={(value) => {
          setPassword(value);
        }}
        secureTextEntry={true}
        style={styles.textInput}
      />
      <TouchableOpacity
        onPress={login}
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
            Connexion
          </Text>
        ) : (
          <ActivityIndicator size={"large"} color={Colors.SECOND} />
        )}
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
