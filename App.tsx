import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Map from "./components/Map";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      <Map />
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
