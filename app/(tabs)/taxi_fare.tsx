import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function TaxiFare() {
  const [distance, setDistance] = useState("");
  const [traffic, setTraffic] = useState("");
  const [fare, setFare] = useState(0);

  const calculateFare = () => {
    const km = parseFloat(distance);
    const min = parseFloat(traffic);

    if (isNaN(km) || km <= 0) {
      Alert.alert("แจ้งเตือน", "กรุณากรอกระยะทางให้ถูกต้อง");
      return;
    }

    if (isNaN(min) || min < 0) {
      Alert.alert("แจ้งเตือน", "กรุณากรอกเวลารถติดให้ถูกต้อง");
      return;
    }

    let total = 35;

    if (km > 1) {
      let remaining = km - 1;

      const rates = [
        { limit: 9, rate: 6.5 },
        { limit: 10, rate: 7.0 },
        { limit: 20, rate: 8.0 },
        { limit: 20, rate: 8.5 },
        { limit: 20, rate: 9.0 },
        { limit: Infinity, rate: 10.5 },
      ];

      for (let r of rates) {
        if (remaining <= 0) break;

        const used = Math.min(remaining, r.limit);
        total += used * r.rate;
        remaining -= used;
      }
    }

    total += min * 3;

    setFare(parseFloat(total.toFixed(2)));
  };

  const handleReset = () => {
    setDistance("");
    setTraffic("");
    setFare(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("@/assets/images/taxi.png")}
          style={styles.imgTaxi}
        />

        <Text style={styles.txtTitle}>คำนวณค่าโดยสารแท็กซี่</Text>

        <Text style={styles.label}>ระยะทาง (กิโลเมตร)🛣️</Text>
        <TextInput
          style={styles.input}
          placeholder="กรุณากรอกระยะทาง"
          keyboardType="numeric"
          value={distance}
          onChangeText={setDistance}
        />

        <Text style={styles.label}>เวลารถติด (นาที)⏰</Text>
        <TextInput
          style={styles.input}
          placeholder="กรุณากรอกเวลารถติด"
          keyboardType="numeric"
          value={traffic}
          onChangeText={setTraffic}
        />

        <TouchableOpacity style={styles.btnCalc} onPress={calculateFare}>
          <Text style={styles.btnText}>คำนวณค่าโดยสาร</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCancel} onPress={handleReset}>
          <Text style={styles.btnText}>ยกเลิก</Text>
        </TouchableOpacity>

        <View style={styles.resultBox}>
          <Text style={styles.resultLabel}>ค่าโดยสารแท็กซี่</Text>
          <Text style={styles.result}>{fare.toFixed(2)}</Text>
          <Text style={styles.resultLabel}>บาท</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
  },
  card: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  imgTaxi: {
    width: 120,
    height: 120,
    alignSelf: "center",
  },
  txtTitle: {
    textAlign: "center",
    marginBottom: 15,
    fontFamily: "Kanit_400Regular",
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    fontFamily: "Kanit_400Regular",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontFamily: "Kanit_400Regular",
  },
  btnCalc: {
    backgroundColor: "#f4b400",
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
    alignItems: "center",
  },
  btnCancel: {
    backgroundColor: "#999",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontFamily: "Kanit_700Bold",
  },
  resultBox: {
    backgroundColor: "#f5e1a7",
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  resultLabel: {
    color: "#555",
    fontFamily: "Kanit_400Regular",
  },
  result: {
    fontSize: 28,
    color: "red",
    fontFamily: "Kanit_700Bold",
  },
});
