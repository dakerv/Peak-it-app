import { react } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react';

const TextInputs = props => {

    
    const [inputHighlight, setInputHighlight] = useState (null)

    return(
        <View>
            <TextInput
            style={styles.inputBoxes}
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
        height: '40%',
        borderColor: 'grey',
        borderRadius: 5,
    }
})

export default TextInputs