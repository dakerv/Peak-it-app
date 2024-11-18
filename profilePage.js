import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';

export default function profilePage( { navigation }) {
  const handlePress = () => {
    alert ("Skip clicked!");
  };

  const handleNavigation = () => {
    navigation.navigate ('servicePage');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style = {styles.skipContainer}>
      <Text style = {styles.skipText}> Skip </Text>
      </TouchableOpacity>

      <View style={styles.welcomeContainer}>
        <Text style = {styles.welcomeText}> Create Your Profile </Text>
      </View>

      <Image style = {styles.imagePositioning} 
        source ={require('./assets/images/undraw_Profile_data_re_v81r 1.png')}  />

      <View style = {styles.greetingContainer}>
        <Text style = {styles.greetingText}> Set up your Vendor Dashboard/Restaurant to showcase your menu. </Text>
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
    top: 100,
  },
  greetingContainer: {
    top: '38%',
  },
  greetingText: {
    color: "grey",
    textAlign: "center"
  },
  buttonSpace: {
    top: '45%',
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
