import {StyleSheet} from 'react-native';
import React from'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import ServiceScreen from './Screens/ServiceScreen';
import mealplans from './Screens/Mealplans';
import workoutplans from './Screens/Workoutplans';
import Trainer from './Screens/Trainer';
import Ptracker from './Screens/Ptracker';
import Payment from './Screens/Payment';
import Exercises from './Screens/Exercises';
import Meals from './Screens/Meals';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
         <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: false,
      title: 'Fitness Factor',
      headerStyle: {
        backgroundColor: 'seagreen',
        
      },
      headerTitleAlign: 'center',
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      } 
      } />
        <Stack.Screen name="Registration" component={RegistrationScreen} options={{
      title: 'Register',
      headerStyle: {
        backgroundColor: 'seagreen',
      },
      headerTitleAlign: 'center',
      navigationOptions:  {
        headerLeft: null
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{
      title: 'Login',
      headerStyle: {
        backgroundColor: 'seagreen',
      },
      headerTitleAlign: 'center',
      navigationOptions:  {
        headerLeft: null
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      }}/>  
        <Stack.Screen name="Service" component={ServiceScreen} options={{
        headerShown: false,
        navigationOptions:  {
          headerLeft: null
        },
        headerStyle: {
          backgroundColor:'white'
        },
      }}/>
      <Stack.Screen name="Mealsplan" component={mealplans} options={{
        headerShown: true,
        navigationOptions:  {
          headerLeft: null
        },
        headerStyle: {
          backgroundColor: 'seagreen',
        },
        headerTitleAlign: 'center',
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      
      }}/>
      <Stack.Screen name="Workouts" component={workoutplans} options={{
        headerShown: true,
        navigationOptions:  {
          headerLeft: null
        },
        headerStyle: {
          backgroundColor: 'seagreen',
        },
        headerTitleAlign: 'center',
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      
      }}/>

      <Stack.Screen name="Exercises" component={Exercises} options={{
        headerShown: false,
        navigationOptions:  {
          headerLeft: null
        },
      
      }}/>
      <Stack.Screen name="Meals" component={Meals} options={{
        headerShown: false,
        navigationOptions:  {
          headerLeft: null
        },
      
      }}/>
      <Stack.Screen name="Trainer" component={Trainer} options={{
        headerShown: false,
        navigationOptions:  {
          headerLeft: null
        },
      
      }}/>
      <Stack.Screen name="Ptracker" component={Ptracker} options={{
        headerShown: false,
        navigationOptions:  {
          headerLeft: null
        },
      
      }}/>
      <Stack.Screen name="Payment" component={Payment} options={{
        headerShown: false,
        navigationOptions:  {
          headerLeft: null
        },
      
      }}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

