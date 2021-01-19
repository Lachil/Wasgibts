import React, {Component} from 'react';
import {View, StyleSheet, Text, CheckBox} from 'react-native';

import {Card, CardItem} from '../common';

const styles = StyleSheet.create({
    view:{
        flex: 1,
        flexDirection: 'row',
        alignItems : 'center',
        height: 40
    },text:{
        fontSize: 16,
        paddingLeft: 10,
        flex: 1
     }, checkBox :{
        fontSize: 16,
        color: '#000',
        paddingLeft: 10,
        paddingRight: 5,
        flex: 2
      }
    

});

class CheckItem  extends Component {

    constructor(){
        super();
        this.state = {checked: false};
    }

    valueChanged(){
        this.setState({ checked: !this.state.checked })
    }

    render(){
        return (
                
            <View style = {styles.view}>
                
                <Text style = {styles.text} >{this.props.children}</Text>
                <CheckBox
                    style = {styles.checkBox}
                    value={this.state.checked}
                    onValueChange = {this.props.onValueChange}
                    onValueChange={() => {
                        this.props.onValueChange();
                        console.log('CheckItem');
                        this.setState({ checked: !this.state.checked });
                    } }

                /> 
            </View>
            
        );
    }
};
  
  export {CheckItem} ;