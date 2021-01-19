// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {store} from './redux';

import StartPage from './StartPage';
import Login from './Login';
import Home from './Home';
import Regist from './Regist';
import NewEntry from './NewEntry';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="StartPage" component={StartPage}  />
       <Stack.Screen name="NewEntry" component={NewEntry}  />
        <Stack.Screen name="Regist" component={Regist} options={{ 
            headerLeft: null }}/>
        <Stack.Screen name="Login" component={Login} options={{ 
            headerLeft: null }}/>
        
        <Stack.Screen name="Home" component={Home} options={{ 
            headerLeft: null }}/> 
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;