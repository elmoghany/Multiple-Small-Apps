import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  // console.log(props.navigation)
  return (
    <View>
      <Text style={styles.text}>Do not forget to pray Qiyam ya Aya Elsayed Morsi :D</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Go to components demo" 
      />
      <Button 
        onPress={() => navigation.navigate('List')}
        title="Go to List demo" 
      />
      <Button 
        onPress={() => navigation.navigate('ImageFrame')}
        title="Go to ImageFrame demo" 
      />
      {/* <TouchableOpacity
        onPress={() => navigation.navigate('List')}
      >
        <Text>Go to list demo</Text>
      </TouchableOpacity> */}
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
