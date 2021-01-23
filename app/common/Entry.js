import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity} from 'react-native';

const Entry = (props) =>{
    return(
        <View style={styles.container}>
            <View style={styles.header}><Text style= {styles.headerText}>{props.header}</Text></View>
            <View style={styles.body}><Text style={styles.bodyText}>{props.body}</Text></View>
            <View style={styles.footer}><Text style={styles.footerText} >{props.footer}</Text></View>
        </View>
        );
}

const styles = StyleSheet.create({
    container:{
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 25,
        backgroundColor: 'white',
        margin: 5,
        padding: 10,
    },header:{
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
   }, headerText:{
        fontWeight: "bold",
        fontSize: 18
   },body:{
        borderColor: 'gray',
        borderBottomWidth: 1,

   },bodyText:{
       fontSize:18
   }, footer:{
   },footerText:{
        fontSize:18
   }
});

export {Entry};
