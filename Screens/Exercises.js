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
              <View>
                <View style={styles.container2}>
                  <Text>Muscle: {item.workoutName}</Text>
                </View>
                <View style={styles.containernew}>
                  <View style={{marginTop: 10}}>
                    <Text>Exercise 1: </Text>
                    <Text>{item.exerciseName}</Text>
                  </View>
                  
                  <Text>Sets: 4</Text>
                  <Text>Repititions: 12</Text>
                  <View style={{marginTop: 10}}>
                    <Text>Exercise 2: </Text>
                    <Text>{item.exerciseName2}</Text>
                  </View>
                  <Text>Sets: 4</Text>
                  <Text>Repititions: 10</Text>
                  <View style={{marginTop: 10}}>
                    <Text>Exercise 3: </Text>
                    <Text>{item.exerciseName3}</Text>
                  </View>
                  <Text>Sets: 3</Text>
                  <Text>Repititions: 10</Text>
                  <View style={[{flexDirection: 'row'},{marginTop: 10}]}>
                  <TouchableOpacity
                    
                    style={[styles.button2,styles.buttonOutline]}>
                    <Text style={styles.buttonText}>
                        Fav
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    
                    style={[styles.button2,styles.buttonOutline]}>
                    <Text style={styles.buttonText}>
                        Review
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    
                    style={[styles.button2,styles.buttonOutline]}>
                    <Text style={styles.buttonText}>
                        Rating
                    </Text>
                </TouchableOpacity>
                  </View>

                  
                </View>
                
              </View>
              )}
            />
            
        </View>
      );
      
    
    
    

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
      backgroundColor: 'seagreen',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    container2: {
      borderBottomWidth: 4,
      backgroundColor: 'white',
      width: 300,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      fontWeight: 'bold',
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
        width: 100,
        height: 70,
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
      fontSize: 33,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
    },
  });

