import React, {Component} from 'react';
import {View,FlatList, SafeAreaView, StyleSheet, Text, CheckBox} from 'react-native';
//import {CheckBox} from '@react-native-community/checkbox';
import {connect} from 'react-redux';

import {CheckItem, Spinner} from  '../common'
import {getAllCategories} from '../redux';
import {indexOf} from '../utility/Arrays'

const styles = StyleSheet.create({
  view:{
    flex:1
  },text: {
    fontSize: 16,
    marginBottom: 10
  }
});


class CategoryList extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
      'checkedItems': this.props.checkedItems,//[]
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('CategoyList componentWillReceiveProps: ' + JSON.stringify(nextProps));
    if (nextProps.data) {
      this.setState({'data' : nextProps.data}) ;
    }
  }
  

  componentDidMount() {
    this.props.getAllCategories();
  }


  onValueChanged(itemId){
    console.log('onValueChanged');
    if(this.state.checkedItems){
      var index = indexOf(this.state.checkedItems, 'id',itemId);//this.state.checkedItems.indexOf({id: itemId}); 
      if(index === -1){
        this.state.checkedItems.push({id: itemId});
      }else{
        this.state.checkedItems.splice(index, 1);
      }
      console.log('checkedItems: ' + this.state.checkedItems);
    }
  }

  renderItem = ({ item }) => (
    <CheckItem onValueChange = {() => {
      this.onValueChanged(item.id);
    }} >{item.name}</CheckItem>
  
  );

  renderList(){
    return(
      <View style={styles.view}>
        <Text style = {styles.text} >{this.props.children}</Text>

          {((this.props.loading) && (<Spinner />))}
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
          />
      </View>
      
    );
  }


  render(){
    return (
      <>
          {this.renderList()}
      </>
    );}
  
};


const mapStateToProps = state => {
  return {
      error: state.categories.error,
      loading: state.categories.loading,
      data: state.categories.data
  }
  }
  
export default connect(mapStateToProps, { getAllCategories })(CategoryList) ;
 