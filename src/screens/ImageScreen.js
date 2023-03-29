import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                title="Forest" 
                score={9} 
                imgSrc={require("../../assets/forest.jpg")} 
            />
            <ImageDetail
                title="mountain"
                score={7}
                imgSrc={require("../../assets/mountain.jpg")}
            />
            <ImageDetail 
                title="beach" 
                score={4}
                imgSrc={require("../../assets/beach.jpg")} 
            />
        </View>
    );
};
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
});
export default ImageScreen;
