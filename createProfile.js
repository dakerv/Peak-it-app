import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function createProfile ({ navigation }) {
    
    const handleNavigation = () => {
        navigation.navigate ('confirmPin')
    }

    const handlePress = () => {
        navigation.navigate ('signup');
    };
    
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style = {styles.container}>   
       
      <View> 
        <TouchableOpacity onPress={handlePress}>
        <Text style = {styles.skipText}> Skip </Text>
        </TouchableOpacity>
        <Text style = {styles.createProfileText}> Create Profile </Text>
      </View>

    </View>
    </TouchableWithoutFeedback>
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
})