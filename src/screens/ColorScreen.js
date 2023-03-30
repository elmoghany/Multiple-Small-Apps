import React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList} from "react-native";

const ColorScreen = () => {
    const [colors, setColors] = useState([])
    console.log(colors)
    return(
        <View>
            <Button 
                title="Add Color" 
                onPress={ () => {
                    setColors([...colors, randomRgb()])
                }}
            />
            <FlatList 
                data={colors}
                keyExtractor={(item) => item}
                renderItem={({item}) =>{
                    return (
                        <View 
                            style={{
                                    width: 100,
                                    height: 100,
                                    backgroundColor: item
                            }}
                        />
                    )
                }}
            />               
        </View>
    )
}
const randomRgb = () => {
    const red   = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue  = Math.floor(Math.random()*256)
    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({

})
export default ColorScreen;