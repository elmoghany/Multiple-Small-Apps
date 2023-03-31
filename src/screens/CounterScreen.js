import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// action === {type: 'increment' || 'decrement', payload:1}
// state === {counter: number}
const reducer = (state,action) => {
    switch (action.counterToChange) {
        case 'increment':
            return {...state, counter: state.counter + action.payload}
        case 'decrement':
            return {...state, counter: state.counter - action.payload}
        default:
            return state
}}
const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0})

    return (
        <View>
            <Button 
                title="Increase"
                onPress={() => 
                        {
                            dispatch({counterToChange: 'increment', payload: 1})
                            console.log(state.counter)
                        }}
            />
            <Button
                title="Descrease"
                onPress={() => 
                        {   
                            dispatch({counterToChange: 'decrement', payload: 1})
                            console.log(state.counter)
                        }}
            />
            <Text>Current Count: {state.counter}</Text>
        </View>
);
}


export default CounterScreen;