import {StyleSheet} from "react-native";
import {Color} from "../../utils/color";
module.exports=StyleSheet.create({
    containerLogin: {
        flex: 1,
        justifyContent:'center',
        paddingLeft:55,
        paddingRight:55,
        backgroundColor: Color.PRIMARY,
    },

    forgotPassLogin:{
        color:Color.WHITE,
        marginTop:17,
        alignSelf:'flex-end'
    },
    labelLogin:{
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:25,
        color:Color.WHITE,

    },
    logoLogin:{
        width:60,
        height:60,
        borderRadius:30,
        alignSelf:'center'
    }

});
