import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN} from './redux'
import BottomMenu from './common/BottomMenu';

const styles = StyleSheet.create({
    menu:{
        position: 'absolute',
        bottom:0,
        width: '100%',
        marginBottom: 0,
        backgroundColor: 'white',
        borderWidth:2,
        borderColor: 'black',
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
        padding: 10,
        paddingTop:0,
        paddingBottom:0
    }
});

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

            <View style = {styles.menu}>
                <BottomMenu navigation={this.props.navigation} add={true} edit={true} aboutUs={true}></BottomMenu>
            </View>
        );
    }
};


  
  export default Home;