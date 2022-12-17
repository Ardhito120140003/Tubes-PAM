import * as React from "react";
import { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import axios from 'axios';

const fetchData = (username) => {
  axios.get('https://backend-uas-pam-production.up.railway.app/api/user/' + username)
  .then((response) => {
    return response;
  })
  .catch((e) => {
	console.error(e.message);
  });
}

export const ProfileScreen = ({ route, navigation }) => {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    const response = fetchData(route.params.username);
    setData(response);
  })

	return (
		<View style={styles.uSERPROFILEPAGE}>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Image
					style={styles.btnBackIcon}
					resizeMode="cover"
					source={require("../assets/btn_back.png")}
				/>
			</TouchableOpacity>
			<Text style={styles.profileText}>Profile</Text>
			<Text style={styles.dilanCepmekText}>{route.params.username}</Text>
			<Text style={styles.dilancepmek22gmailcomText}>
				dilancepmek22@gmail.com
			</Text>
			<Image
				style={styles.cepmek1Icon}
				resizeMode="cover"
				source={require("../assets/user_profile.png")}
			/>
			<Text style={styles.aktivitasSayaText}>Aktivitas Saya</Text>
			<TouchableOpacity style={styles.wishlistView}>
				<Image
					style={styles.iconLoveSolid}
					resizeMode="cover"
					source={require("../assets/love.png")}
				/>
				<Text style={styles.wishlistSayaText}>Wishlist saya</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.pesananDikomplainText}>
				<Text>Pesanan dikomplain</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.bantuanSuSCare}>
				<Text>Bantuan SuS Care</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.pembelianView}>
				<Text style={styles.pembelianSayaText}>Pembelian saya</Text>
				<Image
					style={styles.iconCardSolid}
					resizeMode="cover"
					source={require("../assets/history.png")}
				/>
			</TouchableOpacity>
			<TouchableOpacity style={styles.keranjangView}>
				<Text style={styles.keranjangSayaText}>Keranjang saya</Text>
				<Image
					style={styles.vectorIcon}
					resizeMode="cover"
					source={require("../assets/transaksi.png")}
				/>
			</TouchableOpacity>
			<Text style={styles.pusatBantuanText}>Pusat Bantuan</Text>
			<View style={styles.user11}>
				<Image
					style={styles.vectorIcon1}
					resizeMode="cover"
					source={require("../assets/pesanankomplain1.png")}
				/>
				<Image
					style={styles.vectorIcon2}
					resizeMode="cover"
					source={require("../assets/pesanankomplain2.png")}
				/>
				<Image
					style={styles.ellipseIcon}
					resizeMode="cover"
					source={require("../assets/pesanankomplain3.png")}
				/>
				<Text style={styles.text}>!</Text>
			</View>
			<Image
				style={styles.interrogation1Icon}
				resizeMode="cover"
				source={require("../assets/huh.png")}
			/>
			<TouchableOpacity
				style={styles.btnBuyView}
				onPress={() =>
					navigation.navigate("Edit Profil", {
						nama: "Dilan",
						alamat: "Way Huwi, Lampung Selatan, Lampung, Indonesia",
					})
				}
			>
				<View style={styles.rectangleView} />
				<Text style={styles.editProfileText}>Edit Profile</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	btnBackIcon: {
		position: "absolute",
		top: 30,
		left: 24,
		width: 40,
		height: 40,
	},
	profileText: {
		position: "absolute",
		top: 48,
		left: 164,
		fontSize: 20,
		fontWeight: "500",
		fontFamily: "Poppins",
		color: "#000",
		textAlign: "center",
	},
	dilanCepmekText: {
		position: "absolute",
		top: 325,
		left: 124,
		fontSize: 20,
		fontWeight: "500",
		fontFamily: "Poppins",
		color: "#000",
		textAlign: "center",
	},
	dilancepmek22gmailcomText: {
		position: "absolute",
		top: 360,
		left: 84,
		fontSize: 16,
		fontWeight: "300",
		fontFamily: "Poppins",
		color: "#000",
		textAlign: "center",
	},
	cepmek1Icon: {
		position: "absolute",
		top: 108,
		left: 101,
		borderRadius: 200,
		width: 187,
		height: 187,
	},
	aktivitasSayaText: {
		position: "absolute",
		top: "54.03%",
		left: "6.15%",
		fontSize: 18,
		fontWeight: "600",
		fontFamily: "Poppins",
		color: "#040507",
		textAlign: "left",
	},
	iconLoveSolid: {
		position: "absolute",
		top: 1,
		left: 0,
		width: 27.19,
		height: 26,
		overflow: "hidden",
	},
	wishlistSayaText: {
		position: "absolute",
		top: 0,
		left: 51,
		fontSize: 18,
		fontWeight: "300",
		fontFamily: "Poppins",
		color: "#000",
		textAlign: "left",
	},
	wishlistView: {
		position: "absolute",
		top: 497,
		left: 33,
		width: 165,
		height: 27,
	},
	pesananDikomplainText: {
		position: "absolute",
		top: 714,
		left: 82,
		fontSize: 18,
		fontWeight: "300",
		fontFamily: "Poppins",
		color: "#000",
		textAlign: "left",
	},
	bantuanSuSCare: {
		position: "absolute",
		top: 768,
		left: 82,
		fontSize: 18,
		fontWeight: "300",
		fontFamily: "Poppins",
		color: "#000",
		textAlign: "left",
	},
	pembelianSayaText: {
		position: "absolute",
		top: 0,
		left: 49,
		fontSize: 18,
		fontWeight: "300",
		fontFamily: "Poppins",
		color: "#000",
		textAlign: "left",
	},
	iconCardSolid: {
		position: "absolute",
		top: 0,
		left: -1.73,
		width: 30.66,
		height: 28.58,
		overflow: "hidden",
	},
	pembelianView: {
		position: "absolute",
		top: 607,
		left: 33,
		width: 193,
		height: 27,
	},
	keranjangSayaText: {
		position: "absolute",
		top: 0,
		left: 44,
		fontSize: 18,
		fontWeight: "300",
		fontFamily: "Poppins",
		color: "#000",
		textAlign: "left",
	},
	vectorIcon: {
		position: "absolute",
		height: "88.89%",
		width: "9.82%",
		top: "0%",
		right: "90.18%",
		bottom: "11.11%",
		left: "0%",
		maxWidth: "100%",
		overflow: "hidden",
		maxHeight: "100%",
	},
	keranjangView: {
		position: "absolute",
		top: 552,
		left: 38,
		width: 184,
		height: 27,
	},
	pusatBantuanText: {
		position: "absolute",
		top: "79.5%",
		left: "6.15%",
		fontSize: 18,
		fontWeight: "600",
		fontFamily: "Poppins",
		color: "#040507",
		textAlign: "left",
	},
	vectorIcon1: {
		position: "absolute",
		height: "41.67%",
		width: "75%",
		top: "58.33%",
		right: "12.5%",
		bottom: "0%",
		left: "12.5%",
		maxWidth: "100%",
		overflow: "hidden",
		maxHeight: "100%",
	},
	vectorIcon2: {
		position: "absolute",
		height: "50%",
		width: "50%",
		top: "0%",
		right: "25%",
		bottom: "50%",
		left: "25%",
		maxWidth: "100%",
		overflow: "hidden",
		maxHeight: "100%",
	},
	ellipseIcon: {
		position: "absolute",
		height: "26.92%",
		width: "26.92%",
		top: "0%",
		right: "11.54%",
		bottom: "73.08%",
		left: "61.54%",
		maxWidth: "100%",
		overflow: "hidden",
		maxHeight: "100%",
	},
	text: {
		position: "absolute",
		top: "-7.69%",
		left: "69.23%",
		fontSize: 7,
		fontWeight: "500",
		fontFamily: "Poppins",
		color: "#fff",
		textAlign: "center",
	},
	user11: {
		position: "absolute",
		top: 716,
		left: 29,
		width: 26,
		height: 26,
		overflow: "hidden",
	},
	interrogation1Icon: {
		position: "absolute",
		top: 769,
		left: 29,
		width: 26,
		height: 26,
		overflow: "hidden",
	},
	rectangleView: {
		position: "absolute",
		top: 0,
		left: 0,
		borderRadius: 15,
		backgroundColor: "#0d4c92",
		shadowColor: "rgba(0, 0, 0, 0.25)",
		shadowOffset: {
			width: 1,
			height: 4,
		},
		shadowRadius: 4,
		elevation: 4,
		shadowOpacity: 1,
		width: 304,
		height: 39.8,
	},
	editProfileText: {
		position: "absolute",
		top: 7.46,
		left: 40.78,
		fontSize: 16,
		fontWeight: "500",
		fontFamily: "Poppins",
		color: "#fff",
		textAlign: "center",
		width: 233.56,
		height: 24.05,
	},
	btnBuyView: {
		position: "absolute",
		top: 389,
		left: 43,
		width: 304,
		height: 39.8,
	},
	uSERPROFILEPAGE: {
		position: "relative",
		borderRadius: 10,
		backgroundColor: "#fff",
		flex: 1,
		width: "100%",
		height: 844,
	},
});
