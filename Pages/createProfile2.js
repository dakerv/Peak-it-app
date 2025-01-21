import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Pressable, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity, Touchable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import WarningContainer from '../components/WarningContainer';
import TextInputs from '../components/TextInputs'; 
import ButtonComponent from '../components/ButtonComponent';
import * as ImagePicker from 'expo-image-picker'
import { StatusBar } from 'expo-status-bar';
import PreviousnHeader from '../components/PreviousnHeader'

export default function CreateProfile2 ({ navigation }) {

    const [storeImageUri, setStoreImageUri] = useState(null);
    const [coverImageUri, setCoverImageUri] = useState(null);
    const [enterDetails, setEnterDetails] = useState('')
    const [additionalDetails, setAdditionalDetails] = useState ('')
  
    useEffect(() => {
      (async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {J
          alert('Enable camera access to upload image');
        }
      })();
    }, []);
  
    const pickStoreImage = async () => {
    try {    
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: 'images',
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      console.log('Store image picker result:', result);
  
      if (!result.canceled) {
        setStoreImageUri (result.assets [0].uri);
      }
    } catch (error) {
        console.log('Error picking image:', error);
    }
  };
    
  
    const pickCoverImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: 'images',
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      console.log('Cover Image Picker result:', result)
  
      if (!result.canceled) {
        setCoverImageUri(result.assets[0].uri);
      }
    } catch (error) {
        console.log('Error picking image:', error)
     }  
    };
  

    const handleNavigation = () => {
        navigation.navigate ('SetAvailability')
    }

    const handlePress = () => {
        navigation.navigate ('Signup');
    };

    return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{ flex: 1 }}>

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

      <View style = {styles.startingContainer}> 
     <PreviousnHeader
     pageHeader = 'Create Profile' />
    </View>

        <View style={styles.container}>

        <View style ={styles.enquiryBoxes}>

        <TouchableOpacity style ={styles.circles} onPress={pickStoreImage}> 
         {storeImageUri ? (
         <Image 
         source={{ uri: storeImageUri }} 
         style={styles.selectedImage} />
         ) : (
         <>
         <Image source={require('../assets/images/system-uicons_camera-alt.png')} />
         <Text style = {styles.textStyles}> Upload store image </Text> 
         </>
         )}
         </TouchableOpacity> 
        

        <View style = {styles.textboxesStyles}>
         <Text style = {styles.MrMoesStyles}> Mr. Moe's Kitchen </Text>
         <Text style = {styles.restaurantStyles}> Restaurant </Text>

         <Text style = {styles.emailStyles}> {'\n'} creativeomotayo@gmail.com  </Text>
         <Text style = {styles.numberStyles}>+234 906 3287 855</Text>
        </View>

        </View>

        <View style = {styles.enquiryBoxes}>
        
         <TouchableOpacity style ={styles.circles} onPress={pickCoverImage}>
          {coverImageUri ? (
          <Image 
          source={{ uri: coverImageUri }} 
          style={styles.selectedImage} />
          ) : (
          <> 
          <Image source={require('../assets/images/system-uicons_camera-alt.png')} />
          <Text style = {styles.textStyles}> Upload cover photo </Text>
          </>
          )}
         </TouchableOpacity>

         <View style = {styles.textboxesStyles}>
          <Text style = {styles.uploadPhotosStyles}> Upload store cover photo </Text>
          <Text style = {styles.allowedFormatsStyles}> {'\n'} Allowed formats </Text>
          <Text style = {styles.jpgAndPng}> {'\u2022'} Jpg </Text>
          <Text style = {styles.jpgAndPng}> {'\u2022'} Png </Text>
          <Text style = {styles.jpgAndPng}> Less than 1mb </Text>
         </View>

        </View>

        <View style = {styles.enquirySpace}>
           <View style = {styles.inputEnquiryBoxes}>
              <Text style = {styles.businessDescriptionStyles}> Business Description </Text>
              <View style = {styles.line}></View>

             
              <TextInput
                multiline
                style = {styles.detailsInput}
                value= {enterDetails}
                placeholder = 'Kindly provide details below'
                onChangeText={setEnterDetails}>
              </TextInput>
            
            </View>

            <View style = {styles.inputEnquiryBoxes}>
                <Text style = {styles.businessDescriptionStyles}> Additional Info </Text>
                <View style = {styles.line}></View>

                
                <TextInput
                multiline
                placeholder = 'Please provide additional details if need be'
                style = {styles.detailsInput}
                value= {additionalDetails}
                onChangeText={setAdditionalDetails}>
                
                </TextInput>
              
            </View>
        </View>

        <View style = {styles.buttonPlacement}>
        <ButtonComponent 
        buttonName = 'Continue'
        function = {handleNavigation}/>
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
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: "column",
        borderRadius: 25
    },
    startingContainer: {
        backgroundColor: 'white',
        width: '100%',
        marginTop: 30,
        marginBottom: 30,
        paddingRight: 12,
        paddingLeft: 12,
    },
    createProfileText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 12
    },
    textHighlightFeatures: {
      borderColor: 'green',
      borderWidth: 2,
    },
    skipText: {
      marginTop: 5,
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
        alignItems: 'flex-start',
    },
    circles: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#E5F2FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        overflow: 'hidden'
    },
    selectedImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    textStyles: {
        fontSize: 10,
        textAlign: 'center',
        padding: 5,
        fontWeight: 'bold'
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
        fontWeight: 600,
        fontSize: 15
    },
    numberStyles: {
        fontWeight: 600,
        fontSize: 15,
        color: '#228B22',
    },
    uploadPhotosStyles: {
        fontWeight: 600,
        fontSize: 15,
        color: '#228B22'
    },
    allowedFormatsStyles: {
        color: 'grey'
    },
    jpgAndPng: {
        color: 'grey'
    },
    enquirySpace: {
        flexDirection: 'column',
        columnGap: 8,
        height: 400,
    },
    inputEnquiryBoxes: {
        width: 340,
        height: 150,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 28,
        paddingHorizontal: 12,
        paddingVertical: 13,
        flexDirection: 'column', 
    },
    businessDescriptionStyles: {
        fontSize: 18,
        fontWeight: 600,
        color: '#228B22',
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#228B22',
    },
    detailsInput: {
        fontSize: 15,
        width: '100%',
        height: '100%',
        textAlignVertical: 'top'
      
    },
    buttonPlacement: {
        height: 20,
        bottom: '5%',
        marginBottom: 20
    }
})