import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

export function addFAQ(faq, addComplete) {
  firebase
    .firestore()
    .collection('FAQS')
    .add({
      name: faq.name,
      question: faq.question,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then((snapshot) => snapshot.get())
    .catch((error) => console.log(error));
}