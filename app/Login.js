import React, {Component} from 'react';
import {Text, StyleSheet,Image} from 'react-native';
import {Card, CardItem, Button, Input, Spinner} from './common';
import {connect} from 'react-redux';
import {onLogin} from './redux';



const styles = StyleSheet.create({
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
        <Card title= "Anmeldungsform">
          <CardItem> 
          <Image
          style={styles.logo}
          source={require('./assets/icon.png')}
        />
        </CardItem>
            <CardItem> 
            <Input label='Benutzername' placeholder='Benutzername eingeben!' secureTextEntry={false} 
              onChangeText={(username) => this.setState({ username  }) }
            />
            </CardItem>
            <CardItem>
            <Input label='Kennwort' placeholder='Kennwort eingeben!' secureTextEntry={true}
            onChangeText={(password) => this.setState({ password }) } />
            </CardItem>

            <CardItem>{ this._renderButton() }
            </CardItem>
            <Text style={styles.errorStyle}>{this.props.error}</Text>
            
            <CardItem>
              <Button onPress = {this.home.bind(this)}><Text>Neu Hier? Regestieren!</Text></Button>
            </CardItem>
        
        </Card>
        );
    }
};

const mapStateToProps = state => {
    return {
      error: state.auth.error,
      loading: state.auth.loading,
      user: state.auth.user
    }
  }
  
  export default connect(mapStateToProps, { onLogin })(Login);
