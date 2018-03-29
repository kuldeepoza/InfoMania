/*create common styles for app here*/

import {StyleSheet} from 'react-native';
import {Color} from "./color";
import {isTablet} from "./theme";
import {relativeHeight, relativeWidth} from "src/utils/dimensions";

export const commonStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.BG_COLOR
    },
    divider: {
        height: 1,
        backgroundColor: Color.TEXT_SECONDARY,
        marginTop: 5
    },
    HeaderButton_Container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginEnd: 10
    },
    HeaderButton: {
        height: isTablet ? 44 : 36,
        width: isTablet ? 44 : 36,
        marginHorizontal: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    AppContentDetail: {
        backgroundColor: Color.BG_COLOR,
        flex: 1,
        paddingHorizontal: relativeWidth(4)
    },
    EmptyList_Placeholder: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TransparantView: {
        backgroundColor: 'rgba(0, 0, 0,0.8)',
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    backImgPlaceholder: {
        flex: 1,
        backgroundColor: Color.IMAGE_BG,
        borderRadius: 8
    },
    safeAreaStyle : {
        flex: 1,
        backgroundColor: Color.PRIMARY
    }

});