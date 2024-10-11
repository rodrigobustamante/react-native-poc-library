import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { ThemeProvider } from "@shopify/restyle";
import { core } from "./src/theme";

function App() {
  return (
    <ThemeProvider theme={core}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </ThemeProvider>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
