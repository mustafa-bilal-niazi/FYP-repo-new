import React, { useState } from 'react'
import { SafeAreaView ,TextInput,Pressable, Modal ,Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { onAuthStateChanged,  signOut} from 'firebase/auth'
import { auth } from '../firebase';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { db } from '../firebase-cruds';
import {collection, getDocs} from 'firebase/firestore'
import { useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

<Pressable
                    style={[styles.button, styles.buttonOpen2]}
                    onPress={() => { get_workout_data()
                     // navigation.navigate(('Service'),{
          //  useremail: useremail})
          }}
                  >
                    <Text style={styles.textStyle}>back</Text>
                  </Pressable>

const Tab = createBottomTabNavigator();

const ServiceScreen2 = ({route}) => {
  const {useremail}=route.params;
  const driverpassedID2=JSON.stringify(useremail)
  const [users,setusers]=useState([])
  const usersrefdb=collection(db, 'users')

  useEffect(() => {
    const getusers = async () =>{
      const data= await getDocs(usersrefdb)
      console.log(data)
      setusers(data.docs.map((doc)=>({...doc.data(), id: doc.id })));

    }
    getusers()
  }, [])
  const [mydriverID,setmydriverID]=useState('')
  const [Vehicletype,setvehicletype]=useState('')
  const [vehicleNo,setvehicleNo]=useState('')
  const [City,setcity]=useState('')
  const [tod,settod]=useState('')
  const [location, setlocation] = useState('')
  const [destination, setdestination] = useState('')

  const [getUser, setUser]= useState({})
  onAuthStateChanged( auth, (currentUser) => {
    setUser(currentUser);
  });
  const handleLogout = async() => {
    await signOut(auth)
  }
  const rideBooked=(a,b,c,d,e,f,g)=>{
    setmydriverID(a)
    setdestination(b)
    setlocation(c)
    settod(d)
    setvehicletype(e)
    setvehicleNo(f)
    setcity(g)
    alert("You booked a ride!")
  }

  const checkbooking=(a,b,c,d,e,f,g)=>{
    if(destination!='' || location!='' || Vehicletype!='' || 
    vehicleNo!='' ||  City!='' || tod!='' ){
        return (
           alert("You already have a booking!")

        )
    }
    else{
        rideBooked(a,b,c,d,e,f,g)
    }
  }

  const cancelbooking=()=>{
        setmydriverID('')
        setdestination('')
        setlocation('')
        settod('')
        setvehicletype('')
        setvehicleNo('')
        setcity('')
        alert("Booking cancelled!")
  }
  const delogger=()=>{
    handleLogout
    {navigation.navigate('Login')}
  }
  function Profile() {
  
    return (
        <View style={styles.container}>
          <Text style={{color: 'black'}}>User Email:{driverpassedID2} </Text>
          <SimpleLineIcons name="picture" color='black' size={44} />
          <Button title='Logout!' 
          onPress={delogger} />
          <Button title='Switch to driver!' 
          onPress={() => navigation.navigate(('Service'),{
            useremail: useremail
          })} />
        </View>
      );
    }

function Planner() {

      return (
        <SafeAreaView style={styles.containernew}
        behavior='padding'>
          <ScrollView>
        <View> 
          {users.map((userinfo)=>{
            return (
              
                <View style={styles.container2}>
                  <Text style={styles.style1}>Driver ID: {userinfo.driverID}</Text>
                  <Text style={styles.style1}>Destination: {userinfo.destination}   Location: {userinfo.location}  </Text>
                  <Text style={styles.style1}>Time of departure: {userinfo.tod} </Text>
                  <Text style={styles.style1}>vehicle: {userinfo.Vehicletype} No: {userinfo.vehicleNo} </Text>
                  <Text style={styles.style1}>City: {userinfo.City} </Text>
                  <Pressable
                    style={[styles.button, styles.buttonOpen2]}
                    onPress={()=>{checkbooking(userinfo.driverID,userinfo.destination, 
                        userinfo.location, userinfo.tod ,userinfo.Vehicletype
                        ,userinfo.vehicleNo, userinfo.City)}}
                  >
                    <Text style={styles.textStyle}>Book Ride</Text>
                  </Pressable>
                  
                </View>
              
            );
          })}
        </View></ScrollView></SafeAreaView>
          
        );
        
      }


function BookedRide() {
    if(destination=='' || location=='' || Vehicletype=='' || 
    vehicleNo=='' ||  City=='' || tod=='' ){
        return (
            <View style={styles.container3}>
      <Text style={styles.italic} >No rides booked yet.</    Text>
    </View>
           
        )
    }else{
        return (
            <View style={styles.container}> 
            <View>
      <Text style={styles.italic} >RIDE BOOKED! </    Text>
    </View><View>
      <Text style={styles.italic} >--Ride Details--</    Text>
    </View>
            
                
            <View style={styles.container2}>

            <Text style={styles.style1}>Driver ID: {mydriverID}</Text>
                <Text style={styles.style1}>Destination: {destination} Location: {location}  </Text>
                <Text style={styles.style1}>Time of departure: {tod} </Text>
                <Text style={styles.style1}>vehicle: {Vehicletype} No: {vehicleNo} </Text>
                <Text style={styles.style1}>City: {City} </Text>
                <View style={{alignSelf:'center',width: '50%'}}>
                <Button 
                
                title="Cancel Booking"
                onPress={cancelbooking}
                />
                </View>
                
            </View></View>
        );
    }

    
  }

  const navigation = useNavigation()

    return (
      
      <Tab.Navigator>
      <Tab.Screen name="Available Rides!" component={Planner} options={{
          tabBarColor: 'green',
          tabBarLabel: 'Posted Rides!',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="car" color='red' size={26} />
          ),
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleAlign: 'center',
          headerTintColor: 'palegoldenrod',
        }} />
      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarColor: 'yellow',
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" color='blue' size={26} />
          ),
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleAlign: 'center',
          headerTintColor: 'palegoldenrod',
        }} />
        <Tab.Screen name="Ride Booked" component={BookedRide} options={{
          tabBarColor: 'red',
          tabBarLabel: 'Booked ride',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="swap-vertical-bold" color='yellow' size={26} />
          ),
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleAlign: 'center',
          headerTintColor: 'palegoldenrod',
        }} />
    </Tab.Navigator>

    )
}

export default ServiceScreen2

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'tan',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containernew: {
        flex: 1,
        backgroundColor: 'khaki',
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
    container3: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: 'khaki',
        justifyContent: 'center',
        alignItems: "center"
      },
      italic: {
        fontStyle: 'italic',
        fontSize: 20,
        paddingBottom: 30,
        fontWeight: 'bold'
      },
      buttonOpen2: {
        backgroundColor: "darkolivegreen",
        width: "70%",
        borderRadius: 20,
        alignSelf: 'center',
        paddingBottom: 10
      },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
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
      modalText: {
        marginBottom: 15,
        textAlign: "center",
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
      input: {
        backgroundColor: 'chartreuse',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
      },
      style1: {
        borderBottomWidth: 2,
        paddingTop: 20,
      },
      style11: {
        borderBottomWidth: 2,
        paddingTop: 20,
        backgroundColor: 'goldenrod'        
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
        textAlign: 'center',
      },
      Scrollstyle: {
        alignContent: 'center',
        backgroundColor: 'khaki',
        alignContent:'center',
      
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
      Scrollpost: {
        borderRadius: 10,
        width: '90%',
      },
  });

