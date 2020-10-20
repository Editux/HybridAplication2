
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import RecipeScreen from './src/screens/Recipes';
import FoodDetails from './src/screens/FoodDetails'

export default function App() {
  const Drawer=createDrawerNavigator();
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home"
    drawerType= 'permanent'
     >
      <Drawer.Screen name ="Root" component={Root}/>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Recipes" component={RecipeScreen} />
    </Drawer.Navigator>
    
  </NavigationContainer>


  );
}
export function Root() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Food" component={FoodDetails} />
       
    </Stack.Navigator>
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

