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
import Input from './components/input'

class EmadApp extends Component {

  
    render(){
        return (
          <Fragment>
            <Text>Emad App</Text>
            <Input/>
          </Fragment>
        );
    }
  };
  

  export default EmadApp;