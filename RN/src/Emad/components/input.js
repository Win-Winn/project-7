import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Switch,
  Text,
  TextInput,
  Button,
  StatusBar,
  FlatList
} from 'react-native';

class Input extends Component {

  
    render(){
        return (
          <Fragment>
            <Text>Emad App</Text>
<Text>Emad</Text>
       <TextInput label='enter ' style={{ borderColor: 'black', borderWidth: 1,margin:20 }}
        placeholder="Service required"
         placeholderTextColor="black"/>
       <TextInput label='enter ' placeholder="price"
        placeholderTextColor="black"style={{ borderColor: 'black', borderWidth: 1,margin:20 }} />
       <TextInput label='enter ' placeholder="Timing"
        placeholderTextColor="black"style={{ borderColor: 'black', borderWidth: 1,margin:20 }} />
       <TextInput label='enter 'placeholder="Address"
        placeholderTextColor="black" style={{ borderColor: 'black', borderWidth: 1,margin:20 }} />
          </Fragment>
        );
    }
  };
  

  export default Input;


