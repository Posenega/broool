import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { Controller, useForm } from "react-hook-form";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Constants } from "expo-constants";

axios.defaults.baseURL = "http://localhost:5000";

export default function App() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios.get("/openAi/assignment/");
  };
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="input"
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Input"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Button title="press" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
