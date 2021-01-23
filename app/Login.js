import React, {Component} from 'react';
import {Text, StyleSheet,Image,View,TextInput,TouchableOpacity} from 'react-native';
import {Card, CardItem, Button, Input, Spinner, BottomMenu} from './common';
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
    margin: 10,
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
  }, menu:{
    position: 'absolute',
    bottom:0,
    width: '100%',
  }
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

  regist(){
    this.props.navigation.navigate('Regist')  
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
    return (<Button style={styles.buttonTitle} onPress= {this.onLoginPressed.bind(this)}>Log in</Button>);
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
          source={require('./assets/logo.png')}
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
     <TouchableOpacity style={styles.button} >
      {this._renderButton()}
        </TouchableOpacity>
        <View style={styles.fView}>
          <Text style={styles.fText}>
            Don&apos;t have an account?{' '}
            <Text  style={styles.SLink} onPress = {this.regist.bind(this)} >
              Sign up
            </Text>
          </Text>
        </View>

      </KeyboardAwareScrollView>
        <View style={styles.menu}>
          <BottomMenu info={true} navigation={this.props.navigation}></BottomMenu>
        </View>
       </View>);}}
       


      function mapStateToProps(state) {
        return {
          error: state.auth.error,
          loading: state.auth.loading,
          user: state.auth.user
        };
      }
  
  export default connect(mapStateToProps, { onLogin })(Login);
