//part 1
import React from "react";
import { Text, StyleSheet, View } from "react-native";
//part 2
const ComponentsScreen = () => {
const name = "Aya Elsayed Morsi";
    return (
        <View>
            <Text style={styles.gettingStarted}>Getting Started with React Native!</Text>
            <Text style={styles.textStyle}>My name is {name}</Text>
        </View>
    );
};
//part 3
const styles = StyleSheet.create({
    gettingStarted: {
        fontSize:45,
    },
    textStyle: {
        fontSize:20,

    },
});
//part 4
export default ComponentsScreen;