import React, { useState } from 'react'
import { TransitionPresets,createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
import AuthNavigation from './AuthNavigation';
import TabNavigation from './TabNavigation/index';
import { useUserStore } from '@/store/useUserStore';
const RootNavigation = () => {
  const { session } = useUserStore();
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown:false,
      ...TransitionPresets.SlideFromRightIOS,
      animationEnabled:true,
      gestureEnabled:true,
      gestureDirection:'horizontal'
    }} >
        {
          session ? (
            <Stack.Screen name="TabNavigation" component={TabNavigation} />
          ) : (
            <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
          )
        }
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation
