import React,{Component} from 'react';
import {Text, FlatList, View, StyleSheet, TextInput} from 'react-native';
import Textarea from 'react-native-textarea';
import {connect} from 'react-redux';
import {addCategory} from './redux';

import {Button, Card, CardItem, Spinner, Input} from './common'


const styles = StyleSheet.create({
    text:{
        margin: 5,
        fontSize: 16,
        textAlignVertical: 'center'  
    }, input:{
        flex: 1
    }, message:{
        fontSize: 18,
    }, error:{
        color: 'red'

    }
});

class NewCategory  extends Component {

    constructor(){
        super();
        this.state = {
            name : '',
            succesMsgVisible: false
        };
    }

    componentDidMount(){
        this.props.error = '';
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loading == false && nextProps.success == true) {
            this.onSuccess();
        }
      }

    onAddCategoryPressed(){
        console.log('state:' + JSON.stringify(this.state));
        const { name } = this.state;
        this.props.addCategory({name}); 
    }

    renderAddCategoryButton(){
        if(this.props.loading){
            return (<Button ><Spinner /> </Button>);
        }
        return (<Button onPress={this.onAddCategoryPressed.bind(this)}>Einfügen !</Button>);
    }

    onSuccess(){
        this.setState({
            succesMsgVisible: true
        },()=>{setTimeout(() => {
            this.props.navigation.navigate('Home');  
        }
        , 2000)}) 
    }

    render(){
        return (
                <Card>
                    <CardItem>
                    <Text style={styles.text}>Kategorie Name: </Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='#aaaaaa'
                        placeholder='Kategorie Name'
                        onChangeText={(name) => this.setState({ name }) }
                        underlineColorAndroid='transparent'
                        autoCapitalize='none'
                        />
                        
                    </CardItem>
                    <CardItem>
                        {this.renderAddCategoryButton()}
                    </CardItem>
                    <CardItem>                    
                    {this.state.succesMsgVisible &&
                    !this.props.loading && this.props.success &&
                     <Text style={styles.message}>Kategorie wurde erfolgreich eingefügt!</Text>}
                    <Text style={[styles.message, styles.error]}>{this.props.error}</Text>
                    </CardItem>
                </Card>
        );
    }
};
  

function mapStateToProps(state) {
    return {
      error: state.categories.error,
      loading: state.categories.loading,
      success: state.categories.success,
      data: state.categories.data
    };
  }

export default connect(mapStateToProps, { addCategory })( NewCategory);
