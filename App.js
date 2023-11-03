import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionic from 'react-native-vector-icons/Ionicons'
import Auth from './src/componnets/Auth';
import Header from './src/componnets/Header';
import Loading_Home from './src/screens/Loading_Home';
import Logged from './src/screens/Logged';
import Login from './src/componnets/Login';
import Question from './src/screens/Questions';
import Seacrch from './src/screens/Search';
import Select_facility from './src/screens/Select_Facility';
import Usage_Rules from './src/screens/Usage_Rules';
import NavigationTag from './src/screens/NavigationTag';
import FogotPassword from './src/componnets/FogotPassword';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';

export default function App() {
  const baseUrl = 'https://medpro.onrender.com/api/v1/auth/getAllUser';
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const [user, setUsert] = useState("");
  axios.get(baseUrl)
  .then(function (response) {
    setUsert(response)
  })
  .catch(function (error) {
    console.log(error);
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Auth" component={Auth} options={{headerShown:false}}/>
        <Stack.Screen name="NavigationTag" component={NavigationTag} options={{ headerShown: false }} />
        <Stack.Screen name="Usage_Rules" component={Usage_Rules} options={{ headerShown: false }} />
        <Stack.Screen name="FogotPassword" component={FogotPassword} options={{headerShown:false}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
