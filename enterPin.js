import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function enterPin ({ navigation }) {

    const handleNavigation = () => {
    navigation.navigate ('EnterPin');
    };

    const [texthighlight, setTextHighlight] = useState(null)
    const [email, onChangeEmail] = useState ()
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

    <View style={styles.container}>
        <View style = {styles.logoContainer}>
            <Image source = {require ('./assets/images/Logo SVG 1.png')} /> 
            <Image source = {require ('./assets/images/PickEAT PickIT.png')} />
        </View>

        <View style = {styles.introContainer}>
                <Text style = {styles.personalInfo}> Enter Pin </Text>
                <Text style = {styles.introText2}> Kindly okay enter the pin sent to your mail address </Text>
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

        <View style = {styles.OTPcontainer}> 
        {otp.map((digit, index) => (
        <TextInput
        key={index}
        style={styles.OTPdesign}
        ref={inputRefs[index]}
        maxLength={1}
        onChangeText={(value) => handleOtpEntry(value, index)}
        keyboardType='numeric'
        value={digit}>
        </TextInput> 
        ))}
        </View>

        <Text style= {styles.instructionText}> Enter the four digit code sent to your email </Text>
    </View>
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
        columnGap: 10,
    },
    textHighlightFeatures: {
        borderColor: 'green',
        borderWidth: 2,
    },
    iconHighlight: {
        color: 'green'
    },
    OTPcontainer: {
        top: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
       columnGap: 10
    },
    OTPdesign: {
        width: 50,
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        textAlign: 'center'

    },
    instructionText: {
        textAlign: 'center',
        color: 'grey',
        width: '55%',
        top: '20%',
        alignSelf: 'center'
    }
}
  
)