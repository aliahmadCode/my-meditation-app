import treeImage from "@/assets/meditation-images/trees.webp";
import meditatingUnderTree from "@/assets/meditation-images/meditate-under-tree.webp";
import riverImage from "@/assets/meditation-images/river.webp";
import beachImage from "@/assets/meditation-images/beach.webp";
import yosemiteStars from "@/assets/meditation-images/yosemite-stars.webp";
import waterfall from "@/assets/meditation-images/waterfall.webp";

import { ImageSourcePropType } from "react-native";

const meditationImage: ImageSourcePropType[] = [
  treeImage as ImageSourcePropType,
  riverImage as ImageSourcePropType,
  meditatingUnderTree as ImageSourcePropType,
  beachImage as ImageSourcePropType,
  yosemiteStars as ImageSourcePropType,
  waterfall as ImageSourcePropType,
];

export default meditationImage;
