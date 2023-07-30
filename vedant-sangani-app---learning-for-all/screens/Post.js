import * as React from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { addFAQ } from '../api/FaqsApi';
 
export default class Posts extends React.Component {
  state = {
    currentFAQname: null,
    currentFAQquest: null,
  };
 
  checkEmpty = () => {
    if (this.state.currentFAQname === null)
      return alert('Please Enter a Title for your Post');
    else if (this.state.currentFAQquest === null)
      return alert('Please enter your Question/Comment');
    else
      addFAQ({ // addFaq function was made in the FaqsApi. This takes the input value (currentFAQname) and assigns it to name. To refer back to it later, we will need to use faq.name since that's what is assigned in our addFaq function
        name: this.state.currentFAQname,
        question: this.state.currentFAQquest,
      }),
        this.qustInput.clear(),
        this.nameInput.clear(), 
        this.setState((prevState) => ({
          currentFAQname: (prevState.currentFAQname = null), // resets the value of our input to null so another input can be made
        })), // reset value to null
        this.setState((prevState) => ({
          currentFAQquest: (prevState.currentFAQquest = null), // resets the value of our input to null so another input can be made
        })), // reset value to null
        alert('Your post has been sent') // Let the user know that there post was successfully sent
  };
 
  render() {
    return (
      <View
        style={styles.page}
        keyboardShouldPersistTaps="handled">
          <Text style={styles.allpagetitle}>Learning For All</Text>
          <Text style={styles.pageTitle}>Post Page</Text>
          <View style={styles.postField}>
            <TextInput
              style={styles.input}
              placeholderTextColor={'#0096c7'}
              ref={(input) => {
                this.nameInput = input;
              }}
              placeholder="Title your Text"
              multiline={true}
              value={this.state.currentFAQname}
              onChangeText={(title) =>
                this.setState((prevState) => ({
                  currentFAQname: (prevState.currentFAQname = title),
                }))
              }
            />
            <TextInput
              style={styles.input2}
              placeholderTextColor={'#0096c7'}
              ref={(input) => {
                this.qustInput = input;
              }}
              placeholder="Write whatever placeholder you would like"
              multiline={true}
              value={this.state.currentFAQquest}
              onChangeText={(quest) =>
                this.setState((prevState) => ({
                  currentFAQquest: (prevState.currentFAQquest = quest),
                }))
              }
            />
          </View>

          <View>
            <Pressable style={styles.button} title="Submit" onPress={() => this.checkEmpty()}>
              <Text style={styles.buttontext}>Post Now</Text>
            </Pressable>
          </View>
          <View style={{flex: 3, backgroundColor: 'edf2fb'}}/>

          <View style={styles.navigationcontainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Account')}
              style={styles.navigbutton}>
              <Text style={styles.navigText}>Account Page</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
              style={styles.navigbutton}>
              <Text style={styles.navigText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}
              style={styles.navigbutton}>
              <Text style={styles.navigText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Comments')}
              style={styles.navigbutton}>
              <Text style={styles.navigText}>Comments</Text>
            </TouchableOpacity>
          </View>

      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#edf2fb',
  },
  inputField: {
    border: 'solid',
    margin: '1%',
  },
  pageTitle: {
    margin: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  allpagetitle: {
    padding: 20,
    fontSize: 39,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#48cae4',
    alignItems: 'center',
  },
  postField: {
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: 200,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'white',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  input2: {
    height: 100,
    width: 300,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'white',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#000080',
    margin: 20,
    borderRadius: 25,
  },
  buttontext: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    padding: 10,
  },
  navigationcontainer: {
    flex: 1,
    backgroundColor: '#ade8f4',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  navigbutton: {
    backgroundColor: 'steelblue',
    borderRadius: 25,
  },
  navigText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    padding: 10,
  },
});
