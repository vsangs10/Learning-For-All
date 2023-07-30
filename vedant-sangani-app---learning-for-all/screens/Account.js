import * as React from 'react';
import Constants from 'expo-constants';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Pressable,
  StyleSheet,
  Image,
  Button,
  Linking,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import logo from '../assets/defaultprofile.jpeg';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const Account = ({ navigation }) => {
  const [value, onChangeText] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [emailAddress, setEmailAddress] = React.useState('');
  const [hobbies, setHobbies] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [address, setAddress] = React.useState('')

  React.useEffect(() => userInfo());

  const userInfo = () => {
    var db = firebase.firestore();
    var user = firebase.auth().currentUser;
    const uid = user.uid;
    db.collection('users')
      .doc(uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          var data = doc.data();
          setFirstName(data.firstName);
          setLastName(data.lastName);
          setEmailAddress(data.email);
          setHobbies(data.hobbies);
          setPhoneNumber(data.phoneNumber);
          setAddress(data.address);
        }
      })
      .catch(function (error) {
        console.log('Error getting documents: ', error)
      });
  };

  const signOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("User logged out!");
        alert("You have signed out");
        navigation.navigate('Login');
      })
      .catch((error) => {
        alert(error);
      })
  };

  return (
    <View style={styles.page}>
      <Text style={styles.allpagetitle}>Learning For All</Text>
      <Text style={styles.pageTitle}>Account Page</Text>
      <Image style={styles.pfp} source={logo}/>
      <View>
        <Text style={styles.text}>First Name: {firstName}</Text>
        <Text style={styles.text}>Last Name: {lastName}</Text>
        <Text style={styles.text}>Email: {emailAddress}</Text>
        <Text style={styles.text}>Hobbies: {hobbies}</Text>
        <Text style={styles.text}>Phone Number: {phoneNumber}</Text>
        <Text style={styles.text}>Address: {address}</Text>
      </View>
      <View style={{flex: 2, backgroundColor: 'edf2fb', alignItems: 'center', margin: 20}}>
        <TouchableOpacity 
          style={styles.logoutbutton} 
          onPress={() => signOutUser()}>
          <Text style={styles.navigText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navigationcontainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Post')}
          style={styles.navigbutton}>
          <Text style={styles.navigText}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Comments')}
          style={styles.navigbutton}>
          <Text style={styles.navigText}>Comments</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.navigbutton}>
          <Text style={styles.navigText}>Home</Text>
        </TouchableOpacity>
      </View>   
    </View>
  );
};
 
export default Account;
 
const styles = StyleSheet.create({
  pfp: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "#edf2fb",
    margin: 20,
  },
  page: {
    flex: 1,
    backgroundColor: '#edf2fb',
  },
  pageTitle: {
    margin: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  allpagetitle: {
    padding: 20,
    fontSize: 39,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#48cae4',
    alignItems: 'center',
    margin: 0,
  },
  text: {
    fontSize: 20,
    marginLeft: 20,
    margin: 5,
  },
  logoutbutton: {
    backgroundColor: 'steelblue',
    borderRadius: 25,
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