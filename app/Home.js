import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN} from './redux'

class Home  extends Component {

    token(){
        console.log('HOME');
        AsyncStorage.getItem(TOKEN).then((token) => {
            if (token) {
                console.log('token: ' + token);
            }else {
                console.log('no token');
            }
        });
    }

    render(){
        return (
            <View>
                {this.token()}
            </View>
        );
    }
};


  
  export default Home;