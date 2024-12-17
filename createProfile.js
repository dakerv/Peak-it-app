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
    const [businessMail, setBusinessMail] = useState();
    const [country, setCountry] = useState ();
    const [countryCode, setCountryCode] = useState ();
    const [phoneNumber, setPhoneNumber] = useState ();
    const [businessAddress, setBusinessAddress] = useState ();
    
    return (
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ScrollView>
    <View style={styles.container}>
    
      <View> 
        <TouchableOpacity onPress={handlePress}>
        <Text style = {styles.skipText}> Skip </Text>
        </TouchableOpacity>
        <Text style = {styles.createProfileText}> Create Profile </Text>
      </View>

      <View style = {styles.warningSpace}>
        <WarningContainer name='Kindly provide the correct info below' />
      </View>

      <View style = {styles.inputInformationSpace}>
        <TextInputs 
        setter = {setBusinessName}
        inputValue = {businessName} 
        inputPlaceholder = 'What is your business name?'
        inputName = 'businessName'
        />

        <TextInputs 
        setter = {setAddress}
        inputValue = {address}
        inputPlaceholder = 'What is your address?'
        inputName = 'address'
        />

        <TextInputs
        setter = {setFullName}
        inputValue = {fullname}
        inputPlaceholder = 'Your full name'
        inputName = 'fullname'
        />

        <TextInputs
        setter = {setExperience}
        inputValue = {experience}
        inputPlaceholder = 'How many years of experience do you have?'
        inputName = 'experience'
        />
       </View>

       <View style={styles.warningSpace}>
        <WarningContainer
        name='All necessary info will be sent to business contact provided below'/>
       </View>
      
          <View style={styles.numberSpaceContainer}>

            <View style={styles.countryCode}>
             <TextInput
              keyboardType='numeric'
              value={countryCode}
              onChangeText={setCountryCode}
              placeholder='+234'>
             </TextInput>
           </View>
          
          <View style = {styles.numberSpace}>
            <TextInput
            keyboardType='numeric'
            value={phoneNumber}
            onChangeText = {setPhoneNumber}
            placeholder='Phone Number'>
            </TextInput>  
          </View>

          </View>   
       
    </View>
    </ScrollView>
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
        flexDirection: "column",
        backgroundColor: 'white'
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
      },
      inputInformationSpace: {
      top: '10%',
      marginBottom: 45,
      },
      numberSpaceContainer: {
        flexDirection: 'row',
        marginLeft: 5,
        width: '100%',
        top: 40,
        height: 300
      },
      countryCode: {
        width: 10,
        height: 45,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 13,
        fontSize: 18
      },
      numberSpace: {
        width: 10,
        height: 45,
        borderRadius: 1,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        padding: 13
      }
})