import React from "react";
import {StyleSheet, View, TouchableOpacity, Image, Text} from "react-native"
import storage from "@react-native-firebase/storage";
import { testFunc } from "../firebase/firebase";

const myStorageRef = storage().ref('Atb-9PMAEST-Edit.mp3');

const ShowMusicScreen = () => {
    return (
        <View style={styles.viewStlye}>
            <Image  
                style={styles.iconImage} 
                source={require('../../assets/testlogo.jpg')} 
                />
            <View style={styles.cPlayer}>
                <TouchableOpacity style={styles.roundButton2}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.roundButton1} onPress={() => console.log(testFunc())}>
                    <Text>Play</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.roundButton2}>
                    <Text>Forward</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStlye: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderWidth: 1,
    },
    iconImage: {
        width: 220,
        height: 220,
        borderWidth: 1,
        alignSelf: 'center',
    },
    roundButton1: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#6913ab',
        margin: 2,
      },
    cPlayer: {
        width: 300,
        top: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        
    },
    roundButton2: {
        width: 50,
        height: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 7,
        borderRadius: 100,
        backgroundColor: '#1225fb',
    }

});

export default ShowMusicScreen;