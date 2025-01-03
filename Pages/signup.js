import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function signup ({ navigation }) {

    const [name, onChangeName] = useState();
    const [email, onChangeEmail] = useState();
    const [password, onChangePassword] = useState();
    const [retype, onChangeRetype] = useState();
    const [number, onChangeNumber] = useState ();

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [retypepasswordVisible, setRetypePassword] = useState(false);

    const [texthighlight, setTextHighlight] = useState(null);

    const submit = async () => {
      
      if (!name || !email || !password || !retype || !number) {
        console.error("Please fill out all fields.");
        return;
      }
  
      if (password !== retype) {
        console.error("Passwords do not match.");
        return;
      }
  
      
      const userData = {
        name,
        email,
        password,
        number,
      };
  
      try {
        const response = await fetch("http://localhost:8080/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
  
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || "Failed to register");
          alert("Failed to register")
        }
  
        const data = await response.json();
        console.log(data)
        alert("Registration successful", data)
        console.log("Registration successful:", data);
      } catch (error) {
        console.error("Error during registration:", error.message);
      }
    };
    

    const handleNavigation = () => {
    navigation.navigate ('createProfile');
    };

    const handleSignUpNavigation = () => {
    navigation.navigate ('loginPage')
    };


    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style = {styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView showsVerticalScrollIndicator = {false} >
            <View style = {{flex: 1}}>

            <View style = {styles.logoContainer}>
            <Image source = {require ('../assets/images/Logo SVG 1.png')} /> 
            <Image source = {require ('../assets/images/PickEAT PickIT.png')} />
            </View>

            <View style = {styles.introContainer}>
                <Text style = {styles.personalInfo}> Personal Info </Text>
                <Text style = {styles.introText2}> To continue, hi kindly fill the following boxes: </Text>
            </View>

            <View style = {styles.textBoxes}>
            
            <View style = {[styles.input, texthighlight === 'name' && styles.textHighlightFeatures ]}>
            <MaterialIcons
            name='person'
            size={22}
            color={'lightgrey'} />
            <TextInput
            onChangeText = {onChangeName}
            value = {name}
            placeholder='Full Name'
            onFocus={() => setTextHighlight('name')}
            onBlur={() => setTextHighlight(null)}>
            </TextInput>
            </View>
            

            <View style = {[styles.input, texthighlight === 'email' && styles.textHighlightFeatures]}>
            <MaterialIcons
            name='email'
            size= {22}
            color={'lightgrey'} />
            <TextInput
            onChangeText = {onChangeEmail}
            value = {email}
            placeholder='Email address'
            onFocus={() => setTextHighlight('email')}
            onBlur={() => setTextHighlight(null)}>
            </TextInput>
            </View>

            <View style = {[styles.input, texthighlight === 'number' && styles.textHighlightFeatures]}>
            <MaterialIcons
            name='phone'
            size={22}
            color={'lightgrey'} />
            <TextInput
            onChangeText = {onChangeNumber}
            value = {number}
            placeholder='Phone number'
            keyboardType='numeric'
            onFocus={() => setTextHighlight('number')}
            onBlur={() => setTextHighlight(null)}>
            </TextInput>
            </View>

            <View style={[styles.passwordContainer, texthighlight === 'password' && styles.textHighlightFeatures]}>
            <MaterialIcons
            name='lock'
            size={22}
            color={'lightgrey'} />
            <TextInput
            style = {styles.passwordInput}
            onChangeText = {onChangePassword}
            value = {password}
            placeholder='Password'
            secureTextEntry={!passwordVisible}
            onFocus={() => setTextHighlight('password')}
            onBlur={() => setTextHighlight (null)}>
            </TextInput>

            <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.revealIcon}>
            <MaterialIcons
            name={passwordVisible ? 'visibility': 'visibility-off'}
            size={24}
            color={'grey'}/>
            </TouchableOpacity>
            </View>
            
            <View style={[styles.passwordContainer, texthighlight === 'retype' && styles.textHighlightFeatures]}>
            <MaterialIcons
            name='lock'
            size={22}
            color={'lightgrey'} />
            <TextInput
            style = {styles.passwordInput}
            onChangeText = {onChangeRetype}
            value = {retype}
            placeholder='Retype password'
            secureTextEntry={!retypepasswordVisible}
            onFocus={() => setTextHighlight ('retype')}
            onBlur={() => setTextHighlight (null)}>
            </TextInput>

            <TouchableOpacity
            onPress={() => setRetypePassword(!retypepasswordVisible)}
            style={styles.revealIcon}>
            <MaterialIcons
            name={passwordVisible ? 'visibility': 'visibility-off'}
            size={24}
            color={'grey'}/>
            </TouchableOpacity>
            </View>

            </View>

            <View style={styles.alreadySignedUpContainer}>
            <Text style={styles.alreadySignedUp}> Already have an account? </Text>
            <TouchableOpacity 
            onPress={handleSignUpNavigation}> 
            <Text style={styles.signInText}> Sign in  </Text>
            </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity onPress={handleNavigation} 
            style = {styles.greenButton}> 
            <Text style = {styles.nextText}> Sign Up </Text>
            </TouchableOpacity>
            </View>

                    </View>
                  </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: "column"
      },

    logoContainer : {
        alignItems: "center",
    },

    introContainer: {
        top: "4%"
    },

    personalInfo: {
        fontSize: 20,
        fontWeight: '600',
    },

    introText2: {
        fontSize: 14,
        fontWeight: '200'
    },

    textBoxes: {
        top: '10%',
        height: 500
    },

    input: {
        height: 50,
        borderWidth: 1,
        margin: 7,
        padding: 12,
        paddingTop: 15,
        borderColor: "lightgray",
        borderRadius: 5,
        width: '95%',
        flexDirection: 'row',
        gap: 5,
    },

    passwordContainer: {
        marginVertical: 7,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width: '96%',
        left: 5.5,
        paddingLeft: 13
  },
    passwordInput: {
        flex: 1,
        height: 50,
        padding: 6,
  },
    revealIcon: {
    right: 13
  },
  textHighlightFeatures: {
    borderColor: "green",
    borderWidth: 2,
  },
  alreadySignedUpContainer: {
    bottom: '1%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  alreadySignedUp: {
    color: 'grey'
  },
  signInText: {
    fontWeight: '700',
    textDecorationLine: 'underline'
  },
  greenButton: {
    backgroundColor: '#228B22',
    width: "80%",
    alignSelf: "center",
    height: 50,
    borderRadius: 5,
    padding: 15
  },
  nextText: {
    color: 'white',
    fontSize: 16,
    alignSelf: "center",
    fontWeight: "bold"
  }
}
);
