import React from "react";
import { StyleSheet, Text, View , TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
    <TextInput
        placeholder="Enter text here to conert to french "
        placeholderTextColor='#f9f9f9'
        keyboardAppearance="dark"
        style={styles.input}
      ></TextInput>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
 display:'flex',
 flex:1,
alignItems: 'center',
justifyContent: 'center',
backgroundColor:'#040404',
  },
  input: {
fontSize:20,
color:'#f9f9f9',
backgroundColor:'transparent',
paddingLeft:2,
paddingRight:2,
paddingTop:2.3,
paddingBottom:2.3,
minWidth:30,
borderRadius:10,
borderWidth:2,
borderStyle:'solid',
borderColor:'#7a7a7a56',
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fffffe",
  },
});
