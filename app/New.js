import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN} from './redux'
import BottomMenu from './common/BottomMenu';
import MenuItem from './common/BottomMenu';


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