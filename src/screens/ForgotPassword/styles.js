import {StyleSheet} from "react-native";
import {Color} from "../../utils/color";
module.exports=StyleSheet.create({
    container:{
        flex:1,
    },

    largeText:{
        marginTop:40,
        fontSize:25,
        color:Color.PRIMARY
    },
    smallText:{
        fontSize:11,
        color:Color.SECONDRY
    },
    subText:{
        paddingLeft:60,
        paddingRight:60,
    },
    itEmail:{
        marginBottom:15
    },
    btnForPass:{
        marginTop:15
    },
    newForPassBind:{
        marginTop:20,
        paddingLeft:50,
        paddingRight:50

    },
    textViewForPass:{
        alignItems:"center"
    },

});
