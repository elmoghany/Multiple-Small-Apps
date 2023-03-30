import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button 
                title="Increase"
                onPress={() => 
                        {
                            setCounter(counter + 1)
                            console.log(counter)
                        }}
            />
            <Button
                title="Descrease"
                onPress={() => 
                        {   
                            setCounter(counter - 1)
                            console.log(counter)
                        }}
            />
            <Text>Current Count: {counter}</Text>
        </View>
);
}

const styles=StyleSheet.create({
    textStyle: {
        fontSize: 30,
    }
})

export default CounterScreen;