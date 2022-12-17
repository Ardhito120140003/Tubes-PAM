import * as React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const OrderScreen = () => {
  return (
    <View style={styles.oRDERView}>
      <View style={styles.itemView}>
        <Image style={styles.picIcon} resizeMode="cover" source={require('../assets/NikeAir.png')} />
        <View style={styles.groupView}>
          <Text style={styles.nIikeAirMaxPreDaySE}>
            <Text style={styles.nIikeAirMax}>NIike Air Max Pre-Day SE</Text>
          </Text>
          <Text style={styles.size40Orange}>Size 40 - Orange</Text>
        </View>
        <Text style={styles.rp2329000Text}>Rp 2,329,000</Text>
      </View>
      <TouchableOpacity style={styles.amountView}>
        <Image style={styles.iconMinusCircleOutline} resizeMode="cover" source={require('../assets/-icon-minus-circle-outline.png')} />
        <Image style={styles.iconPlusCircle} resizeMode="cover" source={require('../assets/-icon-plus-circle.png')} />
        <Text style={styles.text}>01</Text>
      </TouchableOpacity>
      <View style={styles.promoView}>
        <View style={styles.rectangleView} />
        <Text style={styles.promoCodeText}>Promo Code</Text>
        <View style={styles.rectangleView1} />
        <Text style={styles.applyText}>Apply</Text>
      </View>
      <View style={styles.btnBuyView}>
        <View style={styles.rectangleView2} />
        <Text style={styles.buatPesananText}>Buat Pesanan</Text>
      </View>
      <TouchableOpacity>
        <Image style={styles.btnBackIcon} resizeMode="cover" source={require('../assets/btn_back.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.editNameView}>
          <View style={styles.searchView}>
            <View style={styles.rectangleView3} />
          </View>
          <Text style={styles.alamatText}>Alamat</Text>
          <Image style={styles.btnWishlistIcon} resizeMode="cover" source={require('../assets/location.png')} />
          <Text style={styles.alamatText1}>Alamat</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.groupView3}>
        <View style={styles.groupView1}>
          <Text style={styles.ringkasanBelanjaText}>Ringkasan Belanja</Text>
        </View>
        <View style={styles.groupView2}>
          <Text style={styles.totalOngkosKirim1}>
            <Text style={styles.totalOngkosKirim}>Total Ongkos Kirim</Text>
          </Text>
          <Text style={styles.totalHargaText}>{`Total Harga `}</Text>
          <Text style={styles.totalTagihanText1}>
            <Text style={styles.totalTagihanText}>Total Tagihan</Text>
          </Text>
          <Text style={styles.rp50000Text}>Rp50,000</Text>
          <Text style={styles.rp2379000Text}>Rp2,379,000</Text>
          <Text style={styles.rp5000Text}>Rp5000</Text>
        </View>
        <View style={styles.lineView} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  picIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 80,
    height: 80,
  },
  nIikeAirMax: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  nIikeAirMaxPreDaySE: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#000',
    textAlign: 'left',
    width: 225,
    height: 24,
  },
  size40Orange: {
    position: 'absolute',
    top: 30,
    left: 0,
    fontSize: 14,
    fontWeight: '300',
    fontFamily: 'Poppins',
    color: '#7a7e86',
    textAlign: 'left',
    width: 150.05,
    height: 34.96,
  },
  groupView: {
    position: 'absolute',
    top: 0,
    left: 91,
    width: 225,
    height: 64.96,
  },
  rp2329000Text: {
    position: 'absolute',
    top: 53,
    left: 91,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#5843be',
    textAlign: 'left',
    width: 115,
    height: 24,
  },
  itemView: {
    position: 'absolute',
    top: 123,
    left: 17,
    width: 316,
    height: 80,
  },
  iconMinusCircleOutline: {
    position: 'absolute',
    height: '100%',
    width: '32.05%',
    top: '0%',
    right: '67.95%',
    bottom: '0%',
    left: '0%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  iconPlusCircle: {
    position: 'absolute',
    height: '100%',
    width: '32.05%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '67.95%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  text: {
    position: 'absolute',
    top: 4,
    left: 31,
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#0d4c92',
    textAlign: 'left',
    width: 16,
    height: 18,
  },
  amountView: {
    position: 'absolute',
    height: '2.96%',
    width: '20%',
    top: '17.89%',
    right: '5.64%',
    bottom: '79.15%',
    left: '74.36%',
  },
  rectangleView: {
    position: 'absolute',
    height: '100%',
    width: '76.85%',
    top: '0%',
    right: '23.15%',
    bottom: '0%',
    left: '0%',
    borderRadius: 11,
    backgroundColor: '#fff',
    shadowColor: '#eef4ff',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
  },
  promoCodeText: {
    position: 'absolute',
    width: '37.38%',
    top: '27.27%',
    left: '4.17%',
    fontSize: 16,
    fontWeight: '300',
    fontFamily: 'Poppins',
    color: '#a5a5a5',
    textAlign: 'left',
  },
  rectangleView1: {
    position: 'absolute',
    top: 9,
    left: 250,
    borderRadius: 7,
    backgroundColor: '#0d4c92',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 93,
    height: 36,
  },
  applyText: {
    position: 'absolute',
    top: 13,
    left: 271,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#fff',
    textAlign: 'left',
    width: 184.42,
    height: 24.14,
  },
  promoView: {
    position: 'absolute',
    height: '6.52%',
    width: '116.78%',
    top: '49.41%',
    right: '-22.16%',
    bottom: '44.08%',
    left: '5.38%',
  },
  rectangleView2: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: '#9fa4aa',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 319,
    height: 48,
  },
  buatPesananText: {
    position: 'absolute',
    top: 10,
    left: 88,
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#fff',
    textAlign: 'left',
    width: 143,
    height: 28,
  },
  btnBuyView: {
    position: 'absolute',
    top: 762,
    left: 35,
    width: 319,
    height: 48,
  },
  btnBackIcon: {
    position: 'absolute',
    top: 30,
    left: 24,
    width: 40,
    height: 40,
  },
  rectangleView3: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    borderRadius: 11,
    backgroundColor: '#fff',
    shadowColor: '#eef4ff',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
  },
  searchView: {
    position: 'absolute',
    height: '79.72%',
    width: '100%',
    top: '20.28%',
    right: '0%',
    bottom: '0%',
    left: '0%',
  },
  alamatText: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#000',
    textAlign: 'left',
    width: 184.26,
    height: 24.14,
  },
  btnWishlistIcon: {
    position: 'absolute',
    top: 105,
    left: 309,
    width: 30,
    height: 30,
  },
  alamatText1: {
    position: 'absolute',
    top: 42,
    left: 15,
    fontSize: 16,
    fontWeight: '100',
    fontFamily: 'Poppins',
    color: '#000',
    textAlign: 'left',
  },
  editNameView: {
    position: 'absolute',
    height: '16.94%',
    width: '89.74%',
    top: '27.49%',
    right: '5.13%',
    bottom: '55.57%',
    left: '5.13%',
  },
  ringkasanBelanjaText: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#000',
    textAlign: 'left',
    width: 184.26,
    height: 24.14,
  },
  groupView1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 184.26,
    height: 24.14,
  },
  totalOngkosKirim: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  totalOngkosKirim1: {
    position: 'absolute',
    top: 31,
    left: 1,
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#000',
    textAlign: 'left',
    width: 171,
    height: 24,
  },
  totalHargaText: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#000',
    textAlign: 'left',
    width: 192,
    height: 24,
  },
  totalTagihanText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  totalTagihanText1: {
    position: 'absolute',
    top: 69,
    left: 2,
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#000',
    textAlign: 'left',
    width: 193,
    height: 24,
  },
  rp50000Text: {
    position: 'absolute',
    top: 31,
    left: 277,
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#000',
    textAlign: 'left',
    width: 140.8,
    height: 24.14,
  },
  rp2379000Text: {
    position: 'absolute',
    top: 69,
    left: 258,
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#000',
    textAlign: 'left',
    width: 140.48,
    height: 24,
  },
  rp5000Text: {
    position: 'absolute',
    top: 0,
    left: 288,
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#000',
    textAlign: 'left',
    width: 62,
    height: 24,
  },
  groupView2: {
    position: 'absolute',
    top: 47,
    left: 0,
    width: 417.8,
    height: 93,
  },
  lineView: {
    position: 'absolute',
    top: 108.5,
    left: 1.5,
    borderStyle: 'solid',
    borderColor: '#989ba1',
    borderTopWidth: 1,
    width: 349,
    height: 1,
  },
  groupView3: {
    position: 'absolute',
    top: 528,
    left: 20,
    width: 417.8,
    height: 140,
  },
  oRDERView: {
    position: 'relative',
    borderRadius: 10,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    flex: 1,
    width: '100%',
    height: 844,
  },
});

export default OrderScreen;
