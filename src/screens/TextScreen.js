import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

const TextScreen = () => {
    const [pass, setPass] = useState('')
    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize="none"
                autoCorrect={false}
                value={pass}
                onChangeText={(newValue) => {
                    setPass(newValue)
                }}
            />
            {pass.length <= 4 ? <Text>Password must be longer than pass.length characters</Text>: null}
            
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    },
})

export default TextScreen;