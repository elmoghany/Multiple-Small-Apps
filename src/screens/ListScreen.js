import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
    //array of objects
    const friends = [
        { name: "Friend #1", age: 20, key: 1 },
        { name: "Friend #2", age: 45, key: 2 },
        { name: "Friend #3", age: 32, key: 3 },
        { name: "Friend #4", age: 27, key: 4 },
        { name: "Friend #5", age: 53, key: 5 },
        { name: "Friend #6", age: 30, key: 6 },
        { name: "Friend #7", age: 21, key: 7 },
        { name: "Friend #8", age: 18, key: 8 },
        { name: "Friend #9", age: 24, key: 9 },
        // { name: 'Friend #1', age: 20},
        // { name: "Friend #2", age: 45},
        // { name: "Friend #3", age: 32},
        // { name: "Friend #4", age: 27},
        // { name: "Friend #5", age: 53},
        // { name: "Friend #6", age: 30},
        // { name: "Friend #7", age: 21},
        // { name: "Friend #8", age: 18},
        // { name: "Friend #9", age: 24}
    ];
    const t1 ="test";
            //friend is an object in array ... i.e
            //  i.e.  { name: "Friend #1", age: 20, key: 1 }
            // using data & renderItem for flatlist
                // horizontal
                // showsHorizontalScrollIndicator={false}
                // keyExtractor={(friend) => friend.name}
                // using element instead of item
                // renderItem={(element) => {
                //  item === { name: 'Friend #1' }
                //  element === { item: { name: 'Friend #1' }, index: 0 }
                //  <Text style={styles.textStyle}>{element.item.name}</Text>;
    return (
            <FlatList 
                keyExtractor={(friend) => friend.name}
                data={friends} 
                renderItem={({item}) => {
                return <Text style={styles.textStyle}>
                    name= {item.name} 
                    and Age= {item.age}
                        </Text>;
                }}
            />
    );
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        marginVertical: 50,
    },
});
export default ListScreen;