import { react } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react';

const TextInputs = props => {

    const [businessName, setBusinessName ] = useState ();
    const [address, setAddress] = useState ();
    const [fullname, setFullName] = useState ();
    const [experience, setExperience] = useState ();

    return(
        <View>
            <TextInput
            style={styles.inputBoxes}
            onChangeText={props.setter}>  </TextInput>
        </View>
    )
}

const styles = StyleSheet.create ({
    inputBoxes: {
        width: '100%',
        height: '40%',
        borderColor: 'grey',
        borderRadius: 5,
    }
})

export default TextInputs