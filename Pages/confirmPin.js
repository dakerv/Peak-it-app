import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function confirmPin ({ navigation }) {

    const handleNavigation = () => {
        navigation.navigate ('createProfile')
    }

    const [email, onChangeEmail] = useState ()
    const [texthighlight, setTextHighlight] = useState(null)
    const [otphighlight, setOtpHighlight] = useState (null)
    const [ otp, setOtp ] = useState(['','','','']);
    const inputRefs = [useRef (null), useRef(null), useRef(null), useRef(null)]

    const handleOtpEntry = (value, index) => {
        const newOtp = [...otp]
        newOtp[index] = value
        setOtp(newOtp);

        if (value.length === 1 && index < 3) {
            inputRefs[index + 1].current.focus();
        }

        if (value === '' && index > 0) {
            inputRefs[index -1].current.focus();
        }
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <View style = {styles.container}>   
        
           <View style = {styles.logoContainer}>
             <Image source = {require ('../assets/images/Logo SVG 1.png')} /> 
             <Image source = {require ('../assets/images/PickEAT PickIT.png')} />
           </View>

          <View style = {styles.introContainer}>
            <Text style = {styles.personalInfo}> Confirm Pin </Text>
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
          onBlur={() => setTextHighlight (null)}
          onPressOut={Keyboard.dismiss}>
          </TextInput>

          </View>

          <View style = {styles.OTPcontainer}> 
          {otp.map((digit, index) => (
          <TextInput
          key={index}
          style={styles.OTPdesign}
          ref={inputRefs[index]}
          maxLength={1}
          onChangeText={(value) => handleOtpEntry(value, index)}
          keyboardType='numeric'
          value={digit}
          onFocus={() => setOtpHighlight ('value')}
          onBlur={() => setOtpHighlight (null)}>
        </TextInput> 
        ))}
        </View>

        <Text style= {styles.instructionText}> Enter the four digit code sent to your email. </Text>

        <View style = {styles.buttonSpace}>
          <TouchableOpacity onPress={handleNavigation} 
          style = {styles.greenButton}> 
          <Text style = {styles.nextText}> Done </Text>
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
    OTPcontainer: {
        top: '15%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        columnGap: 10
    },
    OTPdesign: {
        width: 50,
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        textAlign: 'center'
    },
    instructionText: {
        textAlign: 'center',
        color: 'grey',
        width: '55%',
        top: '17%',
        alignSelf: 'center'
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
        top: '50%'
      },
      nextText: {
        color: 'white',
        fontSize: 16,
        alignSelf: "center",
        fontWeight: "bold"
      },
})