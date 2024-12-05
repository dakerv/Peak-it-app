import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function confirmPin ({ navigation }) {

    const handleNavigation = () => {
        navigation.navigate ('forgotPassword')
    }
    return(
        <View style={styles.container}>
          <View style = {styles.logoContainer}>
            <Image source = {require ('./assets/images/Logo SVG 1.png')} /> 
            <Image source = {require ('./assets/images/PickEAT PickIT.png')} />
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
          onBlur={() => setTextHighlight (null)}>
          </TextInput>

        </View>
        </View>
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
})