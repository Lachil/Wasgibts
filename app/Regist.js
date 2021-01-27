import React, {Component} from 'react';
import {View, Text, StyleSheet, Keyboard} from 'react-native';
import {connect} from 'react-redux';

import {Card, CardItem, Button, Input, Spinner} from './common';
import CategoryList from  './common/CategoryList'
import {onRegist} from './redux';
import {BottomMenu} from './common'

const styles = StyleSheet.create({
   menu:{
    position: 'absolute',
    bottom:0,
    width: '100%',
  }, container:{
    flex:1
  }
});


class Regist extends Component {

  constructor(){
    super();
    this.state = {  
      username: '',
      password: '',
      categories: [],
      writingMode: false
    };
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.props.navigation.navigate('Home');
    }
  }

  componentDidMount() {}

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow(){
    console.log('showed');
    this.setState({writingMode: true});
  }

  keyboardDidHide(){
    console.log('hiden');
    this.setState({writingMode: false});
  }

  errorMessage(){
    if(!this.props.error){
      return <></>;
    }
    return (<CardItem>
      <Text>{this.props.error}</Text>
    </CardItem>)    
  }

  onRegistPressed(){
    const { username, password, categories } = this.state;
    console.log({username, password, categories});
    this.props.onRegist({username, password, categories});
  }

  renderRegistButton(){
    console.log('loading: ' + this.props.loading);
    if (this.props.loading) {
      return (<Button ><Spinner /> </Button>);
    }
    return (<Button onPress={this.onRegistPressed.bind(this)}>Regestieren</Button>);
  }

  render(){
    return (
      <View style={styles.container}>
      <Card title= "Regestierungsform">
        <CardItem>
          <Input label='Benutzername' placeholder='Benutzername eingeben!' secureTextEntry={false}
          onChangeText={(username) => this.setState({ username  }) } />
        </CardItem>
        <CardItem>
          <Input label='Kennwort' placeholder='Kennwort eingeben!' secureTextEntry={true} 
            onChangeText={(password) => this.setState({ password }) } />
        </CardItem>
        <CardItem>
          <CategoryList checkedItems = {this.state.categories}>
          Wählen Sie die Kategorien, die Sie abonieren wollen:</CategoryList>
        </CardItem>
        <CardItem>
          {this.renderRegistButton()}
        </CardItem>
        {this.errorMessage()}
      </Card>
      {(!this.state.writingMode) && <View style={styles.menu}>
          <BottomMenu info={true} navigation={this.props.navigation}></BottomMenu>
      </View>}
       
      </View>
      
    );
  }
  
};

const mapStateToProps = state => {
  return {
      error: state.regist.error,
      loading: state.regist.loading,
      user: state.regist.user
  }
  }
export default connect(mapStateToProps, { onRegist })(Regist);
