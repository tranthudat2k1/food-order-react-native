import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantScreen from '../../features/restaurants/screens/restaurants.screen';
import { TransitionPresets } from '@react-navigation/stack';
import RestaurantDeatail from "../../features/restaurants/screens/restaurantDeatail.screen";
const Restaurant = createStackNavigator();

export const RestaurantStack = () => {
  const screenOptions = {
    headerShown : false
  }
  return (
    <Restaurant.Navigator screenOptions={screenOptions}>
      <Restaurant.Screen name="Restaurant" component={RestaurantScreen} />
      <Restaurant.Screen name="RestaurantDetail" component={RestaurantDeatail} options={{...TransitionPresets.ModalPresentationIOS}}/>
    </Restaurant.Navigator>
  );
}