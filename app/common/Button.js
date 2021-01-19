import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity} from 'react-native';

const Button = (props) =>{
    return(
        <TouchableOpacity style={styles.buttonText}
            onPress = {props.onPress}>
            <Text style={styles.buttonText} >
                { props.children }
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        height: 45,
        borderRadius: 5,
        marginHorizontal: 25,
        marginVertical: 10,
        backgroundColor: 'rgb(42, 55, 68)',
        justifyContent: 'center',
        flex: 1
    }, buttonText:{
        color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    }
});

export {Button};
