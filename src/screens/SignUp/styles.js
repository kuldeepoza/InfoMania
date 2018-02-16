import {StyleSheet} from "react-native";
import {Color} from "../../utils/color";
module.exports=StyleSheet.create({
    containerSignup: {
        flex: 1,
        padding:55,
        backgroundColor: Color.PRIMARY,
    },
    labelSignup:{
        alignSelf:'center',
        fontWeight:'bold',
       fontSize:25,
        color:Color.WHITE,

    },
    logoSignup:{
        width:60,
        height:60,
        borderRadius:30,
        alignSelf:'center'
    },
    pickerView:{
        paddingLeft:20,
        marginTop:20,
        borderColor:'white',
        borderRadius:10,
        borderWidth:1,
    },
    pickerSignup:{
        color:Color.TEAL["100"],
    }
});
