import React from 'react';
import {View, Image, Picker, ScrollView} from 'react-native';
import styles from "./styles";
import FloatingInputText from "../../components/FloatingInputText";
import RoundButton from "../../components/RoundButton";
import {backGradient} from "../AppInformation/styles";
import AnimatedLinearGradient from 'react-native-animated-linear-gradient'
import Label from "../../components/Label";

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailError: '',
            password: '',
            pwdError: '',
            name: '',
            nameError: '',
            number: '',
            numError: ''
        };
    }
    onclick = () => {
        let nameErr = validation("name", this.state.name);
        let numErr = validation("number", this.state.number);
        let emailErr = validation("email", this.state.email);
        let pwdErr = validation("password", this.state.password);
        if (emailErr != null ||
            pwdErr != null ||
            nameErr != null ||
            numErr != null) {
            this.setState({
                emailError: emailErr,
                pwdError: pwdErr,
                numError: numErr,
                nameError: nameErr
            });
        }
        else {
            this.setState({
                emailError: '',
                pwdError: '',
                numError: '',
                nameError: ''
            });


        }
    };
    render() {
        return (

            <View style={styles.containerSignup}>
                <ScrollView>
                <Image style={styles.logoSignup} source={require('../../assets/images/download.jpg')}/>
                <Label style={styles.labelSignup}>Registration</Label>
                <FloatingInputText placeholder='Name'
                                   onChangeText={(name) => this.setState({name})}/>
                <FloatingInputText
                    placeholder="Email"
                    keybordType="email-address"
                    onChangeText={(email) => this.setState({email})}/>
                <FloatingInputText placeholder="Password"
                                   onChangeText={(password) => this.setState({password})}
                />
                <View style={styles.pickerView}>
                <Picker
                    style={styles.pickerSignup}
                    selectedValue={this.state.country}
                    onValueChange={(itemValue) => this.setState({language: itemValue})}>
                    <Picker.Item label="country" value="Country" />
                    <Picker.Item label="India" value="India" />
                </Picker>
                </View>
                <View style={styles.pickerView}>
                <Picker
                    style={styles.pickerSignup}
                    selectedValue={this.state.language}
                    onValueChange={(itemValue) => this.setState({language: itemValue})}>
                    <Picker.Item label="language" value="Language" />
                    <Picker.Item label="English" value="English" />
                    <Picker.Item label="Hindi" value="Hindi" />
                    <Picker.Item label="Gujarati" value="Gujarati" />
                    <Picker.Item label="Marathi" value="Marathi" />
                    <Picker.Item label="Panjabi" value="Panjabi" />
                    <Picker.Item label="Bangali" value="Bangali" />
                    <Picker.Item label="Urdu" value="Urdu" />
                </Picker>
                </View>
                <RoundButton mt={30}>
                    SignUp
                </RoundButton>
                </ScrollView>

            </View>
        )
    }

}