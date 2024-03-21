import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ImageBackground } from "react-native";
import { s } from "./App.style";
import hotBackgount from "./assets/hot.png";
import coldBackground from "./assets/cold.png";

export default function App() {
  return (
    <ImageBackground source={hotBackgount} style={s.BackgroungImg}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}></View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
