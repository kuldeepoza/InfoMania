import {StyleSheet} from "react-native";
import {Color} from "../../utils/color";

module.exports = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    listView: {
        borderRightWidth: 5,
        padding: 15,
        borderBottomWidth: 0.8,
        flexDirection: 'row',
        borderBottomColor: Color.GREY.A700
    },
    listImage: {
        height: 60,
        width: 60,
        borderRadius: 5
    },
    detailView:
        {
            flexDirection: 'column',
            marginLeft: 20,
            flex: 1
        },
    detailSubView: {
        flexDirection: 'row'
    },
    firstName: {
        fontWeight: 'bold',
        color: Color.BLACK,
        fontSize: 13

    },
    lastName: {
        fontWeight: 'bold',
        color: Color.BLACK,
        fontSize: 13,
        marginLeft: 5
    },
    iconView: {
        flex: 1,
        alignItems: 'flex-end'
    },
    iconImage: {
        height: 13,
        width: 10,
        justifyContent: 'flex-end'
    },
    pikDateView: {
        flexDirection: 'row',
        marginTop: 5
    },
    dropDateView: {
        flexDirection: 'row',
        marginTop: 5
    },
    date: {
        fontSize: 12
    },
    timeView:{
        flex: 1,
        alignItems: 'flex-end'
    },
    time: {
        fontSize: 12,
        marginEnd:35
    },
    price: {
        marginTop: 5
    }

});