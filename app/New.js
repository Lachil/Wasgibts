import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN} from './redux'
import {BottomMenu} from './common';
import MenuItem from './common/BottomMenu';


const styles = StyleSheet.create({
    menu:{
        position: 'absolute',
        bottom:0,
        width: '100%',
    }
});

class New  extends Component {

    render(){
        return (

            <View style = {styles.menu}>
                <BottomMenu navigation={this.props.navigation} newEntry={true} newCategory={true}>
                </BottomMenu>
            </View>
        );
    }
};


  
  export default New;