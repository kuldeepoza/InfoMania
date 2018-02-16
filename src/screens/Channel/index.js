import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles'
export default class Channel extends React.Component {

    render() {
        return (
            <View style={styles.containerChannel}>
                <Image style={styles.profileImage} source={require('../../assets/images/download.jpg')}/>
                <Text>Times fo India</Text>
            </View>
        )
    }

}