import { TextInput } from "react-native";
import { s } from "./Input.style";

export function Input({ defaultValue, onChange, unit }) {
  return (
    <view style={s.inputview}>
      <TextInput
        placeholder="Type temperature"
        style={s.input}
        maxLength={3}
        defaultValue={defaultValue.toString()}
        onChangeText={(text) => {
          onChange(text);
        }}
      />
      <Text style="s.unit">{unit}</Text>
    </view>
  );
}
