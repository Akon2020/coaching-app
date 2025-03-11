import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../constant/Colors";

export default function Button({ text, type = "fill", onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 15,
        width: "100%",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        marginTop: 30,
        backgroundColor: type == "fill" ? Colors.PRIMARY : Colors.SECOND,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontFamily: "outfit",
          fontSize: 18,
          color: type == "fill" ? Colors.SECOND : Colors.PRIMARY,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
