import { View, Text, StyleSheet, Image, TextInput, FlatList, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import React, { useState, state } from 'react';
import { Feather } from '@expo/vector-icons';

import search from '../assets/Vector.png';
import puma from '../assets/puma.png';
import nike from '../assets/nike.png';
import adidas from '../assets/adidas.png';
import nikeAirMax from '../assets/NikeAir.png';
import nikewaffle from '../assets/nikeWaffle.png';
import nikeDunkHigh from '../assets/nikeDunkHigh.png';
import star from '../assets/star.png';
import home from '../assets/home.png';
import transaksi from '../assets/transaksi.png';
import history from '../assets/history.png';
import love from '../assets/love.png';
import DetailScreen from './DetailScreen';

const getItem = (item) => {
  // Function for click on an item
  alert('Id : ' + item.id + ' Title : ' + item.position);
};

const BottomFlatList = () => {
  return <View style={{ marginTop: 50 }}></View>;
};

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    };
  }
  async fetchData() {
    const response = await axios.get('https://backend-uas-pam-production.up.railway.app/api/product');
    this.setState((this.state.dataSource = response.data));
  }
  async componentDidMount() {
    await this.fetchData();
  }
  getpress = (item) => {
    this.props.navigation.navigate('Detail', {
      itemId: item.name,
      itemImage: item.image,
      itemPrice: item.price,
      itemDetail: item.detail,
      itemRating: item.rating,
      itemNameProduct: item.nameProduct,
      itemTypeProduct: item.typeProduct,
    });
  };
  _renderItem = ({ item, index, onPress }) => {
    return (
      <TouchableOpacity
        style={{ marginBottom: 10, marginLeft: 24, flexDirection: 'row' }}
        onPress={() =>
          this.props.navigation.navigate('Detail', {
            itemId: item.name,
            itemImage: item.image,
            itemPrice: item.price,
            itemDetail: item.detail,
            itemRating: item.rating,
            itemNameProduct: item.nameProduct,
            itemTypeProduct: item.typeProduct,
          })
        }
      >
        <ImageBackground source={{ uri: item.image }} style={{ width: 130, height: 110 }}>
          <View style={{ backgroundColor: '#0D4C92', width: 70, height: 30, borderBottomLeftRadius: 50, borderTopRightRadius: 50, position: 'absolute', left: 50, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Image source={star} style={{ width: 18, height: 18, marginTop: 4 }} />
            <Text style={{ marginRight: 14, color: 'white', marginTop: 4 }}>{item.rating}</Text>
          </View>
        </ImageBackground>
        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
          <Text style={{ fontWeight: '500', marginBottom: 4 }}>{item.name}</Text>
          <Text style={{ fontWeight: '500', marginBottom: 16, color: '#5843BE' }}>{item.price}</Text>
          <Text style={{ fontWeight: '400', marginBottom: 4, color: '#7A7E86' }}>{item.type}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    console.info(this.state.dataSource);
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.subContainer}>
            <Text style={styles.headerText}>Hello</Text>
            <Text style={styles.subHeaderText}>Dhilan Cepmek</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Edit Profil', {
                nama: 'Dilan',
                alamat: 'Way Huwi, Lampung Selatan, Lampungdasdasdasdasdasdasdasdasdasdasdas',
              });
            }}
            style={{ marginTop: 50, marginRight: 24 }}
          >
            <Image
              source={{
                uri: 'https://cdn1-production-images-kly.akamaized.net/PRciRZRdN7B92z0m_gkHORceT1k=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4187840/original/046976900_1665479129-cepmek.jpg',
              }}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput underlineColorAndroid="transparent" style={styles.input} placeholder={'find your shoes'} />
          <View style={{ marginTop: 35, marginRight: 24 }}>
            <Feather name="search" size={20} color="black" style={{ marginLeft: 1 }} />
          </View>
        </View>
        <Text style={styles.subHeaderText2}>Most Famous Brands</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }}>
          <TouchableOpacity style={{ backgroundColor: '#0D4C92', width: 101, height: 126.25, borderRadius: 18, marginLeft: 24 }}>
            <Image source={puma} style={{ width: 101, height: 95 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'center', width: 101, padding: 3 }}>
              <Text style={styles.brandFont}>Puma</Text>
            </View>
          </TouchableOpacity>
          <View style={{ backgroundColor: '#0D4C92', width: 101, height: 126.25, borderRadius: 18 }}>
            <Image source={nike} style={{ width: 101, height: 95 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'center', width: 101, padding: 3 }}>
              <Text style={styles.brandFont}>Nike</Text>
            </View>
          </View>
          <View style={{ backgroundColor: '#0D4C92', width: 101, height: 126.25, borderRadius: 18, marginRight: 24 }}>
            <Image source={adidas} style={{ width: 101, height: 95 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'center', width: 101, padding: 3 }}>
              <Text style={styles.brandFont}>Adidas</Text>
            </View>
          </View>
        </View>
        <View style={{ marginLeft: 24, marginTop: 24 }}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Recommended Space</Text>
        </View>

        <ScrollView style={{ marginTop: 20 }}>
          <FlatList data={this.state.dataSource} renderItem={this._renderItem} keyExtractor={(item, index) => index.toString()} ListFooterComponent={<BottomFlatList />} />
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
              <Image source={love} style={{ width: 27, height: 27 }} />
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
  headerText: {
    fontSize: 24,
  },
  subHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeaderText2: {
    marginTop: 36,
    marginLeft: 24,
    fontSize: 18,
    fontWeight: '600',
  },
  input: {
    height: 40,
    width: 200,
    marginHorizontal: 24,
    marginTop: 24,
  },
  brandFont: {
    fontSize: 16,
    color: 'white',
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

export default HomeScreen;
