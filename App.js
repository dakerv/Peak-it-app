import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import WelcomePage from './Pages/WelcomePage';
import ProfilePage from './Pages/ProfilePage';
import ServicePage from './Pages/ServicePage';
import AvailabilityPage from './Pages/AvailabilityPage';
import OrderPage from './Pages/OrderPage';
import StartedPage from './Pages/StartedPage';
import Signup from './Pages/Signup';
import EnterPin from './Pages/EnterPin';
import LoginPage from './Pages/LoginPage';
import ForgotPassword from './Pages/ForgotPassword';
import ConfirmPin from './Pages/ConfirmPin';
import CreateProfile from './Pages/CreateProfile';
import CreateProfile2 from './Pages/CreateProfile2';



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