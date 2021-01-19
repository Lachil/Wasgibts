import React,{Component} from 'react';
import {Text, FlatList, View, StyleSheet} from 'react-native';
import Textarea from 'react-native-textarea';

import CategoryList from './common/CategoryList';
import {Button, Card, CardItem} from './common'

const styles = StyleSheet.create({
    text:{
        margin: 5,
        fontSize: 16,
    },textarea:{
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
        margin: 5,
        paddingLeft: 5,
        paddingRight: 5,
        height: 100
    }
});

class NewEntry  extends Component {

    constructor(){
        super();
        this.state = {
            text : '',
            category : {}
        };
    }

    render(){
        return (
                <Card>
                <CardItem>
                <Text style = {styles.text} >Schreiben Sie Ihre Eintrag:</Text>
                </CardItem>
                <CardItem>
                <Textarea
                    style = {styles.textarea}
                    placeholder = 'schreib etwas'
                    onChangeText={(text) => this.setState({ text  }) }
                />
                </CardItem>
                    <CardItem>
                            <CategoryList checkedItem = {this.state.category}
                            checkedItems = {[]}
                            >
                        Wählen Sie die Kategorien, die Sie abonieren wollen:</CategoryList>
                    </CardItem>
                
                    <CardItem>
                        <Button>Einfügen !</Button>
                    </CardItem>
                </Card>
        );
    }
};
  
export default NewEntry;