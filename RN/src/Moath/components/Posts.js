import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Avatar, Rating, Button, Text } from 'react-native-elements';
import axios from 'axios';

export default class New extends Component {
  state = [
    data = []
  ]

  componentWillMount() {
    axios.get('http://10.60.247.112:9000/posts/posts')
      .then(res => {
        this.setState({ data: res.data })
      })
      .catch(err => console.log(err))
  }

  addPost = newPost => {
    axios.post('/posts', newPost)
      .then(res => {
        this.setState({ data: [res.data, ...this.state.data] });
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) =>
          <View style={styles.ContainerView} >
            <View style={styles.listView}>
              <Avatar rounded title='MG' />
              {/* the serveceProvider is just a test we will change it after we get the data from the sign in */}
              <Text style={styles.NameView}> {item.serveceProvider} </Text>
              {/* the date of the post */}
              <Text note style={styles.TimeView}> {item.scheduledDate} </Text>
            </View>
            <View style={styles.listView}>
              {/* the rating of the user */}
              <Rating
                imageSize={15}
                defaultRating={item.userRating}
              />
            </View>
            <View style={styles.listView}>
              {/* the task that the user ask for  */}
              <Text> {item.task} </Text>
            </View>
            {/* <View style={styles.listView}>
              <Text note> {item.serverProviderRating} </Text>
            </View> */}
            <View style={styles.listView}>
              {/* the price for the service */}
              <Text>{item.price}</Text>
            </View>
            <View style={styles.listView}>
              <Text>
                Location: {item.location}
              </Text>
            </View>
            <View style={styles.listView}>
              {item.isUrgent === true ? <Text>Urgent</Text> : <Text>Not Urgent</Text>}
            </View>
            <View style={styles.listView}>
              <Text>
                Categories: {item.categories}
              </Text>
            </View>
            <View>
              <Button title='book' />
            </View>
          </View>
        }
        keyExtractor={item => item.id}
      />

    );
  };
}

const styles = StyleSheet.create({
  ContainerView: {
    backgroundColor: '#94948C',
    flex: 1,

  },
  listView: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 30,
  },
  TimeView: {
    // alignSelf: 'flex-end',
    position: 'absolute',
    right: 0
  },
  TextView: {
    position: 'absolute',
    right: 7,
    top: 15
  },
  DropDown: {
    color: 'black',
    backgroundColor: '#fff',
  },
  NameView: {
    paddingTop: 7
  }
});


