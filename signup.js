import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';

export default function signup ({ navigation }) {
    return (
        <View style = {styles.container}>
            <Text> Hi </Text>
        </View>
    );
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 60,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: "column"
      },
}
)
