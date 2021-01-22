
import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown-v2'
import {View, StyleSheet, Text} from 'react-native'
import {connect} from 'react-redux';
import { Spinner} from  '../common'
import {getAllCategories} from '../redux';
 
const styles = StyleSheet.create({
  view:{
    flex: 1
  }, dropDown:{
  }
});

class CategoryDrowpDown extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      data: [],
      'val': this.props.val
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('DropDown componentWillReceiveProps: ' + JSON.stringify(nextProps));
    if (nextProps.data) {
      var dropData = []
      for(var i = 0 ; i < nextProps.data.length ; i++){
        dropData.push({value : nextProps.data[i].name, id : nextProps.data[i].id });
      }
      this.setState({'data' : dropData}) ;
    }
  }

  componentDidMount() {
    this.props.getAllCategories();
  }

  onChangeHandler(value, index){
   this.setState({'val' : {id : this.state.data[index].id} });
   this.props.updateParentCategory({id : this.state.data[index].id} );
   console.log("val: " + JSON.stringify(this.state.val));  
  }


  renderDropdownList(){
    if(this.state.data.length === 0){
      if(this.props.loading){
        return <Spinner />;
      }else{
        return <Text>Fehler: Kategorien sind nicht aufrufbar! {this.props.error}</Text>
      }
    }else{
      return <Dropdown
        style={styles.dropDown}
        label= 'Wähle eine Kategorie'
        data={this.state.data}
        onChangeText={((value, index) => this.onChangeHandler(value, index))}
      />;
    }
    
  }
  
  render() {
    return (
      <View style={styles.view}>
            {this.renderDropdownList()}
      </View>
     );
  }
}



const mapStateToProps = state => {
  return {
      error: state.categories.error,
      loading: state.categories.loading,
      data: state.categories.data
  }
  }

export default connect(mapStateToProps, { getAllCategories })(CategoryDrowpDown) ; 

