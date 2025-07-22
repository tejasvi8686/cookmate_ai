import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "outfit" : require('./../assets/fonts/Outfit-Regular.ttf'),
    "outfit-bold" : require('./../assets/fonts/Outfit-Bold.ttf'),
  });

  if (!loaded && !error) {
    return null;
  }

  return <Stack />;
}
