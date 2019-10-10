import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Axios from 'axios'
import { Container, Header, Content, Item, Label, Input, Button, Picker } from 'native-base'
import { Dropdown } from 'react-native-material-dropdown';

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: null,
            lastname: null,
            email: null,
            password: null,
            gender: null,
            isMerchant: false,
            address: null,
            datebirth: null
        }
    }

    Daftar = async () => {
        const regis = async (objParam) => await Axios.post(
            `https://sdgiwefr-commerce.herokuapp.com/api/users/register`,
            objParam, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )

        regis({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            gender: this.state.gender,
            isMerchant: this.state.isMerchant,
            address: this.state.address,
            datebirth: this.state.datebirth
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Item
                        floatingLabel
                    >
                        <Label>
                            Nama Depan
                        </Label>
                        <Input
                            onChangeText={(text) => this.setState({ firstname: text })}
                        />
                    </Item>

                    <Item
                        floatingLabel
                    >
                        <Label>
                            Nama Belakang
                        </Label>
                        <Input
                            onChangeText={(text) => this.setState({ lastname: text })}
                        />
                    </Item>

                    <Item
                        floatingLabel
                    >
                        <Label>
                            Email
                        </Label>
                        <Input
                            onChangeText={(text) => this.setState({ email: text })}
                        />
                    </Item>

                    <Item
                        floatingLabel
                    >
                        <Label>
                            Password
                        </Label>
                        <Input
                            onChangeText={(password) => this.setState({ password: password })}
                        />
                    </Item>

                    <Item
                        floatingLabel
                    >
                        <Label>
                            Gender
                        </Label>
                        <Input
                            onChangeText={(text) => this.setState({ gender: text })}
                        />
                    </Item>

                    <Picker
                        note
                        mode="dropdown"
                        style={{ width: 120 }}
                        selectedValue={this.state.role}
                        onValueChange={
                            (text) => this.setState({
                                role: text
                            })
                        }
                    >
                        <Picker.Item label="Merchant" value="Merchant" />
                        <Picker.Item label="Buyer" value={true} />
                    </Picker>

                    <Item
                        floatingLabel
                    >
                        <Label>
                            Address
                        </Label>
                        <Input
                            onChangeText={(text) => this.setState({ address: text })}
                        />
                    </Item>

                    <Item
                        floatingLabel
                    >
                        <Label>
                            Datebirth
                        </Label>
                        <Input
                            onChangeText={(text) => this.setState({ datebirth: text })}
                        />
                    </Item>

                    <Button
                        full
                        style={{
                            alignSelf: 'center',
                            width: '60%',
                        }}
                        onPress={() => {
                            this.Daftar()
                        }}
                    >
                        <Text>
                            Daftar!
                            </Text>
                    </Button>

                </Content>
            </Container>
        )
    }
}
