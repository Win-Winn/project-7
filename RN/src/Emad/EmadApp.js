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
import NewPost from './components/NewPost'

class EmadApp extends Component {

  
    render(){
        return (
          <Fragment>
            <Text>Emad App</Text>
            <NewPost/>
          </Fragment>
        );
    }
  };
  

  export default EmadApp;