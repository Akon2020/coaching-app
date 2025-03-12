import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../constant/Colors";
import Button from "../../components/Shared/Button";
import { GenerateTopicsAIModel } from "../../config/AiModel";
import Prompt from "../../constant/Prompt";

export default function AjoutCours() {
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState();
  const [topics, setTopics] = useState([]);
  const [choisirPoint, setChoisirPoint] = useState([]);

  const genererSujet = async () => {
    try {
      setLoading(true);
      const PROMPT = userInput + Prompt.IDEA;
      const aiResponse = await GenerateTopicsAIModel.sendMessage(PROMPT);

      if (!aiResponse || !aiResponse.response) {
        throw new Error("Réponse API invalide");
      }

      const topicIdea = await JSON.parse(aiResponse.response.text());
      console.log(topicIdea);
      setTopics(topicIdea?.course_title);
    } catch (error) {
      console.error("Erreur lors de la génération du sujet :", error);
    } finally {
      setLoading(false);
    }
  };

  const sujetChoisi = (topic) => {
    const choix = choisirPoint.find((item) => item == topic);
    if (!choix) {
      setChoisirPoint((prev) => [...prev, topic]);
    } else {
      const topics = choisirPoint.filter((item) => item !== topic);
      setChoisirPoint(topics);
    }
  };

  const isChoisi = (topic) => {
    const selection = choisirPoint.find((item) => item == topic);
    return selection ? true : false;
  };

  return (
    <View style={{ padding: 25, backgroundColor: Colors.WHITE }}>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 23 }}>
        Créer un nouveau cours
      </Text>
      <Text style={{ fontFamily: "outfit", fontSize: 14 }}>
        Que voulez-vous apprendre aujourd'hui?
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 14,
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
        onChangeText={(value) => setUserInput(value)}
      />
      <Button
        text={"Générer les chapitres du cours"}
        type="fill"
        onPress={() => genererSujet()}
        loading={loading}
      />
      <View style={{ marginTop: 15 }}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 14 }}>
          Selectionnez tout les points que vous voulez inclure dans ce cours
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <ScrollView style={styles.scrollContainer}>
            {topics.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => sujetChoisi(item)}
                style={{ paddingBottom: 10 }}
              >
                <Text
                  style={{
                    padding: 7,
                    borderWidth: 0.4,
                    borderRadius: 99,
                    fontSize: 14,
                    paddingHorizontal: 15,
                    marginTop: 6,
                    backgroundColor: isChoisi(item) ? Colors.SECOND : null,
                    color: isChoisi(item) ? Colors.PRIMARY : Colors.BLACK,
                  }}
                >
                  {item}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
          {choisirPoint?.lenght > 0 && (
            <Button
              text={"Générer le cours"}
              type="outline"
              onPress={() => genererCours()}
              loading={loading}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    height: 80,
    marginTop: 10,
    alignItems: "flex-start",
    fontSize: 16,
  },
  scrollContainer: {
    maxHeight: 320,
    marginTop: 10,
    paddingBottom: 10,
  },
});
