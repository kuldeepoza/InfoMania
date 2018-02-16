import React from 'react';
import {Color} from "../../utils/color";
import {TextInput} from "react-native";

export default class FloatingInputText extends React.Component {

    render() {
        return (
            <TextInput
                style={{color:Color.WHITE,borderColor:'white',borderRadius:10,borderWidth:1,padding:6,marginTop:20,paddingLeft:30}}
                underlineColorAndroid={Color.TRANSPARENT}
                placeholder={this.props.placeholder}
                placeholderTextColor={Color.TEAL["100"]}
                error={this.props.error}
                secureTextEntry={this.props.password}
                keyboardType={this.props.keyboardType}
                prefix={this.props.prefix}
                onChangeText={this.props.onChangeText}
                value={this.props.value}
                editable={this.props.editable}
                selectionColor={Color.GREY["500"]}
                autoCapitalize={this.props.autoCapitalize}>
                {this.props.children}
            </TextInput>
        );
    }
}

