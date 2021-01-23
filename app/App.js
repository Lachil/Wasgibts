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
import NewCategory from './NewCategory';
import Info from './Info';
import New from './New';

const Stack = createStackNavigator();



function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Regist" component={Regist} options={{ 
            headerLeft: null }}/>
        
        <Stack.Screen name="Login" component={Login} options={{ 
            headerLeft: null }}/>
      

        <Stack.Screen name="Home" component={Home} options={{ 
            headerLeft: null }}/> 
        
        <Stack.Screen name="New" component={New} options={{ 
            headerLeft: null }}/> 
        
        <Stack.Screen name="NewCategory" component={NewCategory} options={{ 
            headerLeft: null }}/> 
        
        <Stack.Screen name="NewEntry" component={NewEntry} options={{ 
            headerLeft: null }}/> 
        
        <Stack.Screen name="Info" component={Info} options={{ 
            headerLeft: null }}/>
        
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;