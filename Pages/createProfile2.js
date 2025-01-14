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
    <StatusBar backgroundColor="green" />

      <View style = {styles.startingContainer}> 
     <TouchableOpacity onPress={handlePress}>
      <Text style = {styles.skipText}> Skip </Text>
     </TouchableOpacity>
      <Text style = {styles.createProfileText}> Create Profile </Text>
    </View>

        <View style={styles.container}>

        <View style ={styles.enquiryBoxes}>

        <View style ={styles.circles}> 
        <Image source={require('../assets/images/system-uicons_camera-alt.png')} />
        <Text style = {styles.textStyles}> Upload store image </Text>
        </View>

        <View style = {styles.textboxesStyles}>

        <Text style = {styles.MrMoesStyles}> Mr. Moe's Kitchen </Text>
        <Text style = {styles.restaurantStyles}> Restaurant </Text>

        <Text style = {styles.emailStyles}> {'\n'} creativeomotayo@gmail.com  </Text>
        <Text style = {styles.numberStyles}> +234 906 3287 855</Text>

        </View>

        </View>

        <View style = {styles.enquiryBoxes}>
        
        <View style ={styles.circles}> 
        <Image source={require('../assets/images/system-uicons_camera-alt.png')} />
        <Text style = {styles.textStyles}> Upload cover image </Text>
        </View>

        <Text> Mr. Moe's Kitchen </Text>
        </View>
            
  

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
        width: '100%',
        marginTop: 40,
        paddingRight: 12,
        paddingLeft: 12
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
    enquiryBoxes: {
        width: 340,
        height: 142,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 28,
        paddingHorizontal: 14,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    circles: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#E5F2FF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    textStyles: {
        fontSize: 10,
        textAlign: 'center'
    },
    textboxesStyles: {
        marginHorizontal: 5
    },
    restaurantStyles: {
        color: 'green',
        fontSize: 18,
        fontColor: '#228B22',
        fontWeight: 700,
    },
    MrMoesStyles: {
        fontWeight: 700,
        fontSize: 18
    },
    emailStyles: {
        fontWeight: 700,
        fontSize: 16
    },
    numberStyles: {
        fontWeight: 700,
        fontSize: 16
    }


})