import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity} from 'react-native';

class Entry extends Component {
    constructor(props){
        super(props);
        this.state = {
            entry: props.entry
        };
    }
    
    getText(part){
        let item = this.state.entry;
        switch(part){
            case 'header':
            return  (  '@' + item.user.username + ' #' + item.category.name  + ' <' + item.creatingDate +'>');
            case 'body':
            return (item.text);
            case 'footer':
            return (item.comments.length === 0 ? 'Noch keine Kommentare' : (item.comments.length + ' Kommentare'));    
        }
    
    }

    onPress(){
        this.props.navigation.navigate('EntryView', {entry : this.state.entry});
    }

    render(){
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={this.onPress.bind(this)}>
            <View style={styles.header}><Text style= {styles.headerText}>
                {this.getText('header')}
            </Text></View>
            <View style={styles.body}><Text style={styles.bodyText}>{this.getText('body')}</Text></View>
            <View style={styles.footer}><Text style={styles.footerText} >{this.getText('footer')}</Text></View>
            </TouchableOpacity>
        </View>
        );
    }
};

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
