import React, { Component } from "react";
import axios from "axios";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Entypo";
import { Input } from "react-native-elements";
import { Button } from "react-native-elements";

import {
  Text,
  StyleSheet,
  View,
  // Button,
  FlatList,
  TextInput,
  TouchableNativeFeedback,
  ImageBackground
} from "react-native";

const codingAcademy = '10.60.247.112'
const home = '192.168.1.92'
// const sakan = ''

class LoginScreen extends Component {
  state = {
    email: "",
    password: "",
    submittedEmail: "",
    submittedPassword: "",
    valid: false,
    focusNext: false
  };

  OnSubmit = async () => {
    await this.setState({
      submittedEmail: this.state.email,
      submittedPassword: this.state.password,
      email: "",
      password: ""
    });
    let res = await axios.post(`http://${home}:9000/users/getUsers`, {
      email: this.state.submittedEmail,
      password: this.state.submittedPassword
    });
    if (res.data.length !== 0) {
      await this.setState({
        valid: true,
        
      });

      this.props.navigation.navigate('UserHomeScreen',{user: res.data[0]})
    } else await this.setState({ valid: false });
    console.log(res.data[0]);
  };
  render() {
    return (
      <>
        <ImageBackground
          // source={require("./images/background.png")}
          style={{ width: "100%", height: "100%", backgroundColor: "#FFFFFF" }}
        >
          <View
            style={{ flex: 1, backgroundColor: "#c7fcfe" }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 28,
                fontWeight: "bold",
                marginTop: 38
              }}
            >
              بخدمتك
            </Text>
            <View style={styles.container}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 21,
                  fontWeight: "bold",
                  marginBottom: 15
                }}
              >
                Login Users
              </Text>
              <View style={styles.emailView}>
                {/* <Text>Email</Text> */}
                <Input
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoFocus={true}
                  onChangeText={newValue => this.setState({ email: newValue })}
                  placeholder="Please Enter Your Email"
                  value={this.state.email}
                  inputStyle={styles.emailInput}
                  keyboardType="email-address"
                  returnKeyType="go"
                  dataDetectorType="email"
                  leftIcon={<Icon2 name="user" size={24} color="black" />}
                  inputContainerStyle={{
                    width: "95%",
                    backgroundColor: "white"
                  }}
                  onSubmitEditing={async () => {
                    await this.setState({ focusNext: true });
                    this.secondTextInput.focus();
                  }}
                  blurOnSubmit={false}
                  // containerStyle={{ fontSize: 12 }}
                  //   onFocus={() => true}
                />
              </View>
              <View style={styles.passwordView}>
                {/* <Text>Password</Text> */}
                <Input
                  blurOnSubmit={false}
                  autoFocus={this.state.focusNext}
                  ref={input => {
                    this.secondTextInput = input;
                  }}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={newValue =>
                    this.setState({ password: newValue })
                  }
                  placeholder="Please Enter Your Password"
                  value={this.state.password}
                  inputStyle={styles.passwordInput}
                  secureTextEntry={true}
                  returnKeyType="send"
                  inputContainerStyle={{
                    width: "95%",
                    backgroundColor: "white"
                  }}
                  leftIcon={
                    <Icon name="key" size={24} color="black" iconStyle={{}} />
                  }
                  onSubmitEditing={() => {
                    this.setState({ focusNext: false });
                    this.OnSubmit();
                  }}
                />
              </View>

              <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
                <Button
                  buttonStyle={{
                    borderRadius: 10
                  }}
                  title="Login"
                  onPress={this.OnSubmit}
                />
              </View>
              {/* <Text> {this.state.submittedEmail} </Text>
              <Text> {this.state.submittedPassword} </Text> */}
              <Text>
                {this.state.submittedEmail !== "" ||
                this.state.submittedPassword !== ""
                  ? this.state.valid
                    ? "VALID"
                    : "NOTVALID"
                  : null}
                {/* {this.state.focusNext ? "TRUE" : "FALSE"} */}
              </Text>
            </View>
          </View>
          <Button
                  buttonStyle={{
                    borderRadius: 10,
                  }}
                  title="Dont have account!"
                  onPress={() => this.props.navigation.navigate('SignupScreen')}
                />
        </ImageBackground>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 278,
    marginTop: "25%",
    borderColor: "black",
    borderWidth: 1,
    // marginLeft: "20%"
    alignSelf: "center",
    flexDirection: "column",
    borderRadius: 10
  },
  emailView: {
    // flexDirection: "row"
    marginBottom: 22
  },
  emailInput: {
    // borderColor: "black",
    // borderWidth: 1,
    fontSize: 15,
    marginLeft: 10,
    backgroundColor: "white"
  },
  passwordView: {
    flexDirection: "row",
    marginBottom: 15
  },
  passwordInput: {
    // borderColor: "black",
    // borderWidth: 1,
    fontSize: 15,
    marginLeft: 10,
    backgroundColor: "white"
  }
});

export default LoginScreen;
