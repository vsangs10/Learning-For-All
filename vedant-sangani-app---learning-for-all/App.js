import * as React from 'react';
import { Text, View, StyleSheet, Platform, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Account from './screens/Account.js';
import Home from './screens/Home.js';
import Login from './screens/Login.js';
import Post from './screens/Post.js';
import Signup from './screens/Signup.js';
import Comments from './screens/Comments.js';
import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";


if (!firebase.apps.length){
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBflZlrYP0nzvDEBCIUCOefXzSp5420bQM",
    authDomain: "learning-for-all-da375.firebaseapp.com",
    projectId: "learning-for-all-da375",
    storageBucket: "learning-for-all-da375.appspot.com",
    messagingSenderId: "443445363988",
    appId: "1:443445363988:web:75236c37cbdf30b7c7ae01",
    measurementId: "G-QG5RTEHBYX"
  };
  firebase.initializeApp(firebaseConfig)
}

const webPreviewWidth = 300;
const webPreviewHeight = 550;
const screenWidth =
  Platform.OS === 'web' ? webPreviewWidth : Dimensions.get('screen').width;
const screenHeight =
  Platform.OS === 'web'
    ? webPreviewHeight
    : Dimensions.get('screen').height - Constants.statusBarHeight;

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer screenOptions={{ headerMode: 'none' }}>
    <View style={styles.container}></View>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{animationEnabled: false, headerShown: false}}>
          <Stack.Screen name = 'Home' component = {Home} />
          <Stack.Screen name = 'Account' component = {Account} />
          <Stack.Screen name = 'Login' component = {Login} />
          <Stack.Screen name = 'Post' component = {Post} />
          <Stack.Screen name = 'Signup' component = {Signup} />
          <Stack.Screen name = 'Comments' component = {Comments} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    //height: screenHeight,
    //width: screenWidth,
    backgroundColor: '#48cae4',
    paddingTop: Constants.statusBarHeight,
  },
});
