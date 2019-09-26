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
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';


class Wellcome extends Component {

    render(){
        return (
          <Fragment >
              <View style={styles.Slogan}>
              <Image style={{width: 150, height: 150}} source={require('./OG_Facebook.png')}/>
            <Text>Some Slogan ...</Text>
            </View>
            <View style={styles.authentecation}>
            <TouchableOpacity onPress={ () => this.props.navigation.navigate('LoginScreen')}>
                <Text>Register as User!</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.props.navigation.navigate('SigninServiceProviderScreen')}>
                <Text>Register as Servece Provider!</Text>
            </TouchableOpacity>
            </View>
          </Fragment>
        );
    }
  };
  
  const styles = StyleSheet.create({
      Slogan:{
          margin: 50,
          alignItems: 'center'

      },
      authentecation:{
        // margin: 30,
        alignItems: 'center'
      }
  })

  export default Wellcome;