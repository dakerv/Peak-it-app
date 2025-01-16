import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
  
        <SkipComponent function = {handlePress} />
  
        <View style = {styles.greenBackground}>
  
        </View>
      </View>
    )
}

export default PreviousnHeader;