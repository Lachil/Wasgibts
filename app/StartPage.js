import React, {Component} from 'react';
import {Text, View, StyleSheet,Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import {Spinner} from './common';
import { TOKEN } from './redux';


class StartPage extends Component{

    constructor(){
        super();
    }
    
    componentDidMount() {
        AsyncStorage.getItem(TOKEN).then((token) => {
            if (token) {
                this._navigate('Home');
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                console.log('token is setted: ' + axios.defaults.headers.common['Authorization']);
              }else {
                this._navigate('Login');
              }
        }) 
      }

      _navigate(screen) {
        setTimeout(() => {
          this.props.navigation.navigate(screen);
        }, 1000 );
    
      }


    render(){
        return(
            <View style={styles.view}>
              <Text style={styles.subTitle} >Willkomen zu unsere App</Text>
              <Image
          style={styles.logo}
          source={require('./assets/logo.png')}
        />
                <Spinner />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    alignSelf: 'center',
    margin: 80,
  },
    view:{
        height:80,
        alignItems: 'center',
        justifyContent: 'center',
        flex:2
    },subTitle:{
        fontSize: 14
    },title:{
        fontSize: 38
    }
});

export default StartPage;