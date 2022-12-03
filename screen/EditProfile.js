import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import back from '../assets/btn_back.png';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Nama: "",
            Password: "",
            Alamat: "",
        };
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={{ marginTop: 40 ,marginLeft: 24,marginBottom:61}} onPress={() => this.props.navigation.navigate('Profile')}>
                    <Image source={back} style={{ width: 40, height: 40 }} />
                </TouchableOpacity>
                <Text style={styles.label}>Edit Nama</Text>
                <View style={styles.field}>
                    <TextInput
                        style={{ width: 300, paddingRight: 15 }}
                        value={this.state.Nama}
                        onChangeText={(value) => this.setState({ Nama: value })}
                        placeholder={"Masukkan Nama"}
                    />
                </View>

                <Text style={styles.label}>Edit Password</Text>
                <View style={styles.field}>
                    <TextInput
                        style={{ width: 300, paddingRight: 15 }}
                        value={this.state.Password}
                        onChangeText={(value) => this.setState({ Password: value })}
                        placeholder={"Masukkan Password"}
                    />
                </View>

                <Text style={styles.label}>Edit Alamat</Text>
                <View style={styles.field}>
                    <TextInput
                        style={{ width: 300,paddingRight: 15 }}
                        value={this.state.Alamat}
                        onChangeText={(value) => this.setState({ Alamat: value })}
                        placeholder={"Masukkan Alamat"}
                    />
                </View>

                <View style={{ marginHorizontal: 30, marginVertical: 20, padding: 5 }}>
                    <Button disabled={
                        this.state.Nama === "" ||
                        this.state.Password === "" ||
                        this.state.Alamat === ""
                    }

                        onPress={() => this.props.navigation.navigate('Profile')}
                        color='#0D4C92'
                        borderRadius='30'
                        title="Simpan" />


                </View>
            </View>
        );
    }
}

export default EditProfile;

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 36,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 139,
        marginBottom: 40,
        color: '#0D4C92',
    },
    label: {
        marginTop: 10,
        marginLeft: 30,
        fontWeight: 'bold',
    },
    field: {
        borderWidth: 2,
        borderColor: '#0D4C92',
        marginHorizontal: 30,
        marginVertical: 10,
        borderRadius: 10,
        padding: 7,
    }
});