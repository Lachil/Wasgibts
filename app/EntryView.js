import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput, 
  SafeAreaView} from 'react-native';
import {connect} from 'react-redux'

import {Input, Button, Spinner} from './common'
import {addComment} from './redux'


class EntryView extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            entry: props.route.params.entry,
            comment: ''
        };
        console.log('EntryView state: ' + JSON.stringify(this.state.entry));
    }

    componentWillReceiveProps(nextProps){
        console.log('NewEntry: ' + JSON.stringify(nextProps));
        if(nextProps.data){
            this.setState({
                entry : nextProps.data
            });
            this.setState({
                comment: ""
            });
        }
    }

    renderComment= ({ item }) => (
        <View style = {styles.comment}>
            <Text style={styles.commentTitle}>{'@' + item.user.username + ' <' + item.creatingDate + '>'}</Text>
            <Text style={styles.commentBody}>{item.comment}</Text>
        </View>
    );   

    renderAddCommentButton(){
        if(this.props.loading){
            return <Button ><Spinner /></Button>
        }else{
            return <Button onPress={this.addComment.bind(this)}>Einfügen!</Button> 
        }
    }

    addComment(){
        this.props.addComment({
            entryId : this.state.entry.id, 
            comment: this.state.comment
        });
    }

    get(part){
        let item = this.state.entry;
            switch(part){
                case 'header':
                return( '@' + item.user.username + ' #' + item.category.name  + ' <' + item.creatingDate +'>');
                case 'body':
                return (item.text);
                case 'footer':
                return (item.comments.length === 0 ? 'Noch keine Kommentare' : (item.comments.length + ' Kommentare'));   
                case 'comments':
                return (
                <View style ={styles.commentList}>
                    <FlatList 
                    data={this.state.entry.comments}
                    renderItem={this.renderComment}
                    keyExtractor={item => item.id}
                    />
                </View>
                );     
                
                case 'addComment':
                    return (
                        <View style={styles.addComment}>
                            <TextInput  placeholder="Kommentar eingeben!"
                                onChangeText={(comment) => this.setState({ comment  }) }
                                value={this.state.comment}
                            ></TextInput>
                            {this.renderAddCommentButton()}
                        </View>
                    );
            }
    }

    render(){
    return(
        <View style={styles.container}>
            <View style={styles.header}><Text style= {styles.headerText}>
                {this.get('header')}
            </Text></View>
            <View style={styles.body}><Text style={styles.bodyText}>{this.get('body')}</Text></View>
            <View style={styles.footer}><Text style={styles.footerText} >{this.get('footer')}</Text></View>
            <View style={styles.comments}><Text style={styles.footerText} >{this.get('comments')}</Text></View>
            {this.get('addComment')}
            
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
        flex:1
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
       fontSize:18,
  }, footer:{
    borderColor: 'gray',
    borderBottomWidth: 2,

},footerText:{
        fontSize:18
   },comment:{
       borderBottomWidth: 1,
       borderColor: 'black',
   },commentTitle:{
       fontWeight: 'bold',
       fontSize: 18
   },commentBody:{
        fontSize: 18
   }, commentList:{
       flex:1
   },addComment:{

        position: 'absolute',
        flexDirection: 'row',
       bottom: 0,
       right:0,
       left:0,
       borderWidth: 1,
       marginTop: 5,
       flex:1,
       borderRadius: 25,
       backgroundColor: 'white'
   }
});

function mapStateToProps(state) {
    return {
      error: state.comments.error,
      loading: state.comments.loading,
      success: state.comments.success,
      data: state.comments.data
    };
  }


export default connect(mapStateToProps, {addComment})(EntryView);
