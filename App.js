import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";

export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
        setLoading(false);
      });
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <ScrollView style={{ flex: 1 }}>
        {loading && <Text>Loading...</Text>}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
