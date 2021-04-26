import * as React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";

import store from "./src/redux/store";
import Root from "./src/navigation/Root";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </Provider>
  );
}
