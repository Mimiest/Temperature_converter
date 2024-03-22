import { TextInput } from "react-native";
import s from "./Input.style";

export function Input(defaultValue) {}
{
  return (
    <view style={s.inputview}>
      <TextInput
        placeholder="Type temperature"
        style={s.input}
        maxLength={3}
        defaultValue={defaultValue.toString()}
      />
      <Text style="s.unit">°C</Text>
    </view>
  );
}
