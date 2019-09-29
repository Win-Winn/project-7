import React, { Component, Fragment } from 'react';
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

import { Dropdown } from 'react-native-material-dropdown';
import axios from 'axios';
// import CalendarPicker from 'react-native-calendar-picker';

const codingAcademy = '10.60.247.112'
const home = '192.168.1.92'
// const sakan = ''

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

const Categories = [{
  value: 'Cleaning',
}, {
  value: 'Shopping',
}, {
  value: 'Kids Need',
}]


class EmadApp extends Component {

  state = {
    user: this.props.user.name,
    task: '',
    time: new Date(),
    categories: '',
    price: '',
    isUrgent: true,
    scheduledDate: '',
    location: '',
    booking: false,
    userRating: this.props.user.rating,
    serveceProviderRating: 2,
    serveceProvider: '',
  }


  _onPressButton = () => {
    axios.post(`http://${codingAcademy}:9000/posts/newPost`, this.state)
      .then(response => {
        // this.set
        console.log('newpost', response)
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
  render() {

    return (
      <Fragment>
        <ScrollView>
          <Text>Emad</Text>
          <TextInput onChangeText={(AmountRequired) => this.setState({ task: AmountRequired })}
            label=' task ' style={{ borderColor: 'black', borderWidth: 1, margin: 20 }}
            placeholder=" task"
            placeholderTextColor="black" />
          <TextInput onChangeText={(price) => this.setState({ price: price })}
            label='price ' placeholder="price"
            placeholderTextColor="black"
            style={{ borderColor: 'black', borderWidth: 1, margin: 20 }} />
          {/* <TextInput onChangeText={ (time) => this.setState({time:time})}
                  label='Is Urgent?!' placeholder="time"
                  placeholderTextColor="black"
                  style={{ borderColor: 'black', borderWidth: 1,margin:20 }} /> */}
          <Dropdown
            label='Categories'
            data={Categories}
            onChangeText={(value) => this.state.categories = value}
          />
          <Dropdown
            label='Is Urgent'
            data={[{ value: 'Urgent', }, { value: 'Schaduled', }]}
            onChangeText={(value) => this.state.categories = value}
          />

          <TextInput onChangeText={(location) => this.setState({ location: location })}
            label='location ' placeholder="location"
            placeholderTextColor="black"
            style={{ borderColor: 'black', borderWidth: 1, margin: 20 }} />
          <Dropdown
            onChangeText={(city) => this.setState({ location: city })}
            label='Region'
            data={data}
          />

          {/* <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }>
            <Picker.Item label="location" />
            {
              data.map(item => (
                <Picker.Item key={item.value} label={item.value} value={item.value} />

              ))
            }
          </Picker> */}
          {/* <View style = {{
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  }}>
          <CalendarPicker
          onDateChange={this.onDateChange}
        />
        </View> */}

          <Button
            onPress={this._onPressButton}
            title="New Post"
          />
        </ScrollView>
      </Fragment>
    );
  }
};


export default EmadApp;