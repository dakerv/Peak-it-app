import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import WarningContainer from '../components/WarningContainer';
import TextInputs from '../components/TextInputs'; 
import ButtonComponent from '../components/buttonComponent';

export default function createProfile ({ navigation }) {
    
    const handleNavigation = () => {
        navigation.navigate ('createProfile2')
    }

    const handlePress = () => {
        navigation.navigate ('signup');
    };


    const [businessName, setBusinessName ] = useState ();
    const [address, setAddress] = useState ();
    const [fullname, setFullName] = useState ();
    const [experience, setExperience] = useState ();
    const [country, setCountry] = useState ();
    const [countryCode, setCountryCode] = useState ();
    const [phoneNumber, setPhoneNumber] = useState ();
    const [businessAddress, setBusinessAddress] = useState ();
    const [professionType, setProfessionType] = useState ();
    const [vendorType, setVendorType] = useState ();
    const [workAlone, setWorkAlone] = useState ();
    const [promoCode, setPromoCode] = useState ();
    const [tickBox, setTickBox] = useState (null);
    const [texthighlight, setTextHighlight] = useState(null)
    
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

      <View style = {styles.warningSpace1}>
        <WarningContainer name='Kindly provide the correct info below' />
      </View>

      <View style = {styles.inputInformationSpace1}>
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

       <View style={styles.warningSpace1}>
        <WarningContainer
        name='All necessary info will be sent to business contact provided below'/>
       </View>

        
      <View style = {styles.inputInformationSpace1}>  
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

            <View style={[styles.countryCode, texthighlight === 'countryCode' && styles.textHighlightFeatures]}>
             <TextInput
              keyboardType='numeric'
              value={countryCode}
              onChangeText={setCountryCode}
              placeholder='+234'
              onFocus={() => setTextHighlight('countryCode')}
              onBlur={() => setTextHighlight (null)}>
             </TextInput>
           </View>
          
          <View style = {[styles.numberSpace, texthighlight === 'phoneNumber' && styles.textHighlightFeatures]}>
            <TextInput
            keyboardType='numeric'
            value={phoneNumber}
            onChangeText = {setPhoneNumber}
            placeholder='Phone Number'
            onFocus={() => setTextHighlight('phoneNumber')}
            onBlur={() => setTextHighlight (null)}>
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

    <View style={styles.warningSpace2}>
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

    <View style = {styles.warningSpace1}>  
    <WarningContainer
    name='In order to make points and benefits from PickEat PickIt please enter your membership ID' />
    </View> 

    <View style = {styles.inputInformationSpace1}>
      <TextInputs
      setter = {setPromoCode}
      inputValue = {promoCode}
      inputPlaceholder = 'Membership ID/Promo code'
      inputNmae = 'promoCode' />
    </View> 

    <View style = {styles.termsAndConditions}>
      <TouchableOpacity style = {[styles.tickboxGrayStyles, tickBox && styles.tickboxGreenStyles]}
      onPress={() => setTickBox ((prev) => !prev)}>
      {tickBox && <MaterialIcons name="check" size={15} color="white" />}
      </TouchableOpacity>

      <Text style = {styles.termsText}> I understand and agree with the Terms and Conditions </Text>
    </View>

    <View style = {styles.buttonSpace}>  
     <ButtonComponent
      function = {handleNavigation}
      buttonName = 'Continue' />
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
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: "column",
        backgroundColor: 'white',
        height: '100%',
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
      warningSpace1: {
        top: '2%'
      },
      warningSpace2: {
        marginVertical: 23,

      },
      inputInformationSpace1: {
        top: '3%',
        marginBottom: '10%',
        height: 'auto'
      },
      inputInformationSpace2: {
        height: 'auto',
        top: '5%'
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
      },
      termsAndConditions: {
        top: '1%',
        height: 80,
        flexDirection: 'row',
        width: '100%'
      },
      tickboxGrayStyles: {
        width: '5%',
        height: '20%',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
      },
      tickboxGreenStyles: {
        backgroundColor: 'green',
      },
      termsText: {
        paddingLeft: 3,
        paddingTop: 1,
        fontSize: 13.5
      },
      buttonSpace: {
        bottom: '2.5%'
      }
})