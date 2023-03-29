import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const CounterScreen = () => {
    return (
        <View>
            <Button title="Increase"/>
            <Button title="Decrease"/>
            <Text>Current Count:</Text>
        </View>
);
}

const styles=StyleSheet.create({
    textStyle: {
        fontSize: 30,
    }
})

export default CounterScreen;