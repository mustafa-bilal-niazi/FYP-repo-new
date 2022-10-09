import React, { useState } from 'react'
import { RefreshControl,Alert ,TouchableOpacity,SafeAreaView ,TextInput,Pressable, Modal ,Button, StyleSheet, Text, View,Image, } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { onAuthStateChanged,  signOut} from 'firebase/auth'
import { auth } from '../firebase';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { db } from '../firebase-cruds';
import {collection, doc, updateDoc, addDoc, getDocs, deleteDoc} from 'firebase/firestore'
import { useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchBar from '../elements/searchbar';
import { KeyboardAvoidingView } from 'react-native-web';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function ServiceScreen  ({route}) {


  
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  //const {useremail}=route.params;
 // const userpassedID=JSON.stringify(useremail);

  const handleLogout = async() => {
    await signOut(auth)
  }

  const delogger=()=>{
    handleLogout
    {navigation.navigate('Login')}
  }
  
  function Profile({navigation}) {
  
    const [Weight,setWeight]=useState('')
    const [Height,setHeight]=useState('')
    const [BMI, setBMI]=useState('')
    const [BMIresult, setBMIresult]=useState('')

    const calculate = (height, weight) => {
      //calculation
      var result = (parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height));
      result = result.toFixed(2);
      setBMI(result)
      //display result
      if(result<18.5){
         setBMIresult('Underweight')
      }
      else if(result>=18.5&&result<25){
        setBMIresult('Normal weight')
      }
      else if(result>=25&&result<30){
        setBMIresult('Overweight')
      }
      else if(result>=30){
        setBMIresult('Obese')
      }
      else{
         alert('Incorrect Input!');
         setBMIresult('')
         
      }
   }

    return (
        <View style={styles.container}>
          
          <Image style={styles.image2} source={require('../assets/Logo.png')} />
          {/* <Text style={{color: 'black', fontStyle: 'bold'}}>User Email: {userpassedID}</Text> */}
          <Text>Enter Height</Text>
          <TextInput style = {styles.input}
               underlineColorAndroid = "green"
               placeholder = "Height (Cm)"
               autoCapitalize = "none"
               value={Height}
               onChangeText={text => setHeight(text)}/>

          <Text marginTop='10'>Enter Weight</Text>
          <TextInput style = {styles.input}
               underlineColorAndroid = "green"
               placeholder = "Weight (Kg)"
               autoCapitalize = "none"
               value={Weight}
               onChangeText={text=> setWeight(text)}/>

          <TouchableOpacity
              onPress={() => calculate(Height, Weight)}
              style={[styles.button2,styles.buttonOutline,{marginTop:20},{width: 150}]}>
                <Text style={styles.buttonText}>
                  Calculate
                </Text>
              </TouchableOpacity>

          <Text style = {styles.output112}>User Body Mass Index (BMI): {BMI}</Text>
          
          <Text style = {styles.resultText}>{BMIresult}</Text>
   
        </View>
      );
    }

function Planner({navigation}) {
  return (
    <View style={styles.container}>
      
      <SafeAreaView>
      <SearchBar
      
        searchPhrase='search'
        setSearchPhrase='search'
        clicked={false}
        setClicked={false}
      /></SafeAreaView>
      <Image style={styles.image} source={require('../assets/Workouts.png')} /> 
      <View style={styles.buttonContainer}>

        <TouchableOpacity
          onPress={() => navigation.navigate(('Workouts'))}
          style={[styles.button2,styles.buttonOutline]}>
          <Text style={styles.buttonText}>
              Workout Plans
          </Text>
        </TouchableOpacity>
      </View>

      <Image style={[styles.image,{marginTop:20}]} source={require('../assets/Meals.png')} /> 
      <View style={styles.buttonContainer}>

        <TouchableOpacity
        onPress={() => navigation.navigate(('Mealsplan'))}
        style={[styles.button2,styles.buttonOutline]}>
          <Text style={styles.buttonText}>
              Meal Plans
          </Text>
        </TouchableOpacity>
    </View>

  </View>
      
    );
        
      }

const alertvr=()=>{
  
  Alert.alert(
    "Access Denied",
    "This is a paid feature, please go to payment plans to access",
    [
      {
        text: "back",
        
        style: "cancel",
      }
    ],
    {
      cancelable: true,
    }
  );

  }





function VRtrainer({navigation}) {

  return (
    <View style={styles.container}>
        
      <Image style={styles.image} source={require('../assets/aitrainer.png')} />
      <View style={styles.buttonContainer}>   
        <TouchableOpacity
        onPress={() => alertvr()}
        style={[styles.button2,styles.buttonOutline]}>
          <Text style={styles.buttonText}>
              Virtual Trainer
          </Text>
        </TouchableOpacity>
      </View>
      
      <Image style={[styles.image,{marginTop: 50}]} source={require('../assets/payments.jpg')} /> 
      <View style={styles.buttonContainer}>
        
        <TouchableOpacity
        onPress={() => navigation.navigate(('Payment'))}
        style={[styles.button2,styles.buttonOutline]}>
          <Text style={styles.buttonText}>
              Plans & payments
          </Text>
        </TouchableOpacity>
      </View>

  </View>
            
    );

  }

  function Menu({navigation}) {

    return (
      <View style={styles.container}>
          
        <View style={styles.buttonContainer}>
      
          <TouchableOpacity
            onPress={() => navigation.navigate(('Help'))}
            style={[styles.button2,styles.buttonOutline,{marginTop:20}]}>
              <Text style={styles.buttonText}>
                  Help
              </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            onPress={() => navigation.navigate(('Reviews'))}
            style={[styles.button2,styles.buttonOutline,{marginTop:20}]}>
              <Text style={styles.buttonText}>
                  Reviews
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(('Ratings'))}
            style={[styles.button2,styles.buttonOutline,{marginTop:20}]}>
              <Text style={styles.buttonText}>
                  Ratings
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {delogger()}}
            style={[styles.button2,styles.buttonOutline,{marginTop:20}]}>
              <Text style={styles.buttonText}>
                  Logout
              </Text>
          </TouchableOpacity>

        </View>
    
      </View>
        
      );
  
    }
  


  function Search() {

    return (
      <View style={styles.container}>
          
  
  </View>
        
      );
    }

  function Help() {

    return (
      <View style={styles.container}>
          
  
  </View>
        
      );
    }

  function Review() {

    return (
      <View style={styles.container}>
          
  
  </View>
        
      );
    }

  function Ratings() {

    return (
      <View style={styles.container}>
          
  
  </View>
        
      );
    }

    function Logout() {

      return (
        <View style={styles.container}>
            
    
    </View>
          
        );
      }
  

  const navigation = useNavigation()
    return (
      
      // <><Drawer.Navigator>
      //   <Drawer.Screen name="Search" component={Search} options={{
      //     title: 'Search',
      //     headerStyle: {
      //       backgroundColor: 'darkslategrey',
      //     },
      //     headerTintColor: 'silver',
      //     headerTitleStyle: {
      //       fontWeight: 'bold',
      //     },
      //   }} />
      //   <Drawer.Screen name="Help" component={Help} options={{
      //     title: 'Help',
      //     headerStyle: {
      //       backgroundColor: 'darkslategrey',
      //     },
      //     headerTintColor: 'silver',
      //     headerTitleStyle: {
      //       fontWeight: 'bold',
      //     },
      //   }} />
      //   <Drawer.Screen name="Review" component={Review} options={{
      //     title: 'Review',
      //     headerStyle: {
      //       backgroundColor: 'darkslategrey',
      //     },
      //     headerTintColor: 'silver',
      //     headerTitleStyle: {
      //       fontWeight: 'bold',
      //     },
      //   }} />
      //   <Drawer.Screen name="Ratings" component={Ratings} options={{
      //     title: 'Ratings',
      //     headerStyle: {
      //       backgroundColor: 'darkslategrey',
      //     },
      //     headerTintColor: 'silver',
      //     headerTitleStyle: {
      //       fontWeight: 'bold',
      //     },
      //   }} />
      //   <Drawer.Screen name="Logout" component={Logout} options={{
      //     title: 'Logout',
      //     headerStyle: {
      //       backgroundColor: 'darkslategrey',
      //     },
      //     headerTintColor: 'silver',
      //     headerTitleStyle: {
      //       fontWeight: 'bold',
      //     },
      //   }} />
      // </Drawer.Navigator>
      
      
      <Tab.Navigator tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        activeBackgroundColor: 'seagreen',
        inactiveBackgroundColor: 'white'
      }}>

          <Tab.Screen name="Fitness Plans" component={Planner} options={{
            tabBarLabel: 'Plans',

            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="heart-plus" color={color} size={26} />
            ),
            headerStyle: {
              backgroundColor: 'seagreen',
            },
            headerTitleAlign: 'center',

            headerTintColor: 'white',
          }} />
          <Tab.Screen name="Profile" component={Profile} options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
            headerStyle: {
              backgroundColor: 'seagreen',
            },
            headerTitleAlign: 'center',

            headerTintColor: 'white',
          }} />
          <Tab.Screen name="My Trainer" component={VRtrainer} options={{
            tabBarLabel: 'Virtual trainer',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="weight-lifter" color={color} size={26} />
            ),

            headerStyle: {
              backgroundColor: 'seagreen',
            },
            headerTitleAlign: 'center',

            headerTintColor: 'white',
          }} />
          <Tab.Screen name="Menu" component={Menu} options={{
            tabBarLabel: 'Menu',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="menu" color={color} size={26} />
            ),

            headerStyle: {
              backgroundColor: 'seagreen',
            },
            headerTitleAlign: 'center',

            headerTintColor: 'white',
          }} />
          
        </Tab.Navigator>
        
    )
}

export default ServiceScreen

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

