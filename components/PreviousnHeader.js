import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SkipComponent from "./SkipComponent";

const PreviousnHeader = props => {
    return (
        <View style = {styles.container}>

        <View style = {styles.backspacePlacement}>
         <MaterialIcons
          name='keyboard-backspace'
          size={22}
          onPress={() => navigation.goBack()} />
  
          <Text style = {styles.pageHeader}> {props.pageHeading} </Text>
        </View>
  
        <SkipComponent />

  
        </View>
    )
}

const styles = StyleSheet.create ({
    backspacePlacement: {
        top: '3%',
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
    },
    pageHeader: {
        alignSelf: 'center',
        fontWeight: 600,
        fontSize: 18,
        marginLeft: '26%'
    },
})

export default PreviousnHeader;