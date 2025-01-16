import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


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
      <Stack.Navigator screenOptions={{ headerShown: false}} intialRouteName = 'WelcomePage'>
        <Stack.Screen 
          name="WelcomePage" 
          component={WelcomePage}/>

        <Stack.Screen
          name="ProfilePage"
          component={ProfilePage} />

        <Stack.Screen
          name="ServicePage"
          component={ServicePage} />

        <Stack.Screen
          name="AvailabilityPage"
          component={AvailabilityPage} />

        <Stack.Screen
          name="OrderPage"
          component={OrderPage} />

        <Stack.Screen 
          name="StartedPage"
          component={StartedPage} />

        <Stack.Screen 
          name="Signup"
          component={Signup} />

        <Stack.Screen 
          name="EnterPin"
          component={EnterPin} />

        <Stack.Screen
        name="LoginPage"
        component={LoginPage} />

        <Stack.Screen
        name='ForgotPassword'
        component={ForgotPassword} />

        <Stack.Screen
        name='ConfirmPin'
        component={ConfirmPin} />

        <Stack.Screen
        name='CreateProfile'
        component={CreateProfile} />

        <Stack.Screen
        name='CreateProfile2'
        component={CreateProfile2} />

      </Stack.Navigator> 
    </NavigationContainer>
  );
};