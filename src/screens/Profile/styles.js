import {StyleSheet} from "react-native";
import {Color} from "../../utils/color";

module.exports = StyleSheet.create({
    containerProfile:{
        flex: 1,
        paddingLeft:55,
        paddingRight:55,
        backgroundColor: Color.PRIMARY,
    },
    profileImage:{
        marginTop:30,
        alignSelf:'center',
        height:80,
        width:80,
        borderRadius:80

    }

});