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

    const [fromOpen, setFromOpen] = useState (false);
    const [fromValue, setFromValue] = useState (null);
    const [fromDays, setFromDays] = useState ([
        {label: 'Monday', value: 'monday'},
        {label: 'Tuesday', value: 'tuesday'},
        {label: 'Wednesday', value: 'wednesday'},
        {label: 'Thursday', value: 'thursday'},
        {label: 'Friday', value: 'friday'},
        {label: 'Saturday', value: 'saturday'},
        {label: 'Sunday', value: 'sunday'},        
    ]);
    const [toOpen, setToOpen] = useState (false);
    const [toValue, setToValue] = useState (null);
    const [toDays, setToDays] = useState ([
        {label: 'Monday', value: 'monday'},
        {label: 'Tuesday', value: 'tuesday'},
        {label: 'Wednesday', value: 'wednesday'},
        {label: 'Thursday', value: 'thursday'},
        {label: 'Friday', value: 'friday'},
        {label: 'Saturday', value: 'saturday'},
        {label: 'Sunday', value: 'sunday'},    
    ])

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
        <View style = {styles.dropdownContainers}>
            <Text style = {styles.dropdownHeader}> From </Text>
            <DropDownPicker
            dropDownContainerStyle = {styles.dropdownOpened}
            style = {styles.dropdownClosed}
            open = {fromOpen}
            value = {fromValue}
            items = {fromDays}
            setOpen={setFromOpen}
            setValue={setFromValue}
            setItems={setFromDays}
            placeholder='Select a day'>
            </DropDownPicker> 
        </View>

        <View style = {styles.dropdownContainers}>
            <Text style = {styles.dropdownHeader}> To </Text>
            <DropDownPicker
            dropDownContainerStyle = {styles.dropdownOpened}
            style = {styles.dropdownClosed}
            open = {toOpen}
            value = {toValue}
            items = {toDays}
            setOpen={setToOpen}
            setValue={setToValue}
            setItems={setToDays}
            placeholder='Select a day'>
            </DropDownPicker> 
        </View>
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
        backgroundColor: '#228B22',
        padding: 20,
        flexDirection: 'column',
        gap: 55
    },
    dropdownContainers: {
        width: '100%',
        height: 14,
        backgroundColor: '#FFFFFF',
    },
    dropdownHeader: {
        color: '#787676'
    },
    dropdownClosed: {
        borderWidth: 0,
        borderRadius: 0,
        height: 20
    },
    dropdownOpened: {
        borderWidth: 0
    }

})