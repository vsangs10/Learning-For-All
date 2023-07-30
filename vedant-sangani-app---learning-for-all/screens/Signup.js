import * as React from 'react';
import { Text, View, Pressable, StyleSheet, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const Signup = ({ navigation }) => {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [hobbies, setHobbies] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [address, setAddress] = React.useState('')

  const onSignupPress = () => {
    if (password != confirmPassword){
      alert("Passwords do not match")
      return
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const data = {
          id: uid, 
          email, 
          firstName, 
          lastName,
          hobbies,
          phoneNumber,
          address,
        };
        const usersRef = firebase.firestore().collection('users')
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            alert("Account Created!")
            navigation.navigate('Home')
          })
          .catch((error) => {
            alert(error)
          });
      })
      .catch((error) => {
        alert(error)
      });
  };

  return (
    <View style={styles.page}>
      <Text style={styles.allpagetitle}>Learning For All</Text>
      <Text style={styles.pageTitle}>Signup Page</Text>
      <Text style={styles.otherwise}>Sign up to join our family</Text>
      <View style={styles.signInField}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor={'#0096c7'}
          value={firstName}
          onChangeText={(firstName) => setFirstName(firstName)}/>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor={'#0096c7'}
          value={lastName}
          onChangeText={(lastName) => setLastName(lastName)}/>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={'#0096c7'}
          value={email}
          onChangeText={(email) => setEmail(email)}/>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={'#0096c7'}
          value={password}
          onChangeText={(password) => setPassword(password)}/>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor={'#0096c7'}
          value={confirmPassword}
          onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}/>
        <TextInput
          style={styles.input}
          placeholder="Hobbies"
          placeholderTextColor={'#0096c7'}
          value={hobbies}
          onChangeText={(hobbies) => setHobbies(hobbies)}/>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor={'#0096c7'}
          value={phoneNumber}
          onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}/>
        <TextInput
          style={styles.input}
          placeholder="Address"
          placeholderTextColor={'#0096c7'}
          value={address}
          onChangeText={(address) => setAddress(address)}/>
      </View>

      <TouchableOpacity 
        onPress={() => onSignupPress()}
        style = {styles.button}>
        <Text style={styles.buttontext}>Signup</Text>
      </TouchableOpacity>
      

      <View style={styles.navigationcontainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.navigbutton}>
          <Text style={styles.navigText}>Back</Text>
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
 
export default Signup;
 
const styles = StyleSheet.create({
  page: {
    flex: 1,
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
  signInField: {
    alignItems: 'center',
  },
  otherwise: {
    fontSize: 20,
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