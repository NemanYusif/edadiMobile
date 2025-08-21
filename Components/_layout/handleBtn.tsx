import React from "react";
import {
    GestureResponderEvent,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface BtnProps {
  title: string;
  disabled: boolean;
  loading: boolean;
  onPress: (Event: GestureResponderEvent) => void;
}

const HandleBtn: React.FC<BtnProps> = ({
  title,
  disabled = false,
  loading = false,
  onPress,
}) => {
  return (
    <View>
      <TouchableOpacity
        className="bg-[#3D7AD6] py-4 w-[343px] rounded-3xl items-center"
        onPress={() => {}}
        disabled={disabled || loading}
      >
        <Text className="text-[#ffffff] text-xl">{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HandleBtn;
