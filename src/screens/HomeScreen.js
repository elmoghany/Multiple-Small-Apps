import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  // console.log(props.navigation)
  return (
    <View>
      <Text style={styles.text}>Nice meeting you Peter and Dardo :)</Text>
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
      <Button 
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Color')}
        title="Go to Color demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Square')}
        title="Go to Square demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Text')}
        title="Go to Text input demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Box')}
        title="Go to Box layout demo" 
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
