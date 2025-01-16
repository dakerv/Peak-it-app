import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';

export default function WelcomePage({ navigation }) {
  const handlePress = () => {
    navigation.navigate ('signup');
  };

  const handleNavigation = () => {
    navigation.navigate ('profilePage');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style = {styles.skipContainer}>
      <Text style = {styles.skipText}> Skip </Text>
      </TouchableOpacity>

      <View style={styles.welcomeContainer}>
        <Text style = {styles.welcomeText}> Welcome </Text>
      </View>

      <Image style = {styles.imagePositioning} 
        source = {require('../assets/images/welcome_cats.png')}  />

      <View style = {styles.greetingContainer}>
        <Text style = {styles.greetingText}> Welcome to your PickitPickEat for vendor expertise. </Text>
        <Text style = {styles.greetingText2}>  Join us and start your journey today. </Text> 
      </View>

      <View style = {styles.buttonSpace}>
      <TouchableOpacity onPress={handleNavigation} 
      style = {styles.greenButton}> 
      <Text style = {styles.nextText}> Next </Text>
      </TouchableOpacity>
      </View>
      
      <StatusBar style= {styles.statusBar}
      backgroundColor='green' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "column"
  },
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
    fontWeight: 500
  },
  welcomeContainer: {
    height: "3%",
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    top: 20
  },
  welcomeText: {
    fontWeight: 500,
    fontSize: 20,
  },
  imagePositioning: {
    top: 180,
  },
  greetingContainer: {
    top: '40%',
  },
  greetingText: {
    color: "grey",
  },
  greetingText2: {
    color: "grey",
    textAlign: "center"
  },
  buttonSpace: {
    top: '50%'
  },
  greenButton: {
    backgroundColor: '#228B22',
    width: "80%",
    alignSelf: "center",
    height: 50,
    borderRadius: 5,
    padding: 15
  },
  nextText: {
    color: 'white',
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "bold"
  }
});
