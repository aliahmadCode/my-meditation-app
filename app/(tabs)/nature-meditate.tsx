import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AppGradient from "@/components/AppGradient";
import { MEDITATION_DATA } from "@/constants/meditation-data";
import meditationImages from "@/constants/meditation-images";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { TimerContext } from "@/context/TimerContext";

export default function natureMeditate() {
  const { fallback, setDuration } = useContext(TimerContext);
  const router = useRouter();
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="mb-6">
          <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
            Nature Meditate
          </Text>

          <Text className="text-indigo-100 text-xl font-medium">
            Start your meditation practice today
          </Text>
        </View>

        <View>
          <FlatList
            data={MEDITATION_DATA}
            contentContainerStyle={styles.list}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  setDuration(fallback);
                  router.push(`/meditate/${item.id}`);
                }}
                className="h-48 my-3 rounded-md overflow-hidden"
              >
                <ImageBackground
                  source={meditationImages[item.id - 1]}
                  style={styles.backgroundImage}
                  resizeMode="cover"
                >
                  <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                    style={styles.gradient}
                  >
                    <Text className="text-gray-100 text-3xl font-bold text-center">
                      {item.title}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
  },
  gradient: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  list: {
    paddingBottom: 150,
  },
});
