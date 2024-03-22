import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ImageBackground } from "react-native";
import { s } from "./App.style";
import hotBackgount from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import { Input } from "./components/Input/Input";
import { DisplayTemperature } from "./components/DisplayTemperature/DisplayTemperature";
import {
  units,
  convertTemperatureTo,
  getOppositeunit,
} from "./utils/temperature";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setcurrentUnit] = useState("°C");
  const opositeunit = getOppositeunit(currentUnit);
  function check_converted_temperature ()
  {
    if (isNaN(inputValue))
    {return ""}
    else return {convertTemperatureTo(inputValue, opositeunit).toFixed(2)}
  }
  return (
    <ImageBackground source={hotBackgount} style={s.BackgroungImg}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}></View>
          <DisplayTemperature
            temperature= {check_converted_temperature()} unit={opositeunit}
          />
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
