import React from "react";

import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Content = ({ children }: any) => {
  return <SafeAreaView style={[styles.content]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});

export default Content;
