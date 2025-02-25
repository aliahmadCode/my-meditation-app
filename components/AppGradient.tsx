import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Content from "./content";
export default function AppGradient({
  children,
  colors,
}: {
  children: any;
  colors: [string, string, ...string[]];
}) {
  return (
    <LinearGradient colors={colors} style={{ flex: 1 }}>
      <Content>{children}</Content>
    </LinearGradient>
  );
}
