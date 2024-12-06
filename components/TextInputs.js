import { react } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react';

const TextInputs = props => {

    
    const [inputHighlight, setInputHighlight] = useState (null)

    return(
        <View style= {[styles.inputBoxes, inputHighlight === props.inputName && styles.textHighlightFeatures]} >
            <TextInput
            style={styles.inputContainers}
            onChangeText={props.setter}
            value={props.inputValue}
            placeholder={props.inputPlaceholder}
            onFocus={() => setInputHighlight (props.inputName)}
            onBlur={() => setInputHighlight (null)} >
            </TextInput>
        </View>   
    )
}

const styles = StyleSheet.create ({
    inputBoxes: {
        width: '100%',
        height: '35%',
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: 'black'
    },
    inputContainers: {
        borderColor: 'black',
        padding: 15
    },
    textHighlightFeatures: {
        borderColor: 'green',
        borderWidth: 2
    }
})

export default TextInputs