import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
 
const comments = ({ navigation }) => {
 
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [faqs, setFAQs] = useState([]); // Initial empty array of faqs
 
  useEffect(() => {
    const getFaqs = firebase
      .firestore()
      .collection('FAQS')
      .orderBy('createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const faqs = [];
        console.log(faqs);
 
        querySnapshot.forEach((documentSnapshot) => {
          faqs.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setFAQs(faqs);
        setLoading(false);
      });
 
    // Unsubscribe from events when no longer in use
    return () => getFaqs();
  }, []);
 
  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.page}>
      <Text style={styles.allpagetitle}>Learning For All</Text>
      <Text style={styles.pageTitle}>Comments Page</Text>
      <View style={styles.commentsbox}>
        <FlatList data = {faqs} 
          style={styles.viewList}
          renderItem = {({item}) => (
            <View style={styles.indivcomment}>
              <Text style={{textAlign: 'center', marginRight: 10, marginLeft: 10, marginTop: 10}}>Post Title: {item.name}</Text>
              <Text style={{margin: 10,}}>Post Question: {item.question}</Text>
            </View>
          )}
        />
      </View>
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
          onPress={() => navigation.navigate('Home')}
          style={styles.navigbutton}>
          <Text style={styles.navigText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};
export default comments;
 
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#edf2fb',
  },
  pageTitle: {
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
    marginBottom: 5,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  allpagetitle: {
    padding: 18.8,
    fontSize: 39,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#48cae4',
    alignItems: 'center',
  },
  commentsbox :{
    flex: 6, 
    backgroundColor: 'edf2fb',
  },
  viewList: {
    margin: 10,
  },
  indivcomment: {
    margin: 10,
    marginBottom: 20,
    borderWidth: 1,
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
