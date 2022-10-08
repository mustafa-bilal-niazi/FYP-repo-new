import React, { useState } from 'react'
import { Image,TouchableOpacity,SafeAreaView,StyleSheet, Text, TextInput, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { auth } from '../firebase'
import { signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoginScreen = () => {

  const navigation = useNavigation()

  const [getLoginemail, setLoginemail] = useState('')
  const [getLoginpassword, setLoginpassword] = useState('')  
  const [bool,setBool]=useState(false)

  const handleLogin = async() => {
    try{ 
      const user = await signInWithEmailAndPassword(auth, getLoginemail, getLoginpassword)
      logger()
    }
    catch(error){
      alert(error.message)
      console.log(`${error}`)
    }
  }

  const showPass=()=>{
    if(bool==false) {
     setBool(true)
    } 
    else {
     setBool(false)
    }
   }

  const logger=()=> {
    {navigation.navigate(('Service'),{
      useremail: getLoginemail
    }
    );
  }}
  

    return (
        <SafeAreaView style={styles.container}
        behavior='padding'>
            <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/Logo.png')} />
                <TextInput style={[styles.style1,styles.input]}
                placeholder='Email' placeholderTextColor='gray'
                value={getLoginemail}
                onChangeText={text=> setLoginemail(text)}
                
                />
                <View >
                <TextInput style={[styles.style1,styles.input]}
                placeholder='Password' placeholderTextColor='gray' 
                value={getLoginpassword}
                onChangeText={text=> setLoginpassword(text)}
                
                secureTextEntry={bool}
                />
                <MaterialCommunityIcons style= {styles.styleicon} name="eye" color='black' size={26} onPress={showPass} />

                </View>
              <View styles={styles.newstyle}>
              <TouchableOpacity
               onPress={logger}
              style={[styles.button2,styles.buttonOutline,{marginTop:20}]}>
                <Text  style={styles.buttonText}>
                  Login!
                </Text>
              </TouchableOpacity>
              </View>
              <View style={styles.extra}>
            <Text >Don't have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Registration')}
              >
                <Text style={styles.style1}>
                  Register!
                </Text>
              </TouchableOpacity>
            </View>
            </View>

        </SafeAreaView>
    )
}

export default LoginScreen

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
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
      width: 260,
      height: 60,
      fontSize: 20,
    },
  styleeye: {
    backgroundColor:'white' ,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    marginTop: 5,
    width: 27,
    alignSelf: 'center'
  },
  style1: {
    position: 'relative',
      borderBottomWidth: 4,
      
      
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
      width: 200,
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
    newstyle: {
      marginTop: 100
     
    },
    styleicon: {
        
      position: 'absolute', 
      left: 230,
      marginTop: 22
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
