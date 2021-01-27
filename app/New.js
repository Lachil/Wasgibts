import React, {Component} from 'react';
import {View, Text, StyleSheet, BackHandler} from 'react-native';
import {BottomMenu} from './common';
import { ScrollView } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
    menu:{
        position: 'absolute',
        bottom:0,
        width: '100%',
    },   text:{
            fontSize: 16,
            flexWrap: 'wrap',
            
        },title:{
            borderBottomWidth: 2,
            borderColor: 'black'
        },titleText:{
            fontSize: 18,
            fontWeight: 'bold'
        },partContainer:{ 
            borderColor: 'black',
            borderWidth: 2,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            flex : 1,
            backgroundColor: 'white',
            margin: 10,
            padding: 10,
        }, container:{
            flex: 1
        }    
});

class New  extends Component {
    constructor(props){
        super(props);
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    handleBackButtonClick = () => {
        this.props.navigation.goBack(null);
        return true;
    };

    render(){
        return (
            <View style={styles.container}>
            <ScrollView>
            <View >
                <View style={styles.partContainer}>
                    <View style = {styles.title}>    
                        <Text style={styles.titleText}>Hinweise zum Einfügen von Einträge</Text>
                    </View>
                    <Text style={styles.text}>
                    Diese Plattform soll nur für Lern- und Erfahrungszweck, daher sollen nur informative Einträge eingefügt werden.
                    </Text>
                </View>
                <View style={styles.partContainer}>
                    <View style = {styles.title}>    
                        <Text  style={styles.titleText}>Hinweise zum Einfügen von Kategorien</Text>
                    </View>
                    <Text style={styles.text}>
                    Bitte fügen Sie nur dann Kategorien ein, wenn diese nicht exsistieren, und dies ein sinnvolle Thema anspricht.
                    Die Name einer Kategorie soll mehr als Buchstaben, ansprechend für ein bestimmtes Thema sein.   
                    </Text>
                </View>
            </View>
            </ScrollView>
            <View style = {styles.menu}>
                    <BottomMenu navigation={this.props.navigation} newEntry={true} newCategory={true}>
                    </BottomMenu>
                </View>
            </View>
        );
    }
};


  
  export default New;