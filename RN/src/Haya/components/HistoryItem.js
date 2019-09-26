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
import axios from "axios";

class HistoryItem extends Component {
    state = {
        myPosts: [
          {
          task: '',
          time: '',
          categories: '',
          price: '',
          isUrgent: true,
          scheduledDate: '',
          location: '',
          booking: false,
          userRating: '',
          serveceProviderRating: '',
          serveceProvider: ''
        }
      ],
      serveceProvider: 'name'
    }

    componentWillMount(){
        axios.get(`http://10.60.247.112:9000/posts/getAll`)
        // :${this.state.serveceProvider}
        .then(res => {
            this.setState({myPosts:res.data})
            console.log(this.state)
        })
    }
    render(){
      // const {price, date, serveceProviderRating} = this.state.myPosts
        return (
          <Fragment >
              {/* <Text>{this.state.myPosts.length}</Text> */}
              {/* <Button onPress={this.onClick} title ='test'/> */}
              <View style={styles.info}>
              <View style={styles.historyContainer}>
              <FlatList
                data = {this.state.myPosts}
                renderItem = {({ item }) => {
                  return (<ScrollView>
                  <View style={styles.historyItem}>
                  {/* // data= this.state.myPosts */}
                  <Text>Task Discription: </Text>
                  <Text>{item.task} !</Text>
                  <View style={styles.row}>
                    <Text>Price:</Text>
                    <Text>{item.price}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text>Date: </Text>
                    <Text>{item.scheduledDate}!</Text>
                  </View>
                  <View style={styles.row}>
                    <Text>Your Task Rating: </Text>
                    <Text>{item.serveceProviderRating}</Text>
                  </View> 
                </View>
                </ScrollView>)
                }}
              />
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
        marginLeft: 10
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

  export default HistoryItem;