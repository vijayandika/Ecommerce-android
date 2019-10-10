import React, { Component } from 'react';
//import react in our code.
import { Text, Alert, ToastAndroid, TouchableOpacity, StyleSheet,ImageBackground } from 'react-native';
//import all the basic component we have used
import { Container, Header, Button, Item, Input, Label } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage'
import styles from './style';
import Axios from 'axios';
import bgImage from './gambar/facebook.jpg'

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  async login() {
    try {
      const postData = async (obJParam) => await Axios.post(`https://sdgiwefr-commerce.herokuapp.com/api/users/login`, obJParam, {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      )
      postData({
        username: this.state.username,
        password: this.state.password
      })
        .then(response => {
          ToastAndroid.show(response.data.result, ToastAndroid.SHORT)
          AsyncStorage.setItem('@token', response.data.result)
          ToastAndroid.show('Selamat Anda Dapat melakukan Login', ToastAndroid.SHORT)
          console.log(`Bisa Log In lek`)
          this.setState({
            username: '',
            password: ''
          })
          this.props.navigation.navigate('Home')
        })

        .catch(e => {
          this.showAlert1(e)
        })

    }

    catch (e) {
      this.showAlert1(e)
    }
  }
  showAlert1 = (Wow1) => {
    Alert.alert(
      'Log In',
      `${Wow1}`,
      [
        { text: 'OK', onPress: () => console.log('OKE BISA') },
      ]
    );
  }
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <Container>
        <Item floatingLabel style={styles.input}>
          <Label>
            <Text style={styles.text}>
              Username
                                </Text>
          </Label>
          <Input
            style={{ color: 'black' }}
            keyboardType="default"
            value={this.state.username}
            onChangeText={
              (text) => this.setState({ username: text })
            }
            keyboard
          />
        </Item>
        <Item floatingLabel style={styles.input}>
          <Label>
            <Text style={styles.text}>
              Password
                                </Text>
          </Label>
          <Input
            style={{ color: 'black' }}
            keyboardType="default"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={
              (text) => this.setState({ password: text })
            }
          />
        </Item>
        <Item style={styles.button}>
          <Button rounded bordered success style={styles.buttons} full onPress={() => this.login()}>
            <Text style={styles.text}>Login</Text>
          </Button>
        </Item>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>

      </Container>
      </ImageBackground>
    );
  }
}
export default LoginScreen

const styles2 = StyleSheet.create({
  
});