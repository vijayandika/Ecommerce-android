import React, { Component } from 'react'
import { SliderBox } from 'react-native-image-slider-box';
import { View,Text } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';


export default class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://hdqwalls.com/download/adidas-shoes-1920x1080.jpg',
        'https://www.wallpapermaiden.com/wallpaper/12988/download/1920x1080/sneakers-shoes-stairs-jeans.jpg',
        'https://www.rachaelrayshow.com/sites/default/files/styles/video_1920x1080/public/images/2019-01/stock_closet_1920.jpg?itok=-p67HpXc',
        'https://wallpapersmug.com/download/1920x1080/711516/jeans-clothes-girl-model-hot.jpg'
      ]
    };
  }
  render() {
    return (
      <ScrollView>
               
        <Text>Lihat Tampilan Lama</Text>
        <SliderBox images={this.state.images} />
        <Text>
          {"\n"}
        </Text>
        <SliderBox images={this.state.images} />

        <Text>
          {"\n"}
        </Text>
        <SliderBox images={this.state.images} />
      
        </ScrollView>
    )
  }
}
