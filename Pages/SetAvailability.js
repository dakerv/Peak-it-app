import React, { useState, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Pressable, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity, Touchable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import WarningContainer from '../components/WarningContainer';
import TextInputs from '../components/TextInputs'; 
import ButtonComponent from '../components/ButtonComponent';
import * as ImagePicker from 'expo-image-picker'

export default function SetAvailability ({ navigation }) {
    return (

    )
}

const styles = StyleSheet.create ({
    container:
     flex: 1,
     backgroundColor: '#fff',
     paddingTop: 40,
     paddingLeft: 20,
     paddingRight: 20,
     flexDirection: "column",
     backgroundColor: 'white',
     height: '100%',
})