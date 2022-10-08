import React, {useState,useEffect} from 'react';
import { TouchableOpacity,Pressable,SafeAreaView, KeyboardAvoidingView,StyleSheet, Text, TextInput, View,FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {  auth } from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';

const Exercises = ({navigation,route}) => {
    //const navigation = useNavigation()
    var list = []
    list = route.params.exercise
    console.log(list)

    
    return (
        <View style={styles.container}>
            <FlatList
              data={list}
              renderItem={({item}) =>  (
                <View style={styles.container2}>
                  <Text>{item.workoutName}</Text>
                  <Text>{item.exerciseName}</Text>
                  <Text>{item.exerciseName2}</Text>
                  <Text>{item.exerciseName3}</Text>
                </View>
              )}
            />
        </View>
    )
}

export default Exercises

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'khaki',
    },
    container2: {
      
        backgroundColor: 'palegoldenrod',
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 25,
        borderRadius: 20
    },
    input: {
      backgroundColor: 'chartreuse',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    styleeye: {
      backgroundColor:'chartreuse' ,
      justifyContent: 'center',
      alignContent: 'center',
      borderRadius: 10,
      marginTop: 5,
      width: 27,
      alignSelf: 'center'
    },
    style1: {
        borderBottomWidth: 2,
        fontStyle: 'italic',
        
      },
      style2: {
        paddingTop: 30,
        alignContent: 'space-between'
      },
      style3: {
        paddingTop: 5,
        paddingBottom: 5,
        width: '50%',
        alignContent: "center",
        fontWeight: 'bold',
      },
      style4: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        alignContent: "center"
      },
      button: {
        paddingTop: 10,
        borderRadius: 50,
        textAlign: 'center'
      },
      buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
      button2: {
        backgroundColor: 'green',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
      buttonOutline: {
        backgroundColor: 'green',
        marginTop: 5,
        borderColor: 'goldenrod',
        borderWidth: 2,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
      buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
      },
      extra: {
        flexDirection: 'row',
        paddingTop: 10,
      },
  });
