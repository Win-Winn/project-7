import React, { Component } from "react";
import axios from "axios";
import {
  Text,
  StyleSheet,
  View,
  Button,
  FlatList,
  TextInput,
  TouchableNativeFeedback
} from "react-native";

class SignupScreen extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    submittedEmail: "",
    submittedPassword: "",
    submittedName: "",
    submittedPhoneNumber: ""
  };

  OnSubmit = async () => {
    await this.setState({
      submittedEmail: this.state.email,
      submittedPassword: this.state.password,
      submittedName: this.state.name,
      submittedPhoneNumber: this.state.phoneNumber,
      email: "",
      password: "",
      name: "",
      phoneNumber: ""
    });
    let res = await axios.post("http://10.60.247.112:9000/users/CreateUser", {
      email: this.state.submittedEmail,
      password: this.state.submittedPassword,
      name: this.state.submittedName,
      phoneNumber: this.state.submittedPhoneNumber
    });
    this.props.navigation.navigate('LoginScreen')
    console.log(res.data);
  };
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={{ textAlign: "center" }}>Signup</Text>
          <View style={styles.passwordView}>
            <Text>Email</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={newValue => this.setState({ email: newValue })}
              placeholder="PLease Enter Your Email"
              value={this.state.email}
              style={styles.emailInput}
              keyboardType="email-address"
              dataDetectorType="email"
              //   onFocus={() => true}
            />
          </View>
          <View style={styles.passwordView}>
            <Text>Password</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={newValue => this.setState({ password: newValue })}
              placeholder="PLease Enter Your Email"
              value={this.state.password}
              style={styles.passwordInput}
              secureTextEntry={true}
              returnKeyType="next"
              onSubmitEditing={() => {
                this.OnSubmit();
              }}
            />
          </View>
          <View style={styles.passwordView}>
            <Text>Name</Text>
            <TextInput
              //   autoCapitalize="none"
              autoCorrect={false}
              onChangeText={newValue => this.setState({ name: newValue })}
              placeholder="PLease Enter Your Name"
              value={this.state.name}
              style={styles.passwordInput}
              //   secureTextEntry={true}
              returnKeyType="next"
              //   onSubmitEditing={() => {
              //     this.OnSubmit();
              //   }}
            />
          </View>
          <View style={styles.passwordView}>
            <Text>Phone</Text>
            <TextInput
              //   autoCapitalize="none"
              autoCorrect={false}
              onChangeText={newValue =>
                this.setState({ phoneNumber: newValue })
              }
              placeholder="PLease Enter Your Phone Number"
              value={this.state.phoneNumber}
              style={styles.passwordInput}
              keyboardType="phone-pad"

              //   secureTextEntry={true}
              //   returnKeyType="Submit"
              //   onSubmitEditing={() => {
              //     this.OnSubmit();
              //   }}
            />
          </View>
          <Button
            style={{ marginTop: 15 }}
            title="SignUp"
            onPress={this.OnSubmit}
          />
          <Text> {this.state.submittedEmail} </Text>
          <Text> {this.state.submittedPassword} </Text>
          <Text> {this.state.submittedName} </Text>
          <Text> {this.state.submittedPhoneNumber} </Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 240,
    marginTop: "25%",
    borderColor: "black",
    borderWidth: 1,
    marginHorizontal: 40
  },
  emailView: {
    flexDirection: "row"
  },
  emailInput: {
    borderColor: "black",
    borderWidth: 1
  },
  passwordView: {
    flexDirection: "row",
    marginBottom: 15
  },
  passwordInput: {
    borderColor: "black",
    borderWidth: 1
  }
});

export default SignupScreen;
