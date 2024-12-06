import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import WarningContainer from './components/WarningContainer';
import TextInputs from './components/TextInputs'; 

export default function createProfile ({ navigation }) {
    
    const handleNavigation = () => {
        navigation.navigate ('confirmPin')
    }

    const handlePress = () => {
        navigation.navigate ('signup');
    };

    const [businessName, setBusinessName ] = useState ();
    const [address, setAddress] = useState ();
    const [fullname, setFullName] = useState ();
    const [experience, setExperience] = useState ();
    
    return (
<KeyboardAvoidingView style = {styles.container}
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style = {{ flex: 1}} >
       
      <View> 
        <TouchableOpacity onPress={handlePress}>
        <Text style = {styles.skipText}> Skip </Text>
        </TouchableOpacity>
        <Text style = {styles.createProfileText}> Create Profile </Text>
      </View>

      <View style = {styles.warningSpace}>
        <WarningContainer name='provide the correct info below' />
      </View>

      <View>
        <TextInputs 
        setter = {setBusinessName}
        inputValue = {businessName} 
        inputPlaceholder = 'What is your business name?'
        inputName = 'businessName'/>
      </View>

    </View>
    </TouchableWithoutFeedback>
    
</KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: "column"
    },
    createProfileText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
      skipText: {
        fontSize: 18,
        color: "#228B22",
        fontWeight: 500,
        textAlign: 'right'
      },
      warningSpace: {
        top: '5%'
      }
})