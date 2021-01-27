import React,{Component} from 'react';
import {Text, FlatList, View, StyleSheet} from 'react-native';
import Textarea from 'react-native-textarea';
import {connect} from 'react-redux';
import {addEntry} from './redux';


import CategoryList from './common/CategoryList';
import {Button, Card, CardItem, Spinner} from './common'
import CategoryDrowpDown from './common/CategoryDrowpDown'


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
    }, message:{
        fontSize: 18,

    }, error:{
        color: 'red'
    }
});

class NewEntry  extends Component {

    constructor(){
        super();
        this.state = {
            text : '',
            category : {},
            succesMsgVisible: false
        };
    }

    componentDidMount(){
        this.props.error = '';
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.loading == false && nextProps.success == true){
            this.onSuccess();
        }
    }
    
    onSuccess(){
        this.setState({
            succesMsgVisible: true
        },()=>{setTimeout(() => {
            this.props.navigation.navigate('Home');  
        }
        , 2000)}) 
    }


    onAddEntryPressed(){
        console.log('state:' + JSON.stringify(this.state));
        const { text, category } = this.state;
        this.props.addEntry({text, category});
    }

    renderAddEntryButton(){
        if(this.props.loading){
            return (<Button ><Spinner /> </Button>);
        }
        return (<Button onPress={this.onAddEntryPressed.bind(this)}>Einfügen !</Button>);
    }

    updateCategory(categoryP){
        this.setState({ category : categoryP});
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
                        <CategoryDrowpDown updateParentCategory= {this.updateCategory.bind(this)}></CategoryDrowpDown>
                    </CardItem>
                    
                    <CardItem>
                        {this.renderAddEntryButton()}
                    </CardItem>
                    
                    <CardItem>
                    {this.state.succesMsgVisible &&
                    !this.props.loading && this.props.success &&
                     <Text style={styles.message}>Eintrag wurde erfolgreich eingefügt!</Text>}
                        <Text style={[styles.message, styles.error]}>{this.props.error}</Text>
                    </CardItem>
                    
                </Card>
        );
    }
};
  

function mapStateToProps(state) {
    return {
      error: state.entries.error,
      loading: state.entries.loading,
      success: state.entries.success
    };
  }


export default connect(mapStateToProps, { addEntry })(NewEntry);
