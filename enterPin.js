import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function enterPin ({ navigation }) {

    const handleNavigation = () => {
    navigation.navigate ('EnterPin');
    };

    const handleOtpEntry = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');
    if (numericText.length <= 4) {
        setOtp(numericText);
    }
    }



    const [texthighlight, setTextHighlight] = useState(null)
    const [email, onChangeEmail] = useState ()
    const [ otp, setOtp ] = useState('')

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
        <TextInput
        style={styles.OTPspace}
        keyboardType='numeric'
        maxLength={4}
        value={otp}
        onChangeText={handleOtpEntry}
        textAlign='center'
        >
            
        </TextInput> 

        <Text style= {styles.instructionText}> Enter the four digit code sent to your email </Text>
        </View>
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
        alignContent: 'center',
        justifyContent: 'center',
        width: 'auto',
        height: '5%',
        alignItems: "center"
    },
    OTPspace: {
        width: 40,
        height: 5,
        backgroundColor: 'black'
    },
    instructionText: {
        textAlign: 'center',
        color: 'grey',
        width: '55%',
    }
}
  
)