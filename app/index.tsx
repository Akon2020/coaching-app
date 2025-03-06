import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "./../constant/Colors";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.WHITE,
      }}
    >
      <Image
        source={require("./../assets/images/landing.png")}
        style={{ width: "100%", height: 300, marginTop: 70 }}
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
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            color: Colors.WHITE,
            marginTop: 25
          }}
        >
          Bienvenue dans Coaching App
        </Text>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            color: Colors.WHITE,
            marginTop: 10
          }}
        >
          Transformez vos idées en contenu educationnel basé sur vos engagement
          avec l'IA 📚📕📖
        </Text>

        <View style={styles.button}>
          <Text style={[styles.buttonText, { color: Colors.PRIMARY, fontWeight: 'bold' }]}>
            Commençons
          </Text>
        </View>

        <View
          style={[
            styles.button,
            {
              backgroundColor: Colors.PRIMARY,
              borderWidth: 1,
              borderColor: Colors.WHITE,
            },
          ]}
        >
          <Text style={styles.buttonText}>Vous avez déjà un compte ?</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    marginTop: 20,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
  },
});
