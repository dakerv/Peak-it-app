import React, { useState, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Pressable, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity, Touchable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import WarningContainer from '../components/WarningContainer';
import TextInputs from '../components/TextInputs'; 
import ButtonComponent from '../components/ButtonComponent';
import * as ImagePicker from 'expo-image-picker'
import DropDownPicker from 'react-native-dropdown-picker';
import SkipComponent from '../components/SkipComponent';

export default function SetAvailability ({ navigation }) {

    const handleNavigation = () => {
        navigation.navigate ('SetAvailability')
    }

    const handlePress = () => {
        navigation.navigate ('CreateProfile2')
    }

    return (
    <View style = {styles.container}>

      <View style = {styles.backspacePlacement}>
       <MaterialIcons
        name='keyboard-backspace'
        size={22}
        onPress={() => navigation.goBack()} />

        <Text style = {styles.pageHeader}> Set Availability </Text>
      </View>

      <SkipComponent function = {handlePress} />

      <View style = {styles.greenBackground}>

      </View>
    </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: "column"
    },
    backspacePlacement: {
        top: '3%',
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
    },
    pageHeader: {
        alignSelf: 'center',
        fontWeight: 600,
        fontSize: 18,
        marginLeft: '26%'
    },
    greenBackground: {
        width: '100%',
        height: 265,
        top: '6%',
        backgroundColor: '#228B22'
    }
})