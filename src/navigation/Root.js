import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListItem from "../components/ListItem";
import ItemPage from "../components/ItemPage";

const Stack = createStackNavigator();

export default function Root () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListItem" component={ListItem} />
      <Stack.Screen name="ItemPage" component={ItemPage} />
    </Stack.Navigator>
  );
};