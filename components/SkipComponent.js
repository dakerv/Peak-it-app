import react from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SkipComponent = props => {
    return (
         <TouchableOpacity onPress={handlePress}>
              <Text style = {styles.skipText}> Skip </Text>
             </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    skipText: {
    fontSize: 18,
    color: "#228B22",
    fontWeight: 500,
    textAlign: 'right'
    },
})