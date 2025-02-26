import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import GuidedAffirmationGallery from "@/components/GuidedAffirmationGallery";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import affirmationImages from "@/constants/affirmation-images";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Affirmations() {
  const insets = useSafeAreaInsets();
  return (
    <View className="flex-1">
      <LinearGradient
        colors={["#2e1f58", "#54426b", "#a790af"]}
        className="px-5"
        style={{ paddingTop: insets.top }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-zinc-50 text-3xl font-bold">
            Change you beliefs and affirmations
          </Text>

          <View>
            {AFFIRMATION_GALLERY.map((g) => (
              <GuidedAffirmationGallery
                key={g.title}
                title={g.title}
                products={g.data}
              />
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({});
