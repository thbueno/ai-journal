import "../tamagui-web.css";

import { ModalProvider } from "@/contexts/ModalContext";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Slot } from "expo-router";
import { useColorScheme } from "react-native";
import { TamaguiProvider } from "tamagui";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { tamaguiConfig } from "../tamagui.config";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    // add this
    <SafeAreaProvider>
      <ClerkProvider tokenCache={tokenCache}>
        <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
          <ModalProvider>
            <ThemeProvider
              value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
              <Slot />
            </ThemeProvider>
          </ModalProvider>
        </TamaguiProvider>
      </ClerkProvider>
    </SafeAreaProvider>
  );
}
