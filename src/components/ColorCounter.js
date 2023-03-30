import React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList} from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {

    return (
        <View>
            <Text>{color}</Text>
            <Button 
                title={`Increase ${color}`}
                onPress={() => {
                    onIncrease()
                }}
            />
            <Button 
                title={"Decrease " + color}
                onPress={() => {
                    onDecrease()
                }}
            />
        </View>
    )
}

export default ColorCounter;