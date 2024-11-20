import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import welcomePage from './welcomePage';
import profilePage from './profilePage';
import servicePage from './servicePage';
import availabilityPage from './availabilityPage';
import orderPage from './orderPage';
import startedPage from './startedPage';
import signup from './signup';
import enterPin from './enterPin';

const Stack = createNativeStackNavigator ();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}} intialRouteName = 'welcomePage'>
        <Stack.Screen 
          name="welcomePage" 
          component={welcomePage}/>

        <Stack.Screen
          name="profilePage"
          component={profilePage} />

        <Stack.Screen
          name="servicePage"
          component={servicePage} />

        <Stack.Screen
          name="availabilityPage"
          component={availabilityPage} />

        <Stack.Screen
          name="orderPage"
          component={orderPage} />

        <Stack.Screen 
          name="startedPage"
          component={startedPage} />

        <Stack.Screen 
          name="signup"
          component={signup} />

        <Stack.Screen 
          name="enterPin"
          component={enterPin} /> 

      </Stack.Navigator> 
    </NavigationContainer>
  );
};