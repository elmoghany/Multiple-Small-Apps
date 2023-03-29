import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({imgSrc, title, score}) => {
    // console.log("props at image details",props)
    return (
        <View>
            <Text>Image Detail {title}</Text>
            <Text>Image score {score}</Text>
            <Image source={imgSrc} />
        </View>
    )
}
const styles=StyleSheet.create({
    textStyle: {
        fontSize: 30,
    }
})
export default ImageDetail;
