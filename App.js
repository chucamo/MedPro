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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="NavigationTag" component={NavigationTag} options={{ headerShown: false }}  />
      
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
