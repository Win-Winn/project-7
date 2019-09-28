import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Posts from '../Moath/components/Posts';
import Sort from '../Haya/components/Sort'
// import Posts from '../Moath/components/Posts'
const ServeceProviderHome = (props) => {
  return(
    <>
    <Sort/>
    <Posts user = {props.navigation.getParam('user')}/>
    </>
    )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ServeceProviderHome;
