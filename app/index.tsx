import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import "@/global.css";

import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
const beachImage = require("@/assets/meditation-images/beach.webp");

import Animated, { FadeInDown } from "react-native-reanimated";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        resizeMode="cover"
        source={beachImage}
        className="flex-1"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0.8)"]}
          className="flex-1"
        >
          <SafeAreaView className="px-1 mx-2 my-4 flex-1 flex justify-between">
            <Animated.View
              entering={FadeInDown.delay(300)
                .mass(0.5)
                .stiffness(80)
                .springify(20)}
            >
              <Text className="text-4xl text-white font-bold text-center">
                Simple Meditation
              </Text>
              <Text className="text-2xl text-white text-center">
                Simplifying meditation for everyone
              </Text>
            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(300)
                .mass(0.5)
                .stiffness(80)
                .springify(20)}
            >
              <CustomButton
                onPress={() => router.push("/(tabs)/nature-meditate")}
                title="Get Started"
              />
            </Animated.View>

            <StatusBar style="light" />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
