import {StyleSheet} from "react-native";
import {Color} from "../../utils/color";
export let backGradient=[
    'rgb(23, 165, 137)',
    'rgb(20, 143, 119)',
    'rgb(17, 120, 100)',
    'rgb(17, 120, 100)',
    'rgb(14, 98, 81)'
];
module.exports=StyleSheet.create({
    containerAppInfo:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textAppInfo: {
        alignSelf:'center',
        paddingLeft:60,
        paddingRight:40,
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    },
    swiperBtn:{
        color:Color.WHITE,
        fontSize:50
    }
});
