import * as React from 'react';
import {Text, View, Pressable, StyleSheet, Image, TextInput, ScrollView, Button, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const Login = ({ navigation }) => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then((response) => {
        const uid = response.user.uid;
        const usersRef = firebase.firestore().collection('users');
        alert("Logged In");
        navigation.navigate('Home')
      })
      .catch((error) => {
        alert(error);
      })
    }

  return (
    <View style={styles.page}>
      <Text style={styles.allpagetitle}>Learning For All</Text>
      <Text style={styles.pageTitle}>Login Page</Text>
      <View style={styles.signInField}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={'#0096c7'}
          value={username}
          onChangeText={(username) => onChangeUsername(username)}/>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={'#0096c7'}
          value={password}
          onChangeText={(password) => onChangePassword(password)}
          secureTextEntry={true}/>
      </View>
      
      <TouchableOpacity 
        onPress={() => onLoginPress()}
        style = {styles.button}>
        <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>
    
      <Text style={styles.otherwise}>Don't have an account yet? </Text>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Signup')}
        style = {styles.button}>
        <Text style={styles.buttontext}>Signup</Text>
      </TouchableOpacity>

      <Text style={styles.otherwise}>Enjoy your time at Learning For All</Text>

      <View style={styles.imagecontainer}>
        <Image source={require('../assets/booksagain.png')} style={styles.image}/>
      </View>

      <View style={styles.navigationcontainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Post')}
          style={styles.navigbutton}>
          <Text style={styles.navigText}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.navigbutton}>
          <Text style={styles.navigText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Comments')}
          style={styles.navigbutton}>
          <Text style={styles.navigText}>Comments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
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
  signInField: {
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'white',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  allpagetitle: {
    padding: 20,
    fontSize: 39,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#48cae4',
    alignItems: 'center',
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
  otherwise: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },
  imagecontainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
    marginTop: 10,
  },
  image: {
    width: 150,
    height: 150,
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