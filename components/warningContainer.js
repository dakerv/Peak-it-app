import React from 'react'
import {Text, View, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const WarningContainer = props => {
    return (
        <View style = {styles.warningContainerStyle}>
          <MaterialIcons
            name='warning'
            size='20'
            color='orange' />
          <Text style = {styles.textStyle}> Kindly {props.name} </Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    warningContainerStyle: {
        flexDirection: 'row',
        height: '25%',
        width: '100%',
        backgroundColor: '#E5F2FF',
        paddingTop: 15,
        paddingLeft: 10,
        borderRadius: 5
    },
    textStyle: {
        color: 'green',
        fontSize: 18,
    }
})

export default WarningContainer;