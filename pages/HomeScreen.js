/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { BackgroundCarousel } from "./../BackgroundCarousel";
import { Container, Header, Item, Input, Button, Card, CardItem, Thumbnail, Icon, Left, Body, Right, Image,Content } from 'native-base';
import Axios from "axios";
import { ScrollView } from 'react-native-gesture-handler';

//import all the basic component we have used

const imagesse = [
    "https://trellis.co/wp-content/uploads/2019/02/Blog-Post-Banners-3.png",
    "https://acowebs.com/wp-content/uploads/2019/02/Impact-of-eCommerce-On-Society.png",
    "https://doofindermedia.s3.amazonaws.com/blog/2018/05/07/085124-que-es-ecommerce.jpg",
    "https://www.extradigital.co.uk/marketing-assets/articles/articles-l/b2becommerce-lg.png",
    "http://www.goodnewsfinland.com/wp-content/uploads/2018/02/eCommerce.png"
];

export default class HomeScreen extends Component {
    //Home Screen to show in Home Option
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.getdata()
    }
    getdata = async () => {
        try {
            const data = async () => Axios.get(
                'https://sdgiwefr-commerce.herokuapp.com/api/shop/'
            )

            data()
                .then(res => {
                    this.setState({
                        data: res.data.result
                    })
                    console.log(this.state.data)
                })
                .catch(err => {
                    console.log(err)
                })
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        const loop = this.state.data.map(value => {
            return (

                <Card
                    key={value._id}
                >
                    <CardItem button
                        onPress={
                            () => {
                                this.props.Barang(value._id)
                                this.props.navigation.navigate('Details')
                            }
                        }

                    >
                        
                        <Left>
                            <Thumbnail source={{ uri: value.image }} />
                            <Body>
                            <Text>{value.name}</Text>
                                <Text note>Stok: {value.stock}</Text>
                            </Body>
                        </Left>
                    </CardItem>

                    <CardItem cardBody>
                        {/* <Image source={{ uri: 'Image URL' }} style={{ height: 200, width: null, flex: 1 }} /> */}
                    </CardItem>

                    <CardItem>
                        <Left>
                            <Button transparent>
                                <Icon active name="thumbs-up" />
                                <Text>Price {value.price}</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>4 Comments</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>11h ago</Text>
                        </Right>
                    </CardItem>
                </Card>
            )
        })
        return (
            <Container>
                <Header searchBar rounded>

                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>

                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                {loop}
                <BackgroundCarousel images={imagesse}>
               

                </BackgroundCarousel>
                
                <ScrollView>
               
                </ScrollView>
            </Container>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    }
});