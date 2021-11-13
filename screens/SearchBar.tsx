import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Feather } from "@expo/vector-icons";


export default function SearchBar() {
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
        <Feather
          name="search"
          size={20}
          color="black"
          style={styles.icon}
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Enter Destination"
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        top: 70,
        position: 'absolute',
        width: '90%'
    },
    icon: {
        position: "absolute",
        zIndex: 2,
        margin: 12,
        color: 'rgba(0,0,0,0.2)'
    },
    input: {
        paddingLeft: 40,
        height: 45,
        borderRadius: 50,
        backgroundColor: 'white',
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOpacity: 0.5,
        shadowOffset: { height: 5, width: 0 },
        fontSize: 16.5
    }
});
