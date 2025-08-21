import HandleBtn from "@/Components/_layout/handleBtn";
import Input from "@/Components/_layout/input";
import LogoSmall from "@/Components/ui/logoSmall";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Alert, Text, useColorScheme, View } from "react-native";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const phoneThema = useColorScheme();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }
    try {
      const res = await fetch("https://api.example.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        Alert.alert("Error", "Invalid credentials");
        return;
      }
      const data = await res.json();
      await AsyncStorage.setItem("token", data.token);
      await AsyncStorage.setItem("user", JSON.stringify(data.user));
      Alert.alert("Success", `${data.user.fullName}`);
    } catch (error) {
      Alert.alert("Error", "Someting went wrong!");
      console.error(error);
    }
  };

  return (
    <View
      className={
        phoneThema === "dark"
          ? "flex-1 bg-black justify-center items-center"
          : "flex-1 bg-white justify-center items-center"
      }
    >
      <View className="items-center gap-5 pb-8">
        <LogoSmall />
        <View className="items-center gap-5">
          <View>
            <Text
              className={
                phoneThema === "dark"
                  ? "text-white text-4xl"
                  : "text-black text-4xl"
              }
            >
              Xoş Gəldiniz!
            </Text>
          </View>
          <View>
            <Text className="text-center text-xl text-[#989FAB]">
              Elektron materiallara olan əlçatanlılığı ilə Edadi.az bu sahədə
              xüsusilə fərqlənir.
            </Text>
          </View>
        </View>
      </View>
      <View className="gap-5">
        <View>
          <Input label="E-mail" value={email} onChangeText={setEmail} />
        </View>
        <View>
          <Input
            label="Şifrə"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>
      <View className="">
        <HandleBtn title="Daxil ol" disabled loading onPress={handleLogin} />
      </View>
    </View>
  );
};

export default LoginScreen;
