import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: "",
            Password: "",
            ConfirmPassword: "",
        };
    }

    render() {
        return (
            <View>
                <View>
                    <Text style={styles.textHeader}>Sign Up</Text>
                </View>
                <Text style={styles.label}>Email*</Text>
                <View style={styles.field}>
                    <TextInput
                        style={{ width: 300, paddingRight: 15 }}
                        value={this.state.Email}
                        onChangeText={(value) => this.setState({ Email: value })}
                        placeholder={"Masukkan Email"}
                    />
                </View>

                <Text style={styles.label}>Password*</Text>
                <View style={styles.field}>
                    <TextInput
                        style={{ width: 300, paddingRight: 15 }}
                        value={this.state.Password}
                        onChangeText={(value) => this.setState({ Password: value })}
                        placeholder={"Masukkan Password"}
			secureTextEntry={true}
                    />
                </View>

                <Text style={styles.label}>Confirm Password*</Text>
                <View style={styles.field}>
                    <TextInput
                        style={{ width: 300, paddingRight: 15 }}
                        value={this.state.ConfirmPassword}
                        onChangeText={(value) => this.setState({ ConfirmPassword: value })}
                        placeholder={"Confirm Password"}
			secureTextEntry={true}
                    />
                </View>

                <View style={{ marginHorizontal: 30, marginVertical: 20, padding: 5 }}>
                    <Button disabled={
                        this.state.Email === "" ||
                        this.state.Password === "" ||
                        this.state.ConfirmPassword === ""
                    }

                        onPress={() => this.props.navigation.navigate('Home')}
                        color='#0D4C92'
                        borderRadius='30'
                        title="Sign Up" />


                </View>
            </View>
        );
    }
}

export default RegisterScreen;

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