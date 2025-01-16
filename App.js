import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import welcomePage from './Pages/welcomePage';
import profilePage from './Pages/profilePage';
import servicePage from './Pages/servicePage';
import availabilityPage from './Pages/availabilityPage';
import orderPage from './Pages/orderPage';
import startedPage from './Pages/startedPage';
import signup from './Pages/signup';
import enterPin from './Pages/enterPin';
import loginPage from './Pages/loginPage';
import forgotPassword from './Pages/forgotPassword';
import confirmPin from './Pages/confirmPin';
import createProfile from './Pages/createProfile';
import createProfile2 from './Pages/createProfile2';



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

        <Stack.Screen
        name="loginPage"
        component={loginPage} />

        <Stack.Screen
        name='forgotPassword'
        component={forgotPassword} />

        <Stack.Screen
        name='confirmPin'
        component={confirmPin} />

        <Stack.Screen
        name='createProfile'
        component={createProfile} />

        <Stack.Screen
        name='createProfile2'
        component={createProfile2} />

      </Stack.Navigator> 
    </NavigationContainer>
  );
};