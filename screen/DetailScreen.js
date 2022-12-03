import React, { Component } from 'react';
import { View, Text, Button, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

import star from '../assets/star.png';
import back from '../assets/btn_back.png';

export default function DetailScreen({ route, navigation }) {
  const { itemId, itemImage, itemRating, itemPrice, itemDetail, itemNameProduct, itemTypeProduct } = route.params;
  return (
    <>
      {console.log(route)}
      <ScrollView style={{ flex: 1 }}>
        <ImageBackground source={{ uri: itemImage }} style={{ marginHorizontal: 24, height: 368 }}>
          <TouchableOpacity style={{ marginTop: 40 }} onPress={() => navigation.navigate('Home')}>
            <Image source={back} style={{ width: 40, height: 40 }} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={{ marginLeft: 24, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>{itemNameProduct}</Text>
            <Text style={{ fontSize: 24, fontWeight: '600' }}>{itemTypeProduct}</Text>
          </View>
          <View style={{ justifyContent: 'flex-end', marginBottom: 5, marginRight: 24 }}>
            <Text style={{ fontSize: 16, color: '#5843BE' }}>{itemPrice}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={star} style={{ width: 30, height: 30, marginLeft: 24, marginRight: 5, marginTop: 10 }} />
          <View style={{ justifyContent: 'center', marginTop: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>{itemRating}</Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 24, marginTop: 10 }}>
          <Text>{itemDetail}</Text>
        </View>
        <View style={{ marginLeft: 24, marginTop: 20 }}>
          <Text>Color</Text>
          <View style={{ marginTop: 10, flexDirection: 'row' }}>
            <View style={{ backgroundColor: '#C75747', borderRadius: 50, width: 30, height: 30, marginRight: 10 }}></View>
            <View style={{ backgroundColor: '#040507', borderRadius: 50, width: 30, height: 30, marginRight: 10 }}></View>
            <View style={{ backgroundColor: '#249C46', borderRadius: 50, width: 30, height: 30, marginRight: 10 }}></View>
            <View style={{ backgroundColor: '#0D4C92', borderRadius: 50, width: 30, height: 30, marginRight: 10 }}></View>
          </View>
        </View>
        <View style={{ marginLeft: 24, marginTop: 20 }}>
          <Text>Size</Text>
          <View style={{ marginTop: 10, flexDirection: 'row' }}>
            <View style={{ backgroundColor: '#D9D9D9', borderRadius: 5, width: 30, height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', padding: 1 }}>
              <Text style={{ backgroundColor: '#D9D9D9', fontWeight: '600' }}>39</Text>
            </View>
            <View style={{ backgroundColor: '#D9D9D9', borderRadius: 5, width: 30, height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', padding: 1 }}>
              <Text style={{ backgroundColor: '#D9D9D9', fontWeight: '600' }}>40</Text>
            </View>
            <View style={{ backgroundColor: '#D9D9D9', borderRadius: 5, width: 30, height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', padding: 1 }}>
              <Text style={{ backgroundColor: '#D9D9D9', fontWeight: '600' }}>41</Text>
            </View>
            <View style={{ backgroundColor: '#D9D9D9', borderRadius: 5, width: 30, height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', padding: 1 }}>
              <Text style={{ backgroundColor: '#D9D9D9', fontWeight: '600' }}>42</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 24, justifyContent: 'space-evenly' }}>
          <TouchableOpacity style={{ width: 164, height: 48, borderColor: '#0D4C92', borderRadius: 15, borderWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#0D4C92' }}>Beli Sekarang</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 164, height: 48, backgroundColor: '#0D4C92', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>+ Keranjang</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
