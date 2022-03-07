import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app'


const user = await firestore().collection('users').doc('nzluAU2Sgrd9qI5DeGQX').get();


export const testFunc = () => {
    // return userAuth.firestore().cocollection('users').get('Giga');
    return userDocument.data();
}
