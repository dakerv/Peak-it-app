import react from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const ButtonComponent = props => {
    return(
         <TouchableOpacity onPress={props.function} 
        style = {styles.greenButton}> 
        <Text style = {styles.nextText}> {props.buttonName} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
greenButton: {
    backgroundColor: '#228B22',
    width: "80%",
    alignSelf: "center",
    height: 50,
    borderRadius: 5,
    padding: 15,
  },
  buttonSpace: {
    top: '13%'
  },
  nextText: {
    color: 'white',
    fontSize: 16,
    alignSelf: "center",
    fontWeight: "bold"
  },
})

export default ButtonComponent;

