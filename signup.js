import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default function signup ({ navigation }) {

    const [text, onChangeText] = React.useState()
    const [number, onChangeNumber] = React.useState ()
    return (
        <View style = {styles.container}>
            <View style = {styles.logoContainer}>
            <Image source = {require ('./assets/images/Logo SVG 1.png')} /> 
            <Image source = {require ('./assets/images/PickEAT PickIT.png')} />
            </View>

            <View style = {styles.introContainer}>
                <Text style = {styles.personalInfo}> Personal Info </Text>
                <Text style = {styles.introText2}> To continue, kindly fill the following boxeses </Text>
            </View>

            <View style = {styles.textBoxes}>

            <TextInput
            style = {styles.input}
            onChangeText = {onChangeText}
            value = {text}
            placeholder='Full Name'>
            </TextInput>

            <TextInput
            style = {styles.input}
            onChangeText = {onChangeText}
            value = {text}
            placeholder='Email address'>
            </TextInput>

            <TextInput
            style = {styles.input}
            onChangeText = {onChangeText}
            value = {text}
            placeholder='Full Name'>
            </TextInput>

            <TextInput
            style = {styles.input}
            onChangeText = {onChangeText}
            value = {text}
            placeholder='Full Name'>
            </TextInput>

            </View>
        </View>
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
        top: '10%'
    },

    input: {
        height: 40,
        borderWidth: 1,
        margin: 12,
        padding: 12,
        borderColor: "grey"
    }

}
);
