import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "./../constant/Colors";
import { useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useContext } from "react";
import { UserDetailContext } from "@/context/UserDetailContext";

export default function Index() {
  const router = useRouter();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      console.log(user);
      const resultat = await getDoc(doc(db, "users", user?.email));
      setUserDetail(resultat.data());
      router.replace("/(tabs)/home");
    }
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.WHITE,
      }}
    >
      <Image
        source={require("./../assets/images/landing.png")}
        style={{ width: "100%", height: 350, marginTop: 70 }}
      />
      <View
        style={{
          padding: 25,
          backgroundColor: Colors.PRIMARY,
          height: "100%",
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            color: Colors.SECOND,
            marginTop: 5,
            fontFamily: "outfit-bold",
          }}
        >
          Bienvenue dans Coaching App
        </Text>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            color: Colors.SECOND,
            marginTop: 10,
            fontFamily: "outfit",
          }}
        >
          Transformez vos idées en contenu educationnel basé sur vos engagement
          avec l'IA 📚📕📖
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/auth/signUp")}
          style={styles.button}
        >
          <Text
            style={[
              styles.buttonText,
              { color: Colors.WHITE, fontWeight: "bold" },
            ]}
          >
            Commençons
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/auth/signIn")}
          style={[
            styles.button,
            {
              backgroundColor: Colors.PRIMARY,
              borderWidth: 2,
              borderColor: Colors.SECOND,
            },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              { color: Colors.SECOND, fontWeight: "bold" },
            ]}
          >
            Vous avez déjà un compte ?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    marginTop: 20,
    backgroundColor: Colors.SECOND,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "outfit",
  },
});
