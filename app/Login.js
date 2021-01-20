import React, {Component} from 'react';
import {Text, StyleSheet,Image,View,TextInput,TouchableOpacity} from 'react-native';
import {Card, CardItem, Button, Input, Spinner} from './common';
import {connect} from 'react-redux';
import {onLogin} from './redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'





const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  errorStyle: {
    fontSize: 17,
    alignSelf: 'center',
    color: 'red'
  },
  logo: {
    flex: 1,
    height: 150,
    width: 200,
    alignSelf: 'center',
    margin: 80,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  SLink: {
    color: '#788eec',
    fontWeight: 'bold',
    fontSize: 16,
  },
  fText: {
    fontSize: 16,
    color: '#2e2e2d',
  },
  fView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
});


class Login  extends Component {

    
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  home(){
    this.props.navigation.navigate('Home')
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.home();
    }
  }

  onLoginPressed(){
    const { username, password } = this.state;
    this.props.onLogin({username, password});
  }

  _renderButton() {
    if (this.props.loading) {
      return (<Button ><Spinner /> </Button>);
    }
    return (
      <Button onPress= {this.onLoginPressed.bind(this)}>
        <Text style={styles.buttonTitle}>Log in</Text></Button>
      );
  }


    render(){
        return (
          <View style={styles.container}>
             <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps='always'
      >
      <Image
          style={styles.logo}
          source={require('./assets/icon.png')}
        />
        <TextInput
          style={styles.input}
          placeholder='Benutzername eingeben!'
          placeholderTextColor='#aaaaaa'
          secureTextEntry={false} 
          onChangeText={(username) => this.setState({ username  }) }
          underlineColorAndroid='transparent'
          autoCapitalize='none'
        />
        <TextInput
       style={styles.input}
       placeholderTextColor='#aaaaaa'
       secureTextEntry
       placeholder='Kennwort eingeben!'secureTextEntry={true}
       onChangeText={(password) => this.setState({ password }) }
       underlineColorAndroid='transparent'
       autoCapitalize='none'
     />
     <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
          <Button style={styles.buttonTitle}>Log in</Button>
        </TouchableOpacity>
        <View style={styles.fView}>
          <Text style={styles.fText}>
            Don&apos;t have an account?{' '}
            <Text  style={styles.SLink} onPress = {this.home.bind(this)} >
              Sign up
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
       </View>);}}
       


      function mapStateToProps(state) {
        return {
          error: state.auth.error,
          loading: state.auth.loading,
          user: state.auth.user
        };
      }
  
  export default connect(mapStateToProps, { onLogin })(Login);
