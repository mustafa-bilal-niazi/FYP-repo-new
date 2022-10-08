import React from 'react'
import { TouchableOpacity,Button, StyleSheet, Text, View,Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'

const HomeScreen = () => {

  const navigation = useNavigation()

    return (
        
            <View style={styles.container}>
              <Image style={styles.image} source={require('../assets/Logo.png')} />
                <Text style={styles.italic}>FITNESS FACTOR</Text>
                <View style={styles.buttonContainer}>
                <TouchableOpacity
              onPress={() => navigation.navigate('Registration')}
              style={[styles.button2,styles.buttonOutline,{marginTop:20}]}>
                <Text style={styles.buttonText}>
                  Register!
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={[styles.button2,styles.buttonOutline,{marginTop:20}]}>
                <Text style={styles.buttonText}>
                  Login!
                </Text>
              </TouchableOpacity>
                </View>
           
                
            </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
  image:{
    width:300,
    height: 250,

  },
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    italic: {
      fontWeight: 'bold',
      fontSize: 36,
      color: 'seagreen',
      
    },
    style1: {
        borderBottomWidth: 2,
        paddingTop: 20
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
        backgroundColor: '#1b1c1e',
        width: '80%',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
      },
      buttonOutline: {
        
        marginTop: 5,
        borderColor: 'seagreen',
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
  });
