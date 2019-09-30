import React, { Component, Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Switch,
  // Text,
  TextInput,
  // Button,
  StatusBar,
  FlatList,
  // Rating,
  TouchableOpacity
} from 'react-native';
import { Avatar, Rating, Button, Text } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import axios from 'axios'
import StarRating from 'react-native-star-rating';

const codingAcademy = '10.60.247.112'
const home = '192.168.1.92'
const mobile = '172.20.10.4'
const sakan = '192.168.1.112'

/// Sort Requirment:
sortByData = [{
  value: 'Categories',
}, {
  value: 'Price',
}, {
  value: 'Location',
}, {
  value: 'Time',
}]

const Categories = [{
  value: 'Cleaning',
}, {
  value: 'Shopping',
}, {
  value: 'Kids Need',
}]

const Location = [{
  value: 'amman1',
}, {
  value: 'amman2',
}, {
  value: 'amman3',
}]

const isUrgent = [{
  value: 'Urgent',
}, {
  value: 'Schadualed',
}]

const Price = [{
  value: 'Hight to low',
}, {
  value: 'low to high',
}]


/// NewPost requirment:

let data = [{
  value: 'sweleh',
},
{
  value: 'aljamaha',
},
{
  value: 'tla alali',
},
{
  value: 'Alhuseen',
},
{
  value: 'Alsuefieh',
},

];

export default class SortItem extends Component {
  state = {
    // Sort
    getData: [],
    sortBy: '',
    dataDropdown: [],
    dataFlatlist: [],
    count: 0,
    first: [],
    second: [],
    third: [],
    fourth: [],
    display: false,
    // NewPost
    myPosts: [],
    newPostState: {
      user: this.props.navigation.getParam('user').name,
      task: '',
      time: new Date(),
      Categories: '',
      Price: '',
      isUrgent: true,
      scheduledDate: '',
      Location: '',
      booking: false,
      userRating: this.props.navigation.getParam('user').rating,
      serveceProviderRating: 2,
      serveceProvider: '',
      reports: 0
    }
  }

  // Sort 
  componentWillMount() {
    axios.get(`http://${codingAcademy}:9000/posts/posts`)
      .then(res => {
        this.setState({ myPosts: res.data })
        this.setState({ dataFlatlist: res.data })
      })
    // console.log('this.props.user', this.props.navigation.getParam('user'))
  }

  // NewPost 
  _onPressButton = () => {
    axios.post(`http://${codingAcademy}:9000/posts/newPost`, this.state.newPostState)
      .then(response => {
        // this.set
        // console.log('newpost', response)
        this.setState({ myPosts: response.data })
        this.setState({ dataFlatlist: response.data })
      })
      .catch(error => {
        console.log(error.response)
      });
  }
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  // Posts:
  book = (id) => {
    axios.put(`http://${codingAcademy}:9000/posts/booking/${id}/${this.props.navigation.getParam('user').name}`)
      .then(res => {
        console.log('from book native', res.data)
      })
    this.setState({ color: 'red' })
  }

  render() {
    return (
      <ScrollView>
        {/* <Text>Hello from here</Text> */}
        {/* Sort */}
        <View style={{ borderColer: 'black', borderWidth: 2, margin: 20 }}>
          <Dropdown
            label='Sort By: '
            data={sortByData}
            onChangeText={(value) => {
              this.setState({ sortBy: value })
              this.setState({ display: true })
              if (this.state.sortBy === 'Categories') {
                this.setState({ dataDropdown: Categories })
              } else if (this.state.sortBy === 'Price') {
                this.setState({ dataDropdown: Price })
              } else if (this.state.sortBy === 'Location') {
                this.setState({ dataDropdown: Location })
              } else if (this.state.sortBy === 'Time') {
                this.setState({ dataDropdown: Time })
              }
              this.setState({ count: this.state.count + 1 })
            }
            }
          />
          {this.state.display ?
            <Dropdown
              label={this.state.sortBy}
              data={this.state.dataDropdown}
              onChangeText={(value) => {
                if (this.state.count === 1) {
                  let first = this.state.myPosts.filter(elem => elem[this.state.sortBy] === value)
                  this.setState({ first })
                  this.setState({ dataFlatlist: this.state.first })
                } else if (this.state.count === 2) {
                  let second = this.state.first.filter(elem => elem[this.state.sortBy] === value)
                  this.setState({ second })
                  this.setState({ dataFlatlist: this.state.second })
                } else if (this.state.count === 3) {
                  let third = this.state.second.filter(elem => elem[this.state.sortBy] === value)
                  this.setState({ third })
                  this.setState({ dataFlatlist: this.state.third })
                } else if (this.state.count === 4) {
                  let fourth = this.state.third.filter(elem => elem[this.state.sortBy] === value)
                  this.setState({ fourth })
                  this.setState({ dataFlatlist: this.state.fourth })
                }
              }}
            />
            : null
          }
          {/* <FlatList
            data={this.state.dataFlatlist}
            renderItem={({ item }) => {
              return (
                <Text>{item.task}</Text>
              )
            }}
          /> */}
        </View>

        {/* NewPost */}
        <View style={{ borderColer: 'black', borderWidth: 2, margin: 20 }}>
          <ScrollView>
            <Text>Emad</Text>
            <TextInput onChangeText={(task) => this.setState({ newPostState: { ...this.state.newPostState, task: task } })}
              label=' task ' style={{ borderColor: 'black', borderWidth: 1, margin: 20 }}
              placeholder=" task"
              placeholderTextColor="black" />
            <TextInput onChangeText={(Price) => this.setState({ newPostState: { ...this.state.newPostState, Price: Price } })}
              label='price ' placeholder="Price"
              placeholderTextColor="black"
              style={{ borderColor: 'black', borderWidth: 1, margin: 20 }} />
            {/* <TextInput onChangeText={ (time) => this.setState({time:time})}
                  label='Is Urgent?!' placeholder="time"
                  placeholderTextColor="black"
                  style={{ borderColor: 'black', borderWidth: 1,margin:20 }} /> */}
            <Dropdown
              label='Categories'
              data={Categories}
              onChangeText={(Categories) => this.setState({ newPostState: { ...this.state.newPostState, Categories: Categories } })}
            />
            <Dropdown
              label='Is Urgent'
              data={[{ value: 'Urgent', }, { value: 'Schaduled', }]}
              onChangeText={(IsUrgen) => this.setState({ newPostState: { ...this.state.newPostState, IsUrgen: IsUrgen } })}
            />
            {/* <TextInput onChangeText={(location) => this.setState({ location: location })}
              label='location ' placeholder="location"
              placeholderTextColor="black"
              style={{ borderColor: 'black', borderWidth: 1, margin: 20 }} /> */}
            <Dropdown
              onChangeText={(Location) => this.setState({ newPostState: { ...this.state.newPostState, Location: Location } })}
              label='Region'
              data={data}
            />
            <Button
              onPress={this._onPressButton}
              title="New Post"
            />
          </ScrollView>
        </View>
        {/* posts */}
        <View style={{ borderColer: 'black', borderWidth: 2, margin: 20 }}>
          {/* {console.log('this.state.myPosts:', this.state.getData)} */}
          <FlatList
            data={this.state.dataFlatlist}
            renderItem={({ item }) =>
              <View style={styles.ContainerView}>
                <View style={styles.listView}>
                  {/* <Text>{item.userRating}</Text> */}
                  {/* {console.log(item)} */}
                  <Avatar rounded title='MG' />
                  {/* the serveceProvider is just a test we will change it after we get the data from the sign in */}
                  <Text style={styles.NameView}> {item.serveceProvider} </Text>
                  {/* the date of the post */}
                  <Text note style={styles.TimeView}> {item.time} </Text>
                </View>
                <View style={styles.listView}>
                  {/* the rating of the user */}
                  {/* <Rating
                    imageSize={15}
                    rating={item.userRating}
                  /> */}
                  <StarRating
                    maxStars={5}
                    rating={item.userRating} // it should be this.props.userRating
                    starSize={15}
                    fullStarColor='gold'
                  // selectedStar={(rating) => this.onStarRatingPress(rating)}
                  />
                </View>
                <View style={styles.listView}>
                  {/* the task that the user ask for  */}
                  <Text> {item.task} </Text>
                </View>
                <View style={styles.listView}>
                  <Text note> {item.serverProviderRating} </Text>
                </View>
                <View style={styles.listView}>
                  {/* the price for the service */}
                  <Text>{item.price}</Text>
                </View>
                <View style={styles.listView}>
                  {/* <Text>
                    Location: {item.location}
                  </Text> */}
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
                  <Button
                    title='book'
                    buttonStyle={{
                      // backgroundColor: 'red'
                    }}
                    onPress={this.book.bind(this, item._id)}
                  >
                  </Button>
                  {/* <TouchableOpacity
                    style={{ backgroundColor: 'red', textAlign: 'justify' }}
                    onPress={() => {
                      // axios.put(`http://${home}:9000/posts/report/${item._id}`)
                      // if(item.reports > 3){
                      //   // .then(res => {
                      //     // this.setState({ report: 0 })
                      //     axios.put(`http://${home}:9000/posts/report2/${item._id}`)
                      //     this.setState({report: this.state.report + 1})
                      alert('Your report sent sucssesfully,, Thank you!')
                      //     // })
                      // }
                    }}
                  >
                    <Text>Report</Text>
                  </TouchableOpacity> */}
                    <TouchableOpacity
                style={{ backgroundColor: "red" }}
                onPress={async () => {
                  let res = await axios.put(
                    `http://${codingAcademy}:9000/posts/report/${item._id}`
                  );
                  // console.log(res.data);
                  await this.setState({ myPosts: res.data, dataFlatlist: res.data });
                  console.log(item.reports);
                  if (item.reports >= 2) {
                    //   // .then(res => {
                    //     // this.setState({ report: 0 })
                    let res = await axios.put(
                      `http://${codingAcademy}:9000/posts/report2/${item._id}`
                    );
                    await this.setState({ myPosts: res.data, dataFlatlist: res.data });
                  }
                  //     this.setState({report: this.state.report + 1})
                  //     // })
                  // }
                  alert("you report sent sucssesfully,, Thank you!");

                }}
              >
                <Text>Report</Text>
              </TouchableOpacity>
                </View>
              </View>
            }
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  ContainerView: {
    backgroundColor: '#94948C',
    flex: 1,
    borderColor: 'black',
    borderWidth: 1
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
  // TextView: {
  //   position: 'absolute',
  //   right: 7,
  //   top: 15
  // },
  DropDown: {
    color: 'black',
    backgroundColor: '#fff',
  },
  NameView: {
    paddingTop: 7
  },
  // btn: {
  //   backgroundColor: 'red'
  // }
});