import React from 'react';
import {StyleSheet} from 'react-native';
import {relativeHeight, relativeWidth} from "src/utils/dimensions";


export const styles = StyleSheet.create({
    TVSideBar_Container: {
        paddingLeft: relativeWidth(3),
        paddingRight: relativeWidth(3),
    },
    TVSideBar_HeaderContainer: {
        height: relativeHeight(20),
        alignItems: 'center',
        justifyContent: 'center'
    },
    TVSideBar_CategoriesContainer: {
        padding: relativeWidth(3)
    },
    drawerHeader: {
        padding: relativeHeight(0.5)
    },
    TVSideBar_Icon: {
        position: 'absolute',
        end: 0,
        alignSelf: 'center',
        padding:8
    },
    TVSideBar_Bottom: {
        paddingTop: 5,
    },
    TVDrawerTouchArea: {
        flex: 1,
        padding: 8,
    }

});