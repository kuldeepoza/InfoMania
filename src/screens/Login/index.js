import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from "./styles";
import FloatingInputText from "../../components/FloatingInputText";
import RoundButton from "../../components/RoundButton";
import Label from "../../components/Label";
import {NavigationActions} from "react-navigation";

export default class Login extends React.Component {
    loginClick = () => {
        this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({routeName: 'Authorized'})]
        }));
    };
    render() {
        return (
    <View style={styles.containerLogin}>
        <View>
                <Image style={styles.logoLogin} source={require('../../assets/images/download.jpg')}/>
                <Label style={styles.labelLogin}>Login</Label>
                <FloatingInputText
                    placeholder="Email"
                    keybordType="email-address"
                    onChangeText={(email) => this.setState({email})}/>
                <FloatingInputText placeholder="Password"
                                    onChangeText={(password) => this.setState({password})}
                />
                <RoundButton click={this.loginClick} mt={30}>
                    Login
                </RoundButton>
                <Label
                      style={styles.forgotPassLogin}>Forgot Your Password?</Label>
            </View>
    </View>
        )
    }

}