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
  image:{
    width:450,
    height: 250,

  },
  image2:{
    width:450,
    height: 290,

  },
    container: {
      flex: 1,
      backgroundColor: 'lightgreen',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      borderBottomWidth: 2,
      paddingTop: 20,
      backgroundColor: 'palegoldenrod',
      width: '80%',
      alignSelf: 'center',
      marginTop: 25,
      borderRadius: 20
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
    },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
      },
      buttonOpen: {
        backgroundColor: "cornflowerblue",
        width: "50%",
        borderRadius: 20
      },
      buttonOpen2: {
        backgroundColor: "black",
        width: "50%",
        borderRadius: 20
      },
      buttonClose: {
        backgroundColor: "black",
        width: "80%",
        borderRadius: 10
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: 'center',
        paddingBottom: 9
      },
      input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
      },
      style1: {
        borderBottomWidth: 2,
        paddingTop: 10,
        
      },
      button: {
        paddingTop: 10,
        borderRadius: 1,
        textAlign: 'center',
      },
  
      button2: {
        backgroundColor: 'seagreen',
        width: 200,
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 10
      },
      buttonOutline: {
          
        marginTop: 5,
        borderColor: 'black',
        borderWidth: 5,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
      input112: {
        margin: 15,
        height: 40,
        borderWidth: 1,
        padding: 10,
     },
     submitButton: {
        backgroundColor: '#ff6666',
        padding: 10,
        margin: 15,
        height: 40,
     },
     submitButtonText:{
        textAlign: "center",
        color: 'white',
        fontSize: 18,
     },
     output112:{
        textAlign: "center",
        fontSize: 20,
     },
     title:{
        paddingTop:30,
        paddingBottom:10,
        textAlign: "center",
        fontSize: 30,
        fontWeight:"bold",
     },
     resultText:{
        textAlign: "center",
        fontSize: 30,
        color: 'red'
     },
     label:{
        marginLeft: 15,
     },
     containernew: {
      flex: 1,
      backgroundColor: 'khaki',
      justifyContent: 'center',
    },
  });

