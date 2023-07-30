import * as React from 'react';
import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Linking
} from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Text style={styles.allpagetitle}>Learning For All</Text>
      <Text style={styles.maintext}>
        Welcome to learning for all! Click on the different subject pages to see
        new posts, or even post your own questions!
      </Text>

      <View style={styles.buttoncontainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signUpText}>Signup</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.totalCategories}>
        <View style={styles.categories}>
          <TouchableOpacity
            style={styles.categoryButton}>
            <Text style={styles.categoryText}>Math</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.categoryButton}>
            <Text style={styles.categoryText}>Science</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.categoryButton}>
            <Text style={styles.categoryText}>History</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categories}>
          <TouchableOpacity
            style={styles.categoryButton}>
            <Text style={styles.categoryText}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.categoryButton}>
            <Text style={styles.categoryText}>Computer Science</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.categoryButton}>
            <Text style={styles.categoryText}>Language</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.imagecontainer}
        onPress={() => Linking.openURL('https://youtube.com/')}>
        <Image source={require('../assets/booksagain.png')} style={styles.image}/>
      </TouchableOpacity>

      <View style={styles.navigationcontainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Account')}
          style={styles.navigbutton}>
          <Text style={styles.navigText}>Account Page</Text>
        </TouchableOpacity>
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
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#edf2fb',
  },
  allpagetitle: {
    padding: 20,
    fontSize: 39,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#48cae4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontFamily: 'timesnewromans',
    fontSize: 19,
    textAlign: 'center',
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttoncontainer: {
    flex: 1.5,
    backgroundColor: '#ade8f4',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    flex: 1,
    backgroundColor: '#000080',
    margin: 20,
    borderRadius: 25,
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    padding: 10,
  },
  signUpButton: {
    flex: 1,
    backgroundColor: '#000080',
    margin: 20,
    borderRadius: 25,
  },
  signUpText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    padding: 10,
  },

  totalCategories: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  categories: {
    flex: 1,
    backgroundColor: '#023e8a',
    justifyContent: 'center',
  },
  categoryButton: {
    backgroundColor: '#56cfe1',
    borderRadius: 25,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    padding: 10,
  },

  imagecontainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
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

  text: {
    // Text styles
    fontFamily: 'arial',
    fontSize: 30,
    lineHeight: 33,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    // View styles
    backgroundColor: 'deepskyblue',
    borderRadius: 25,
    padding: 16,
  },
  text1: {
    // Text styles
    fontFamily: 'timesnewromans',
    fontSize: 17,
    lineHeight: 29,
    fontWeight: '50',
    textAlign: 'center',
    color: 'black',
    // View styles
    backgroundColor: 'beige',
  },
});
