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
    const [professionType, setProfessionType] = useState ();
    const [vendorType, setVendorType] = useState ();
    const [workAlone, setWorkAlone] = useState ();
    
    return (
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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

        
      <View style = {styles.inputInformationSpace}>  
        <TextInputs 
         setter = {setBusinessName} 
         inputValue = {businessName}
         inputPlaceholder = 'Business Name*'
         inputName ='businessName'/>

        <TextInputs
         setter = {setCountry}
         inputValue = {country}
         inputPlaceholder = 'Select country/region (Nigeria)'
         inputName = 'country'/>
      
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

        <TextInputs
        setter = {setBusinessAddress}
        inputValue = {businessAddress}
        inputPlaceholder ='Business Address'
        inputName = 'businessAddress'
         />   

        </View>

    <View style={styles.warningSpace}>
     <WarningContainer
      name = 'All details you provided must be true, accurate and non-misleading. In the event you provided wrong information, you shall be held liable for such misconduct'/>
    </View>

    <View styles={styles.inputInformationSpace2}>
      <TextInputs
      setter = {setProfessionType}
      inputValue = {professionType}
      inputPlaceholder = 'Profession'
      inputName = 'professionType' />

      <TextInputs
      setter = {setVendorType}
      inputValue = {vendorType}
      inputPlaceholder = 'Vendor Type'
      inputName = 'vendorType' />

      <TextInputs
      setter = {setWorkAlone}
      inputValue = {workAlone}
      inputPlaceholder = 'Do you work alone?'
      inputName = 'workAlone' />
    </View>

    <View style = {styles.warningSpace}>  
    <WarningContainer
    name='In order to make points and benefits from PickEat PickIt please enter your membership ID' />
    </View> 

    <View style = {styles.inputInformationSpace}>
      
    </View> 

    </View>
    </ScrollView>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: "column",
        backgroundColor: 'white',
        height: '100%',
        borderColor: 'red',
        borderWidth: 2
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
        top: '3%'
      },
      inputInformationSpace: {
        top: '5%',
        marginBottom: '10%',
        height: 'auto'
      },
      inputInformationSpace2: {
        height: 'auto'
      },
      numberSpaceContainer: {
        flexDirection: 'row',
        marginLeft: 5,
        width: '100%',
        marginVertical: 7
      },
      countryCode: {
        width: '21.5%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 15,
        fontSize: 18,
        marginRight: 1,
        right: 5
      },
      numberSpace: {
        width: '76.8%',
        borderRadius: 1,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        padding: 15
      }
})