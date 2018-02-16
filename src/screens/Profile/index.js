import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles'
import FloatingInputText from "../../components/FloatingInputText";
export default class Profile extends React.Component {

    render() {
        return (
            <View style={styles.containerProfile}>
                    <Image style={styles.profileImage} source={require('../../assets/images/download.jpg')}/>
                <View style={{flex:1}}>
                    <FloatingInputText placeholder="Name"/>
                    <FloatingInputText placeholder="Email"/>
                    <FloatingInputText placeholder="Country"/>
                </View>
            </View>
        )
    }

}