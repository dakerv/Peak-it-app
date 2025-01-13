import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import WarningContainer from '../components/WarningContainer';
import TextInputs from '../components/TextInputs'; 
import ButtonComponent from '../components/buttonComponent';


export default function createProfile2 ({ navigation }) {

    const handleNavigation = () => {
        navigation.navigate ('createProfile2')
    }

    const handlePress = () => {
        navigation.navigate ('signup');
    };

    return (

   

    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{ flex: 1 }}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

      <View style = {styles.startingContainer}> 
     <TouchableOpacity onPress={handlePress}>
      <Text style = {styles.skipText}> Skip </Text>
     </TouchableOpacity>
      <Text style = {styles.createProfileText}> Create Profile </Text>
    </View>
    
        <View style={styles.container}>
            
  

    </View>
    </ScrollView>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: "column",
        height: '100%',
    },
    startingContainer: {
        backgroundColor: 'white',
        width: '100%'
    },
    createProfileText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textHighlightFeatures: {
      borderColor: 'green',
      borderWidth: 2,
    },
      skipText: {
        fontSize: 18,
        color: "#228B22",
        fontWeight: 500,
        textAlign: 'right'
      },
})