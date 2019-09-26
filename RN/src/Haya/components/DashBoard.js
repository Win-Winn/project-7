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
import StarRating from 'react-native-star-rating';
import HistoryItem from './HistoryItem'

class DashBoard extends Component {
    state = {
    starCount: 3.5,
    user: this.props.navigation.getParam('user')
  }


onStarRatingPress = (rating) => {
  this.setState({
    starCount: rating
  });
}

    render(){
        return (
          <Fragment >
              <View style={styles.info}>
              <Image style={styles.item} source={require('./OG_Facebook.png')}/> 
              {/* it should be this.props.photo  */}
              {console.log('log from dash', this.state.user)}
              <Text style={styles.item}>{this.state.user}</Text> 
              {/* it should be {this.props.name} */}
            </View>
            <View style={styles.stars}>
            <StarRating
              maxStars = {5}
              rating={this.state.starCount} // it should be this.props.userRating
              starSize = {15}
              fullStarColor = 'gold'
              // selectedStar={(rating) => this.onStarRatingPress(rating)}
            />
            </View>
            <View>
              <Text>
                Your History:
              </Text>
              <View style={styles.historyContainer}>
                <HistoryItem/>
              </View>
            </View>
          </Fragment>
        );
    }
  };
  
  const styles = StyleSheet.create({
      info:{
          flexDirection: 'row',
          justifyContent: 'flex-start'
      },
      item:{
        marginRight: 30,
        width: 50,
        height: 50,
      },
      stars:{
        width: 30,
        alignItems: 'flex-start',
        marginLeft: 10,
        marginBottom: 30        
      },
      historyContainer: {
        alignItems: 'center'
      },
      historyItem: {
        borderColor: 'black',
        borderWidth: 2,
        width: 300,
        padding: 10
      },
      row: {
        flexDirection: 'row',
      }
  })

  export default DashBoard;