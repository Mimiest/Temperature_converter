import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ImageBackground } from "react-native";
import { s } from "./App.style";
import hotBackgount from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import { Input } from "./components/Input/Input";
import { DisplayTemperature } from "./components/DisplayTemperature/DisplayTemperature";

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setcurrentUnit] = useState("°C");
  return (
    <ImageBackground source={hotBackgount} style={s.BackgroungImg}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}></View>
          <DisplayTemperature temperature={inputValue} unit={currentUnit} />
          <Input
            unit={currentUnit}
            defaultValue={inputValue}
            onChange={setInputValue}
          />
          <>Button</>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
