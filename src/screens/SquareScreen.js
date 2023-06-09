import React from "react";
import { useReducer } from "react";
import { Text, StyleSheet, View, Button, FlatList} from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;
//action = how to change state object
const reducer = (state, action) => {
    //state === {red: number, green: number, blue: number}
    //action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
    //convention
    //action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}
    switch (action.type) {
        case 'change_red':
            // WRONG: state.red = state.red -15
            return (state.red + action.payload > 255 || state.red + action.payload < 0) ?
                state : {...state, red: state.red + action.payload}
        case 'change_green':
            return (state.green + action.payload > 255 || state.green + action.payload < 0) ?
                state : {...state, green: state.green + action.payload}
        case 'change_blue':
            return (state.blue + action.payload > 255 || state.blue + action.payload < 0) ?
                state : {...state, blue: state.blue + action.payload}
        default: 
            return state
    }
}

const SquareScreen = () => {
    // dispatch = run my reducer
    const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0})
    // const {red, green, blue} = state;
    console.log(state)

    return (
        <View>
            <ColorCounter 
                color='red'
                onIncrease={() => {
                    dispatch({type: 'change_red', payload: COLOR_INCREMENT})
                }}
                onDecrease={() => {
                    dispatch({type: 'change_red', payload: -1*COLOR_INCREMENT})
                }}
            />
            <ColorCounter 
                color="Green"
                onIncrease={() => {
                    dispatch({type: 'change_green', payload: COLOR_INCREMENT})
                }}
                onDecrease={() => {
                    dispatch({type: 'change_green', payload: -1*COLOR_INCREMENT})
                }}
            />
            <ColorCounter 
                color="Blue"
                onIncrease={() => {
                    dispatch({type: 'change_blue', payload: COLOR_INCREMENT})
                }}
                onDecrease={() => {
                    dispatch({type: 'change_blue', payload: -1*COLOR_INCREMENT})
                }}
            />
            <View style={{
                        height: 200,
                        width: 200,
                        backgroundColor:`rgb(${state.red}, ${state.green}, ${state.blue})`
                        }}
            />
        </View>
    )
}

export default SquareScreen;