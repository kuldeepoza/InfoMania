import React from 'react';
import {View} from 'react-native';
import Label from "../../components/Label";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: [],
            description: []
        };

    }

    onClick = () => {

    };

    render() {
        return (
            <View>

                <Label onPress={this.onClick}>click</Label>
            </View>
        )
    }

}