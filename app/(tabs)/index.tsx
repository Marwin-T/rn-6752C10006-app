import { router } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  //delay 3 seconds before navigating to the register screen
  useEffect(() => {
    setTimeout(() => {
      router.replace("/taxi_fare");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/taxi.png")}
        style={styles.imgTaxi}
        resizeMode="contain"
      />

      <Text style={styles.title}>Taxi Fare Calculator</Text>
      <Text style={styles.subtitle}>คำนวณค่าโดยสารแท็กซี่</Text>

      <ActivityIndicator
        size="large"
        color="#ffbb00"
        style={{ marginVertical: 20 }}
      />

      <View style={styles.profile}>
        <Image
          source={require("../../assets/images/pf.jpg")}
          style={styles.avatar}
        />
        <Text style={styles.fontName}>พัฒนาโดย</Text>
        <Text style={styles.fontName}>6752C10006 Marwin Thakunjiranon</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  imgTaxi: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4a90e2",
    fontFamily: "Kanit_700Bold",
  },
  subtitle: {
    color: "#6aa9ff",
    marginBottom: 10,
    fontFamily: "Kanit_400Regular",
  },
  btnStart: {
    backgroundColor: "#ffbb00",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
  profile: {
    alignItems: "center",
    marginTop: 50,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 5,
  },
  fontName: {
    marginTop: 5,
    fontSize: 12,
    color: "#525050",
    fontFamily: "Kanit_400Regular",
  },
});
