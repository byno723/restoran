import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Home,
  Login,
  Register,
  Splash,
  DaftarMenu,
  Kalatog,
  Cart,
  Detailprofile,
  CheckOut,
} from '../pages';
const Stack = createStackNavigator();

export default function index() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detailprofile"
        component={Detailprofile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckOut}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Katalog"
        component={Kalatog}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DaftarMenu"
        component={DaftarMenu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
