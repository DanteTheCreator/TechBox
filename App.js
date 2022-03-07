import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ShowMusicScreen from "./src/screens/ShowMusicScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MusicListScreen from "./src/screens/MusicListScreen";
import UploadScreen from "./src/screens/UploadScreen";
import PlaylistScreen from "./src/screens/PlaylistScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "MusicList">
        <Stack.Screen name="MusicList" component={MusicListScreen} options={{ title: 'All Music'}} />
        <Stack.Screen name="ShowMusic" component={ShowMusicScreen} options={{ title: 'Music Name'}} />
        <Stack.Screen name="Playlist" component={PlaylistScreen} options={{ title: "Your PLaylist"}} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: "Settings"}} />
        <Stack.Screen name="Upload" component={UploadScreen} options={{ title: "Upload your prefered Track"}} />
      </Stack.Navigator>
    </NavigationContainer>
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
