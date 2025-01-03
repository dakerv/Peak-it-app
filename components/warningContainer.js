import React from 'react'
import {Text, View, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const WarningContainer = props => {
    return (
        <View style = {styles.warningContainerStyle}>
          <MaterialIcons
            name='warning'
            size='16'
            color='orange' />
          <Text style = {styles.textStyle}> {props.name} </Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    warningContainerStyle: {
        flexDirection: 'row',
        height: 'auto',
        width: '100%',
        backgroundColor: '#E5F2FF',
        padding: 7,
        borderRadius: 5,
        textAlignVertical: 'center'
    },
    textStyle: {
        color: 'green',
        fontSize: 15,
    }
})

export default WarningContainer;