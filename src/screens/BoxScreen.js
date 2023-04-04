import React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, Button} from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.textOneStyle}></View>
            <View style={styles.textTwoStyle}></View>
            <View style={styles.textThreeStyle}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    viewStyle:{
        height: 100,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 3,
        // justifyContent: 'space-between',
    },
    textOneStyle:{
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: 'red',
        height: 50,
        width: 50,
    },
    //or create another view in the boxScreen
    textTwoStyle:{
        borderWidth: 3,
        borderColor: 'green',
        backgroundColor: 'green',
        height: 50,
        width: 50,
        // top: 40,
        // marginTop: 40,
        // alignSelf: 'flex-end',
    },
    textThreeStyle:{
        borderWidth: 3,
        height: 50,
        width: 50,
        borderColor: 'purple',
        backgroundColor: 'purple',
    }
})
export default BoxScreen;