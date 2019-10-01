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
  TouchableOpacity,
  TouchableOpacityBase
} from 'react-native';
import { Avatar, Rating, Button, Text, Card } from 'react-native-elements';
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
  value: 'Kids Needs',
}]

// const Location = [{
//   value: 'amman1',
// }, {
//   value: 'amman2',
// }, {
//   value: 'amman3',
// }]

const isUrgent = [{
  value: 'Urgent',
}, {
  value: 'Schadualed',
}]

const Price = [{
  value: 'Hight to low',
}, {
  value: 'Low to high',
}]

/// NewPost requirment:

let Location = [{
  value: 'Sweleh',
},
{
  value: 'Aljamaha',
},
{
  value: 'Tlaa Al-Ali',
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
    dataFlatlist: [].sort((a, b) => { b.time - a.time }),
    count: 0,
    first: [],
    second: [],
    third: [],
    fourth: [],
    display: false,
    // NewPost
    myPosts: [].sort((a, b) => { b.time - a.time }),
    newPostState: {
      // user: this.props.navigation.getParam('user').name,
      task: '',
      time: `${new Date().getDate()}/${new Date().getMonth()} _ ${new Date().getHours()}: ${new Date().getMinutes()} `,
      Categories: '',
      Price: '',
      isUrgent: true,
      scheduledDate: '',
      Location: '',
      booking: false,
      // userRating: this.props.navigation.getParam('user').rating,
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
  }

  // NewPost 
  _onPressButton = () => {
    axios.post(`http://${codingAcademy}:9000/posts/newPost`, this.state.newPostState)
      .then(response => {
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
        <View>
          <TouchableOpacity
            style={{ marginBottom: 30, justifyContent: 'center' }}
            onPress={() => this.props.navigation.navigate('Dashboard', { user: this.props.navigation.getParam('user') })}
          >
            <View
              style={{ justifyContent: 'center' }}
            >
              <Text
                style={{ fontSize: 15, margin: 10, color: '#074445', }}
              >User Name: {this.props.navigation.getParam('user').name} </Text>
              <View style={styles.stars}>
                {/* <Text>User Rating: </Text> */}
                <StarRating
                  maxStars={5}
                  rating={this.props.navigation.getParam('user').rating} // it should be this.props.userRating
                  starSize={13}
                  fullStarColor='gold'
                />
              </View>
              <View
                style={{ height: 2, backgroundColor: '#074445' }}
              >

              </View>
            </View>
          </TouchableOpacity>
          {/* <Button title = 'DashBoard' /> */}
        </View>
        {/* <View style={{ borderColer: '#31063D', borderRadius: 10, borderWidth: 2, margin: 20, width: 200 }}> */}
        <Card
        // wrapperStyle = {{borderColer: 'red'}}
        // baseColor='#074445'
        // textColor = 'blue'
        // itemColor = 'red'
        // selectedItemColor = '#900C3F'

        >
          <Dropdown
            baseColor='#900C3F'
            // textColor = 'blue'
            // itemColor = 'red'
            selectedItemColor='#3F082A'
            label='Sort By: '
            data={sortByData}
            // style = {{ }}
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
              baseColor='#40082A'
              selectedItemColor='#900C3F'
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
        </Card>
        {/* </View> */}



        {/* NewPost */}
        {/* <View style={{ borderColer: 'black', borderWidth: 2, margin: 20 }}> */}
        <ScrollView>
          <Card style={{ borderColer: 'blue', justifyContent: 'center' }}>
            <TextInput onChangeText={(task) => this.setState({ newPostState: { ...this.state.newPostState, task: task } })}
              label=' task ' style={{ borderColor: '#0C7576', borderWidth: 1, margin: 20, padding: 10, borderRadius: 7 }}
              placeholder=" Task Describtion.. "
              placeholderTextColor="#074445" />
            <TextInput onChangeText={(Price) => this.setState({ newPostState: { ...this.state.newPostState, Price: Price } })}
              label='price ' placeholder="Price"
              placeholderTextColor="#074445"
              style={{ borderColor: '#0C7576', borderWidth: 1, margin: 20, padding: 10, borderRadius: 7 }} />
            <Dropdown
              baseColor='#40082A'
              selectedItemColor='#900C3F'

              label='Categories'
              data={Categories}
              onChangeText={(Categories) => this.setState({ newPostState: { ...this.state.newPostState, Categories: Categories } })}
            />
            <Dropdown
              baseColor='#40082A'
              selectedItemColor='#900C3F'
              label='Is Urgent'
              data={[{ value: 'Urgent', }, { value: 'Schaduled', }]}
              onChangeText={isUrgent => { this.setState({ newPostState: { ...this.state.newPostState, IsUrgen: true } }) }
              }
            />
            <Dropdown
              baseColor='#40082A'
              selectedItemColor='#900C3F'

              onChangeText={(Location) => this.setState({ newPostState: { ...this.state.newPostState, Location: Location } })}
              label='Region'
              data={Location}
            />
            <View style={{ alignSelf: 'center' }}>
              <Button
                onPress={this._onPressButton}
                title="New Post"
                buttonStyle={{ backgroundColor: '#074445', marginTop: 40, width: 200 }}
              />
            </View>
          </Card>
        </ScrollView>
        {/* </View> */}



        {/* posts */}
        {/* style={{ borderColer: '#900C3F', borderWidth: 2, margin: 20, padding: 20 }} */}
        <View style={{ marginTop: 30, flexDirection: 'row-reverse'}}>
          <FlatList
            data={this.state.dataFlatlist}
            renderItem={({ item }) =>
              <View style={styles.ContainerView}>
                <View style={styles.listView}>
                  <Avatar rounded title='MG' />
                  <Text style={styles.NameView}> {item.serveceProvider} </Text>
                  <Text note style={styles.TimeView}> {item.time} </Text>
                </View>
                <View style={styles.listView}>
                  <StarRating
                    maxStars={5}
                    rating={item.userRating} // it should be this.props.userRating
                    starSize={15}
                    fullStarColor='gold'
                  />
                </View>
                <View style={styles.listView}>
                  <Text> {item.task} </Text>
                </View>
                <View style={styles.listView}>
                  <Text note> {item.serverProviderRating} </Text>
                </View>
                <View style={styles.listView}>
                  <Text>{item.price}</Text>
                </View>
                <View style={styles.listView}>
                </View>
                <View style={styles.listView}>
                  {item.isUrgent === true ? <Text>Urgent</Text> : <Text>Not Urgent</Text>}
                </View>
                <View style={styles.listView}>
                  <Text>
                    Categories: {item.categories}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Button
                    buttonStyle={{ marginTop: 15, width: 100, marginRight: 10 }}
                    title='book'
                    onPress={this.book.bind(this, item._id)}
                  >
                  </Button>
                  <TouchableOpacity
                    style={{ backgroundColor: "red", marginLeft: 10, marginTop: 15, width: 80, height: 40, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}
                    onPress={async () => {
                      let res = await axios.put(
                        `http://${codingAcademy}:9000/posts/report/${item._id}`
                      );
                      await this.setState({ myPosts: res.data, dataFlatlist: res.data });
                      console.log(item.reports);
                      if (item.reports >= 2) {
                        let res = await axios.put(
                          `http://${codingAcademy}:9000/posts/report2/${item._id}`
                        );
                        await this.setState({ myPosts: res.data, dataFlatlist: res.data });
                      }
                      alert("you report sent sucssesfully,, Thank you!");
                    }}
                  >
                    <Text style={{ color: 'white' }}>Report</Text>
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
    // backgroundColor: '#94948C',
    flex: 1,
    borderColor: '#900C3F',
    borderRadius: 10,
    borderWidth: 1,
    padding: 20,
    margin: 20,
  },
  listView: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 30,
  },
  TimeView: {
    position: 'absolute',
    right: 0
  },
  DropDown: {
    color: 'black',
    backgroundColor: '#fff',
  },
  NameView: {
    paddingTop: 7
  },
  stars: {
    // width: 40,
    alignItems: 'flex-start',
    margin: 10,
    flexDirection: 'row',
  }
});