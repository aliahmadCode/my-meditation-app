import { AntDesign } from "@expo/vector-icons";
import { GalleryPreviewData } from "@/constants/GalleryPreview";
import { router, useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  ImageBackground,
} from "react-native";

import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import AppGradient from "@/components/AppGradient";
import React, { useEffect, useState } from "react";

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();
  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
  const [sentences, setSentences] = useState<string[]>([]);

  useEffect(() => {
    for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
      const affirmationData = AFFIRMATION_GALLERY[idx].data;

      const affirmationToStart = affirmationData.find(
        (a) => a.id === Number(itemId),
      );
      if (affirmationToStart) {
        setAffirmation(affirmationToStart);
        const affirmationArray = affirmationToStart.text.split(".");

        if (affirmationArray[affirmationArray.length - 1] === "") {
          affirmationArray.pop();
        }

        setSentences(affirmationArray);
        return;
      }
    }
  }, []);

  return (
    <View className="flex-1">
      <ImageBackground
        className="flex-1"
        source={affirmation?.image}
        resizeMode="cover"
      >
        <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-10 left-6 z-10"
          >
            <AntDesign name="leftcircleo" size={50} color={"white"} />
          </Pressable>

          <ScrollView className="mt-20" showsVerticalScrollIndicator={false}>
            <View className="h-full border-white justify-center">
              <View className="h-4/5 justify-center">
                {sentences.map((sentences, idx) => (
                  <Text
                    key={idx}
                    className="text-white text-3xl mb-12 font-bold text-center"
                  >
                    {sentences}.
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
