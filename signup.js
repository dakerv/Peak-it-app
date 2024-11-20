import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function signup ({ navigation }) {

    const [name, onChangeName] = React.useState();
    const [email, onChangeEmail] = React.useState();
    const [password, onChangePassword] = React.useState();
    const [retype, onChangeRetype] = React.useState();
    const [number, onChangeNumber] = React.useState ();

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [retypepasswordVisible, setRetypePassword] = useState(false);

    const [texthighlight, setTextHighlight] = useState(null);

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style = {styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView showsVerticalScrollIndicator = {false} >
            <View style = {{flex: 1}}>

            <View style = {styles.logoContainer}>
            <Image source = {require ('./assets/images/Logo SVG 1.png')} /> 
            <Image source = {require ('./assets/images/PickEAT PickIT.png')} />
            </View>

            <View style = {styles.introContainer}>
                <Text style = {styles.personalInfo}> Personal Info </Text>
                <Text style = {styles.introText2}> To continue, kindly fill the following boxes: </Text>
            </View>

            <View style = {styles.textBoxes}>

            
            <TextInput
            style={[
            styles.input,
            texthighlight === 'name' && styles.textHighlightFeatures]}
            onChangeText = {onChangeName}
            value = {name}
            placeholder='Full Name'
            onFocus={() => setTextHighlight('name')}
            onBlur={() => setTextHighlight(null)}>
            </TextInput>

            <TextInput
            style = {[styles.input,
                texthighlight === 'email' && styles.textHighlightFeatures
            ]}
            onChangeText = {onChangeEmail}
            value = {email}
            placeholder='Email address'
            onFocus={() => setTextHighlight('email')}
            onBlur={() => setTextHighlight(null)}>
            </TextInput>

            
            <TextInput
            style = {[styles.input,
                texthighlight === 'number' && styles.textHighlightFeatures
            ]}
            onChangeText = {onChangeNumber}
            value = {number}
            placeholder='Phone number'
            keyboardType='numeric'
            onFocus={() => setTextHighlight('number')}
            onBlur={() => setTextHighlight(null)}>
            </TextInput>

            <View style={styles.passwordContainer}>
            <TextInput
            style = {styles.passwordInput}
            onChangeText = {onChangePassword}
            value = {password}
            placeholder='Password'
            secureTextEntry={!passwordVisible}>
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
            
            <View style={styles.passwordContainer}>
            <TextInput
            style = {styles.passwordInput}
            onChangeText = {onChangeRetype}
            value = {retype}
            placeholder='Retype password'
            secureTextEntry={!retypepasswordVisible}>
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
        borderColor: "lightgray",
        borderRadius: 5,
        width: '95%'
    },

    passwordContainer: {
        marginVertical: 7,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
  },
    passwordInput: {
        flex: 1,
        height: 50,
        padding: 12,
  },
    revealIcon: {
    right: 13
  },
  textHighlightFeatures: {
    borderColor: "green",
    borderWidth: 2
  }
}
);
