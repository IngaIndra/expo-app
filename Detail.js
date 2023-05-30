import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export default function Detail() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <ScrollView style={{ flex: 1 }}>
        <Image
          source={{ uri: "https://via.placeholder.com/500" }}
          style={{ width: "100%", height: 300 }}
        />

        <View style={{ padding: 12 }}>
          <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 12 }}>
            {lorem.generateWords(3)}
          </Text>
          <Text
            style={{
              fontSize: 28,
              color: "green",
              fontWeight: "bold",
              textAlign: "right",
              marginBottom: 12,
            }}
          >
            Price$
          </Text>
          <Text style={{ fontSize: 18, lineHeight: 24 }}>
            {lorem.generateParagraphs(3)}
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => Vibration.vibrate(1000)}>
        <View
          style={{
            position: "absolute",
            right: 12,
            bottom: 12,
            marginBottom: 12,
            zIndex: 1,
            paddingHorizontal: 20,
            paddingVertical: 12,
            backgroundColor: "pink",
            borderWidth: 1,
            borderRadius: 10,
          }}
        >
          <Text>Add to cart</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "pink",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
