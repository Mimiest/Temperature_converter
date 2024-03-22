import { TouchableOpacity, Text } from "react-native";
import { s } from "./buttonconvert.style";

export function Buttonconvert({ unit, onPress }) {
  return (
    <TouchableOpacity style={s.button} onPress={onPress}>
      <Text style={s.btntxt}>Toggle itarget unit to {unit}</Text>
    </TouchableOpacity>
  );
}
