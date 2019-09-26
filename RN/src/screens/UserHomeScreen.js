import React from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import Posts from '../Moath/components/Posts';
import Sort from '../Haya/components/Sort';
import DashBoard from '../Haya/components/DashBoard'
// import Posts from '../Moath/components/Posts'
const UserHomeScreen = (props) => {
  console.log(props.navigation.getParam('user'))
  return(
    <>
    <Sort/>
    {/* <Text>New Post</Text>

    <Posts/> */}
      

    <Text>{props.navigation.getParam('user')}</Text>
    <Button title = 'DashBoard' onPress = {() => props.navigation.navigate('Dashboard', {user: props.navigation.getParam('user')})}/>
    </>
    )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default UserHomeScreen;
