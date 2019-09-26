import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Posts from '../Moath/components/Posts';
import Sort from '../Haya/components/Sort'
// import Posts from '../Moath/components/Posts'
const ServeceProviderHome = () => {
  return(
    <>
    <Sort/>
    <Posts/>
    </>
    )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ServeceProviderHome;
