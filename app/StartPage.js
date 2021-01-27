import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, StyleSheet,Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import {checkToken} from './redux'
import {Spinner} from './common';
import { TOKEN } from './redux';


class StartPage extends Component{

    constructor(props){
        super(props);
    }
    
    componentDidMount() {
        AsyncStorage.getItem(TOKEN).then((token) => {
            if (token) {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                console.log('token is setted: ' + axios.defaults.headers.common['Authorization']);
                this.props.checkToken();
              }else {
                this._navigate('Login');
              }
        }) 
      }

    componentWillReceiveProps(nextProps){
      console.log('startpage.props: ' + JSON.stringify(nextProps));
      if(nextProps.loading == false){
        if(nextProps.user){
          this._navigate('Home');
        }else{
          this._navigate('Login');  
        }
      }
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


const mapStateToProps = state => {
  return {
      user: state.token.user,
      loading: state.token.loading,
  }
}

export default connect(mapStateToProps, {checkToken})(StartPage);