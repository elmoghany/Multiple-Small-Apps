import React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList} from "react-native";
import ColorCounter from "../components/ColorCounter";

// const setColor = (color, change) => {
//     if ((color + change > 255) || (color + change < 0)){
//         return color;
//     } else {
//         return color + change;
//     }
// }

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        switch(color) {
        case 'red':
            ((red + change > 255) || (red + change < 0)) ? null : setRed(red+change);
            return;
        case 'green':
            ((green + change > 255) || (green + change < 0)) ? null : setGreen(green+change);
            return;
        case 'blue':
            ((blue + change > 255) || (blue + change < 0)) ? null : setBlue(blue+change);
            return;
        default:
            return;
        }
    }
    
    console.log("red: ",red)
    console.log("green: ",green)
    console.log("blue: ", blue)
    console.log("-------------")
    return (
        <View>
            {/* <ColorCounter 
                color="red"
                onIncrease={() => {
                    setRed(setColor(red, COLOR_INCREMENT));
                }}
                onDecrease={() => {
                    setRed(setColor(red, -1*COLOR_INCREMENT));
                }}
            /> */}
            <ColorCounter 
                color='red'
                onIncrease={() => {
                    setColor('red', COLOR_INCREMENT);
                }}
                onDecrease={() => {
                    setColor('red', -1*COLOR_INCREMENT);
                }}
            />
            <ColorCounter 
                color="Green"
                onIncrease={() => {
                    setColor('green', COLOR_INCREMENT);
                }}
                onDecrease={() => {
                    setColor('green', -1*COLOR_INCREMENT);
                }}
            />
            <ColorCounter 
                color="Blue"
                onIncrease={() => {
                    setColor('blue', COLOR_INCREMENT);
                }}
                onDecrease={() => {
                    setColor('blue', -1* COLOR_INCREMENT);
                }}
            />
            <View style={{
                        height: 200,
                        width: 200,
                        backgroundColor:`rgb(${red}, ${green}, ${blue})`
                        }}
            />
        </View>
    )
}

export default SquareScreen;