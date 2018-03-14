import React from 'react';
import {Image, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import styles,{backGradient} from './styles';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient'
import {Color} from "../../utils/color";
import RoundButton from "../../components/RoundButton";

export default class AppInformation extends React.Component {
    render() {


        return (
            <Swiper
                style={styles.containerAppInfo}
                showsButtons={true}
                loop={true}
                dotColor={Color.WHITE}
                nextButton={<Text style={styles.swiperBtn}> › </Text>}
                prevButton={<Text style={styles.swiperBtn}> ‹ </Text>}>
                <View style={styles.sliderView}>
                    <AnimatedLinearGradient customColors={backGradient} speed={800}/>
                    <Text style={styles.textAppInfo}>Your All favoutite is available here,with all information,data
                        Your All favoutite is available here</Text>
                </View>
                <View style={styles.sliderView}>
                    <AnimatedLinearGradient customColors={backGradient} speed={800}/>
                    <Text style={styles.textAppInfo}>Your All favoutite is available here,with all information,data
                        Your All favoutite is available here</Text>
                </View>
                <View style={styles.sliderView}>
                    <AnimatedLinearGradient customColors={backGradient} speed={800}/>
                    <Text style={styles.textAppInfo}>Your All favoutite is available here,with all information,data
                        Your All favoutite is available here</Text>
                    <RoundButton mt={30} click={() => this.props.navigation.navigate('Login')}>Get Started</RoundButton>
                </View>
            </Swiper>
        )
    }

}