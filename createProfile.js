import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function createProfile ({ navigation }) {
    
    const handleNavigation = () => {
        navigation.navigate ('confirmPin')
    }
    
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <View style = {styles.container}>   
       
       <View style = {styles.logoContainer}>
            <Image source = {require ('./assets/images/Logo SVG 1.png')} /> 
            <Image source = {require ('./assets/images/PickEAT PickIT.png')} />
        </View>

       </View>
    </TouchableWithoutFeedback>
    )
}