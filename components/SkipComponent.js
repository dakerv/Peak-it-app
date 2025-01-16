import react from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const SkipComponent = props => {
    return (
         <TouchableOpacity onPress={props.function} style = {styles.skipContainer}>
              <Text style = {styles.skipText}> Skip </Text>
             </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    skipContainer:{
    flexDirection: "row",
    height: "3%",
    width: "100%",
    alignContent: "flex-end",
    justifyContent: "flex-end",
    paddingTop: 1
    },
    skipText: {
    fontSize: 18,
    color: "#228B22",
    fontWeight: 500,
    textAlign: 'right'
    },
})

export default SkipComponent;