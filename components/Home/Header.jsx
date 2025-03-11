import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { UserDetailContext } from "./../../context/UserDetailContext";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Header() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 23 }}>
          Salut 👋 {userDetail?.nom}
        </Text>
        <Text style={{ fontFamily: "outfit", fontSize: 15 }}>
          Commençons notre aventure
        </Text>
      </View>
      <TouchableOpacity>
        <Ionicons name="settings-outline" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
}
