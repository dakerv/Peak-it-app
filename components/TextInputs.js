import { react } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react';

const TextInputs = props => {

    
    const [inputHighlight, setInputHighlight] = useState (null)

    return(
        
            <TextInput
            style={[styles.inputBoxes, inputHighlight === props.inputName && styles.textHighlightFeatures]}
            onChangeText={props.setter}
            value={props.inputValue}
            placeholder={props.inputPlaceholder}
            onFocus={() => setInputHighlight (props.inputName)}
            onBlur={() => setInputHighlight (null)}>
            </TextInput>   
    )
}

const styles = StyleSheet.create ({
    inputBoxes: {
        width: '100%',
        height: '10%',
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: 'grey',
        padding: 15,
        borderWidth: 1,
        flex: 1,
        marginVertical: 7
    },
    inputContainers: {
        
    },
    textHighlightFeatures: {
        borderColor: 'green',
        borderWidth: 2
    }
})

export default TextInputs