import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

const PlaylistScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Hello from MusicListScreen</Text>
      <Button
        title="show track"
        onPress={() => navigation.navigate("ShowMusic")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default PlaylistScreen;
