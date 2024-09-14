import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Components from './src/Components';
import Component_SecondPage from './src/Component_SecondPage';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Components" component={Components} />
        <Stack.Screen name="Component_SecondPage" component={Component_SecondPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
