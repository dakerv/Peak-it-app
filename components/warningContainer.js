import React from 'react'
import {Text, View, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const warningContainer = props => {
    return (
        <View styles = {styles.warningContainerStyles}>
          <Text> Kindly {props.name} </Text>
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
    }
})