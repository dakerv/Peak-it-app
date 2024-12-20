import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function forgotPassword ({ navigation }) {
    
    
    const handleNavigation = () => {
        navigation.navigate ('confirmPin')
    }

    const handleSignUpNavigation = () => {
        navigation.navigate ('loginPage')
    };

    const [email, onChangeEmail] = useState ()
    const [texthighlight, setTextHighlight] = useState(null)

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <View style = {styles.logoContainer}>
            <Image source = {require ('../assets/images/Logo SVG 1.png')} /> 
            <Image source = {require ('../assets/images/PickEAT PickIT.png')} />
        </View>

        <View style = {styles.introContainer}>
                <Text style = {styles.personalInfo}> Forgot Password </Text>
                <Text style = {styles.introText2}> To continue, kindly enter your email </Text>
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

        <View style={styles.buttonSpace}>
            <TouchableOpacity onPress={handleNavigation} 
            style = {styles.greenButton}> 
            <Text style = {styles.nextText}> Send OTP </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.alreadySignedUpContainer}>
            <Text style={styles.alreadySignedUp}> Already have an account? </Text>
            <TouchableOpacity 
            onPress={handleSignUpNavigation}> 
            <Text style={styles.signInText}> Sign in  </Text>
            </TouchableOpacity>
        </View>
    </View>
    </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create ({
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
    emailInput: {
        flex: 1
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
        top: '13%'
      },
      nextText: {
        color: 'white',
        fontSize: 16,
        alignSelf: "center",
        fontWeight: "bold"
      },
      alreadySignedUpContainer: {
        top: '50%',
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
})