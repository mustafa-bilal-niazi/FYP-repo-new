import React, {useState,useEffect} from 'react'
import { TouchableOpacity,Pressable,SafeAreaView, KeyboardAvoidingView,StyleSheet, Text, TextInput, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import {  auth } from '../firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios'
const mealplans = ({route}) => {
  const navigation = useNavigation()
  // const {useremail}=route.params;
var breakfast=[]
var lunch=[]
var dinner=[]
var snacks=[]
  const readData = ( ) =>{
    console.log("Getting")
    axios({ 
      method:'GET',
      url:"http://192.168.1.6:5000/diets/getdiets",
      })
      .then(response =>{
        console.log(response.data)
        breakfast = response.data[0]
        lunch = response.data[1]
        dinner = response.data[2]
        snacks =  response.data[3]
        console.log(dinner)
      })
      .catch(e =>{
        console.log(e)
      }) 
  }
  useEffect(() => {
    // Update the document title using the browser API
    readData()
  });
  return (
        
    <View style={styles.container}>
      
        <TouchableOpacity onPress={()=>navigation.navigate('Meals', {meal: breakfast})} style={[styles.button2,styles.buttonOutline]}>
          <Text style={styles.buttonText}>
              Breakfast
          </Text>
        </TouchableOpacity>          
        <TouchableOpacity onPress={()=>navigation.navigate('Meals', { meal: lunch})} style={[styles.button2,styles.buttonOutline]}>
          <Text style={styles.buttonText}>
              Lunch
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Meals', {meal: snacks})} style={[styles.button2,styles.buttonOutline]}>
          <Text style={styles.buttonText}>
              Snacks
          </Text>
        </TouchableOpacity>          
        <TouchableOpacity onPress={()=>navigation.navigate('Meals', { meal: dinner})} style={[styles.button2,styles.buttonOutline]}>
          <Text style={styles.buttonText}>
              Dinner
          </Text>
        </TouchableOpacity>
      
    </View>
)
  }

export default mealplans

const styles = StyleSheet.create({
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