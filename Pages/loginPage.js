import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function LoginPage ({ navigation }) {
    const handleNavigation = () => {
    navigation.navigate ('forgotPassword');
    };

    const handleSignUpNavigation = () => {
        navigation.navigate ('signup')
    };

    const [texthighlight, setTextHighlight] = useState(null)
    const [email, onChangeEmail] = useState ()
    const [password, onChangePassword] = useState();
    const [passwordVisible, setPasswordVisible] = useState(false);

    return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
        <View style = {styles.logoContainer}>
            <Image source = {require ('../assets/images/Logo SVG 1.png')} /> 
            <Image source = {require ('../assets/images/PickEAT PickIT.png')} />
        </View>

        <View style = {styles.introContainer}>
                <Text style = {styles.personalInfo}> Login Information </Text>
                <Text style = {styles.introText2}> To continue, kindly provide the following details </Text>
        </View>

        <View style={[styles.emailContainer, texthighlight === 'email' && styles.textHighlightFeatures]}>
        
        <MaterialIcons
        name='mail'
        color={'lightgray'}
        size={24}>
        </MaterialIcons>

        <TextInput
        style = {styles.emailInput}
        onChangeText = {onChangeEmail}
        value = {email}
        placeholder='Enter email'
        onFocus={() => setTextHighlight ('email')}
        onBlur={() => setTextHighlight (null)}>
        </TextInput>

        </View>

        <View style={[styles.passwordContainer, texthighlight === 'password' && styles.textHighlightFeatures]}>
            
            <MaterialIcons
            name='lock'
            color={'lightgray'}
            size={24}>
            </MaterialIcons>
            
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

        <TouchableOpacity 
        style={styles.forgotPasswordContainer}
        onPress={handleNavigation}>
        <Text style={styles.forgotPasswordText}> Forgot password? </Text>
        </TouchableOpacity>

        <View style={styles.alreadySignedUpContainer}>
            <Text style={styles.alreadySignedUp}> Don't have an account? </Text>
            <TouchableOpacity 
            onPress={handleSignUpNavigation}> 
            <Text style={styles.signInText}> Sign up  </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.buttonSpace}>
            <TouchableOpacity onPress={handleNavigation} 
            style = {styles.greenButton}> 
            <Text style = {styles.nextText}> Sign In </Text>
            </TouchableOpacity>
        </View>

    </View>
    </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({

        container: {
            flex: 1,
            backgroundColor: '#fff',
            paddingTop: 40,
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
        emailContainer: {
            borderWidth: 1,
            borderColor: 'lightgray',
            height: 50,
            flexDirection: 'row',
            top: '8%',
            padding: 12,
            borderRadius: 5,
            alignItems: 'center',
            width: '100%',
            columnGap: 10,
        },
        textHighlightFeatures: {
            borderColor: 'green',
            borderWidth: 2,
        },
        iconHighlight: {
            color: 'green'
        },
        passwordContainer: {
            top: '9%',
            marginVertical: 7,
            borderWidth: 1,
            borderColor: 'lightgray',
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            paddingLeft: 12   
      },
        passwordInput: {
            flex: 1,
            height: 50,
            padding: 12,
      },
        emailInput: {
            flex: 1
        },
        revealIcon: {
        right: 13
      },
        forgotPasswordContainer: {
        top: '9%',
        width: '100%',
      },
        forgotPasswordText: {
        textAlign: 'right',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
      },
      alreadySignedUpContainer: {
        top: '47              %',
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
        padding: 15,
      },
      buttonSpace: {
        top: '48%'
      },
      nextText: {
        color: 'white',
        fontSize: 16,
        alignSelf: "center",
        fontWeight: "bold"
      }
}
)