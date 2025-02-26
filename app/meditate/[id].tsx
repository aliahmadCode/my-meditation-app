import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams, useRouter } from "expo-router";
import React, { useState, useContext, useEffect } from "react";
import {
  ImageBackgroundBase,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Audio } from "expo-av";
import CustomButton from "@/components/CustomButton";

import meditationImage from "@/constants/meditation-images";
import { MEDITATION_DATA, AUDIO_FILES } from "@/constants/meditation-data";
import { TimerContext } from "@/context/TimerContext";
import { isLoaded } from "expo-font";
import Animated from "react-native-reanimated";
import LoadingBar from "@/components/LoadingBar";

const Page = () => {
  const { id } = useLocalSearchParams();

  const {
    fallback,
    duration: secondsRemaining,
    setDuration,
  } = useContext(TimerContext);

  const [isMediatating, setMeditating] = useState(false);
  const [audioSound, setSound] = useState<Audio.Sound>();
  const [isPlayingAudio, setPlayingAudio] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (secondsRemaining === 0) {
      if (isPlayingAudio) audioSound?.pauseAsync();
      setMeditating(false);
      setPlayingAudio(false);
      return;
    }
    if (isMediatating) {
      timerId = setTimeout(() => {
        console.log("changing now", secondsRemaining - 1);
        setDuration(secondsRemaining - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [secondsRemaining, isMediatating]);

  useEffect(() => {
    return () => {
      setDuration(fallback);
      audioSound?.unloadAsync();
    };
  }, [audioSound]);

  const initializedSound = async () => {
    const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;
    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);

    setSound(sound);
    return sound;
  };

  const togglePlaySound = async () => {
    const sound = audioSound ? audioSound : await initializedSound();

    const status = await sound?.getStatusAsync();

    if (status?.isLoaded && !isPlayingAudio) {
      await sound?.playAsync();
      setPlayingAudio(true);
    } else {
      await sound?.pauseAsync();
      setPlayingAudio(false);
    }
  };

  async function toggleMeditationSessionState() {
    if (secondsRemaining === 0) setDuration(fallback);
    setMeditating(!isMediatating);
    await togglePlaySound();
  }

  const handleAdjustDuration = async () => {
    router.push("/(modal)/adjust-meditation-duration");
  };

  const formattedTimeMinutes = String(
    Math.floor(secondsRemaining / 60),
  ).padStart(2, "0");

  const formattedTimeSeconds = String(secondsRemaining % 60).padStart(2, "0");

  return (
    <View className="flex-1">
      <ImageBackground
        source={meditationImage[Number(id) - 1]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
          <Pressable
            className="absolute top-10 left-6 z-10"
            onPress={() => router.back()}
          >
            <AntDesign name="leftcircleo" size={50} color={"white"} />
          </Pressable>

          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center">
              <Text className="text-4xl text-blue-800 font-rmono">
                {formattedTimeMinutes}.{formattedTimeSeconds}
              </Text>
            </View>
          </View>

          <View className="mb-5 flex flex-col gap-4">
            <CustomButton
              title="Adjust Duration"
              onPress={handleAdjustDuration}
            />
            <CustomButton
              title={isMediatating ? "Stop" : "Start Meditating"}
              onPress={toggleMeditationSessionState}
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Page;
