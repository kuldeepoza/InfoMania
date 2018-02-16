import React from 'react';
import {View} from 'react-native';
import Label from "../../components/Label";
export default class Home extends React.Component {
onClick = ()=>
{

};
    render() {
        return (
            <View>
                <Label onPress={this.onClick}>click</Label>
            </View>
        )
    }

}