import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ImageBackground } from "react-native";
import { s } from "./App.style";
import hotBackgount from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import { Input } from "./components/Input/Input";
import { DisplayTemperature } from "./components/DisplayTemperature/DisplayTemperature";
import { Buttonconvert } from "./components/buttonconvert/buttonconvert";
import {
  units,
  convertTemperatureTo,
  getOppositeunit,
  isIceTemperature,
} from "./utils/temperature";
import { useEffect, useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setcurrentUnit] = useState("°C");
  const opositeunit = getOppositeunit(currentUnit);
  const [currentBackground, setCurrentBackground] = useState(coldBackground);

  useEffect(() => {
    const isCold = isIceTemperature(inputValue, currentUnit);
    setCurrentBackground(isCold ? coldBackground : hotBackgount);
  }, [inputValue, currentUnit]);

  function check_converted_temperature() {
    if (isNaN(inputValue)) {
      return "";
    } else {
      return convertTemperatureTo(inputValue, opositeunit).toFixed(1);
    }
  }
  return (
    <ImageBackground source={currentBackground} style={s.BackgroungImg}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}></View>
          <DisplayTemperature
            temperature={check_converted_temperature()}
            unit={opositeunit}
          />
          <Input
            unit={currentUnit}
            defaultValue={inputValue}
            onChange={setInputValue}
          />
          <Buttonconvert
            unit={currentUnit}
            onPress={() => {
              setcurrentUnit(opositeunit);
            }}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
