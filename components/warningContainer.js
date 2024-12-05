import React from 'react'
import {Text, View, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const WarningContainer = props => {
    return (
        <View styles = {styles.warningContainerStyles}>
          <Text style = {styles. textStyle}> Kindly {props.name} </Text>
            <MaterialIcons
            name='warning'
            size='20'
            color='orange' />
        </View>
    )
}

const styles = StyleSheet.create ({
    warningContainerStyles: {
        backgroundColor: 'lightblue',
        flexDirection: 'row',
        width: '100%',
        height: '20%'
    },
    textStyle: {
        color: 'green'
    }
})

export default WarningContainer;