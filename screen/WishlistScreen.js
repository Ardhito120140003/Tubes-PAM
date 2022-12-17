import { View, Text, StyleSheet, Image, TextInput, FlatList, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, state } from 'react';

import nikeAirMax from '../assets/NikeAir.png';
import nikewaffle from '../assets/nikeWaffle.png';
import nikeDunkHigh from '../assets/nikeDunkHigh.png';
import star from '../assets/star.png';
import home from '../assets/home_npress.png';
import transaksi from '../assets/transaksi.png';
import history from '../assets/history.png';
import love from '../assets/love_press.png';
import lovePress from '../assets/love_press.png';

const shoesData = [
  {
    id: '1',
    name: 'Nike Air Max Pre-Day SE',
    price: 'Rp 2,329,000',
    type: "Men's Shoes",
    rating: '4/5',
    image: nikeAirMax,
  },
  {
    id: '2',
    name: 'Nike Waffle One',
    price: 'Rp 1,499,000',
    type: "Woman's Shoes",
    rating: '4.5/5',
    image: nikewaffle,
  },
  {
    id: '3',
    name: 'Nike orange',
    price: 'Rp 1,499,000',
    type: "Men's Shoes",
    rating: '5/5',
    image: nikeDunkHigh,
  },
  {
    id: '4',
    name: 'Nike Air Max Pre-Day SE',
    price: 'Rp 2,329,000',
    type: "Men's Shoes",
    rating: '4/5',
    image: nikeAirMax,
  },
  {
    id: '5',
    name: 'Nike Waffle One',
    price: 'Rp 1,499,000',
    type: "Woman's Shoes",
    rating: '4.5/5',
    image: nikewaffle,
  },
  {
    id: '6',
    name: 'Nike orange',
    price: 'Rp 1,499,000',
    type: "Men's Shoes",
    rating: '5/5',
    image: nikeDunkHigh,
  },
];

const renderItem = ({ item }) => (
  <View style={{ marginBottom: 10, marginLeft: 10, flexDirection: 'row' }}>
    <ImageBackground source={item.image} style={{ width: 130, height: 110 }}>
      <View style={{ backgroundColor: '#0D4C92', width: 70, height: 30, borderBottomLeftRadius: 50, borderTopRightRadius: 50, position: 'absolute', left: 50, flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Image source={star} style={{ width: 18, height: 18, marginTop: 4 }} />
        <Text style={{ marginRight: 14, color: 'white', marginTop: 4 }}>{item.rating}</Text>
      </View>
    </ImageBackground>
    <View style={{ flexDirection: 'column', marginLeft: 20 }}>
      <Text style={{ fontWeight: '700', marginBottom: 4, fontSize: 16 }}>{item.name}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <View>
          <Text style={{ fontWeight: '500', marginRight: 50, marginBottom: 16, color: '#5843BE' }}>{item.price}</Text>
          <Text style={{ fontWeight: '400', marginBottom: 4, color: '#7A7E86' }}>{item.type}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={null} style={styles.icon} android_riple={{ borderless: true, radius: 50 }}>
            <Image source={love} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

class WishlistScreen extends React.Component {
  state = {
    screenText: 'press a button',
  };
  changeText = (text) => {
    console.log(text + ' has been pressed');
    this.setState({
      screen: text,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ marginLeft: 140, marginTop: 65 }}>
            <Text style={{ fontSize: 18, fontWeight: '700' }}>WISHLIST</Text>
          </View>
          <View style={{ marginTop: 50, marginRight: 24 }}>
            <Image
              source={{
                uri: 'https://cdn1-production-images-kly.akamaized.net/PRciRZRdN7B92z0m_gkHORceT1k=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4187840/original/046976900_1665479129-cepmek.jpg',
              }}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
          </View>
        </View>

        <ScrollView style={{ marginTop: 20 }}>
          <FlatList data={shoesData} renderItem={renderItem} keyExtractor={(item) => item.id} />
        </ScrollView>

        <View style={styles.navContainer}>
          <View style={styles.navBar}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.icon} android_riple={{ borderless: true, radius: 50 }}>
              <Image source={home} style={{ width: 24.66, height: 22.58 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Transaksi')} style={styles.icon} android_riple={{ borderless: true, radius: 50 }}>
              <Image source={transaksi} style={{ width: 18, height: 24 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('History')} style={styles.icon} android_riple={{ borderless: true, radius: 50 }}>
              <Image source={history} style={{ width: 27, height: 27 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Wishlist')} style={styles.icon} android_riple={{ borderless: true, radius: 50 }}>
              <Image source={lovePress} style={{ width: 27, height: 27 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    marginTop: 40,
    marginLeft: 20,
  },
  navContainer: {
    position: 'absolute',

    alignItems: 'center',
    bottom: 10,
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#F6F7F8',
    width: '90%',
    justifyContent: 'space-evenly',
    marginLeft: 24,
    borderRadius: 40,
  },
  icon: {
    padding: 14,
  },
});

export default WishlistScreen;
