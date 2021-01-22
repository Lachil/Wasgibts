import React,{Component} from 'react';
import {Text, FlatList, View, StyleSheet, ScrollView} from 'react-native';

import {Card, CardItem} from './common'



const styles = StyleSheet.create({
    text:{
        fontSize: 16,
        flexWrap: 'wrap',
        
    },title:{
        borderBottomWidth: 2,
        borderColor: 'black'
    },titleText:{
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

class Info  extends Component {

    
    render(){
        return (
                <ScrollView>
                <View style= {styles.container}>
                    <View style={styles.partContainer}>
                        <View style = {styles.title}>
                            <Text style = {styles.titleText}>Über uns</Text>
                        </View>
                        
                        <Text style={styles.text}>Diese App wurde von:
                        Ahmad Karim Dahrouj & Lhabib Lachil
                        im Rahmen der Modul "Mobile Computing" einentwickelt.
                        Modulverantwortlicher ist Herr Fatih Gedikli.
                        </Text>
                    </View>
                    <View style={styles.partContainer}>
                        <View style = {styles.title}>
                            <Text style = {styles.titleText}>impressum</Text>
                        </View>
                        
                        <Text style={styles.text}></Text>
                    </View>

                    <View style={styles.partContainer}>
                        <View style = {styles.title}>    
                            <Text>Über die App</Text>
                        </View>
                    <Text style={styles.text}>In dieser Arbeit haben wir uns für ein App, der eine Soziale Netzwerk zur Verfügung stellt. Dies soll aber allerdings für informative, weiterentwickelnde Informationen verwendet werden.
warum die App das Leben der Menschen verbessert?
Sie haben Interesse und Leidenschaft an einem Thema und wollen sich um alles Neues um das Thema informiert werden. Sie müssen jeden Tag selber am Internet um das Thema lange recherchieren müssen oder in die Fachzeitung nach dem Thema suchen? Wenn ja, würde Ihnen dies App behilflich sein. 
Die App ist dafür gedacht Benutzern an ihre Interessen und Leidenschaften auf dem Laufenden zu halten. Alle Einträge der App sind nach Kategorien angeordnet, von daher wird die App den Benutzern nur Einträge zeigen, deren Kategorie von Benutzer abonniert wurde. 
Benutzern können selber sowohl Kategorien als auch Einträge in App einfügen. Dies ermöglicht Benutzern eigene Kategorien, an denen Sie  Interesse haben, zu erstellen. Eingefügte Einträge  können alles Neues rund um das Kategorie Thema sein.
</Text>
                    </View>

                </View>
                </ScrollView>

                
        );
    }
};
  



export default Info;
