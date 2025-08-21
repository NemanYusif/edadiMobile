import React from "react";
import { View, useColorScheme } from "react-native";
import { TextInput } from "react-native-paper";

interface InputProps {
  label: string;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: string) => void;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  secureTextEntry = false,
  value,
  onChangeText,
  disabled = false,
}) => {
  const phoneTheme = useColorScheme(); // "light" | "dark"

  const labelAndOutlineColor = phoneTheme === "dark" ? "#767C87" : "#9B9EA0";
  const placeholderColor = phoneTheme === "dark" ? "#767C87" : "#9B9EA0";
  const backgroundColor = phoneTheme === "dark" ? "#1C1C1C" : "#FFFFFF";
  const textColor = phoneTheme === "dark" ? "#FFFFFF" : "#000000";

  return (
    <View>
      <TextInput
        style={{ width: 343, height: 56, backgroundColor: backgroundColor }}
        label={label}
        mode="outlined"
        outlineColor={labelAndOutlineColor}       
        activeOutlineColor="#1B63CF"              
        theme={{
          roundness: 10,
          colors: {
            primary: labelAndOutlineColor,
            text: textColor,               
            placeholder: placeholderColor,
            background: backgroundColor, 
          },
        }}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        disabled={disabled}
      />
    </View>
  );
};

export default Input;
