import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import React, { useEffect, useRef } from "react";

export default function LoadingBar() {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(progress, {
        toValue: 100,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
  }, []);
  return (
    <View className="h-1 w-full bg-gray-300 overflow-hidden">
      <Animated.View
        style={{
          width: progress.interpolate({
            inputRange: [0, 100],
            outputRange: ["0%", "100%"],
          }),
          height: "100%",
          backgroundColor: "#4CAF50",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
