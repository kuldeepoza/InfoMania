import React from "react";
import {
    View,
    ScrollView,
    TouchableHighlight,
    SafeAreaView
} from "react-native";
import {connect} from "react-redux";
import Label from "src/components/Label";
import {Color} from "src/utils/color";
import {styles} from './styles'
import {drawerImageUrl} from "src/utils/constants";
import {commonStyle} from "src/utils/styles";

class TVSideBar extends React.Component {

    render() {
        return (
            <SafeAreaView style={commonStyle.safeAreaStyle}>
                <View style={[commonStyle.container, styles.TVSideBar_Container]}>
                    <View style={styles.TVSideBar_HeaderContainer}>

                        <Label mt={5}
                               color={Color.TEXT_SECONDARY}
                               bold
                               small>
                            {this.state.user ? this.state.user.email : ""}
                        </Label>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.TVSideBar_CategoriesContainer}>
                            <TouchableHighlight style={styles.TVDrawerTouchArea}
                                                underlayColor={Color.TRANSPARENT}
                                                onPress={() => {

                                                }}>
                                <Label large color={Color.TEXT_SECONDARY}>{this.props.localString.EllaTV}</Label>
                            </TouchableHighlight>

                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
};

const mapStateToProps = (state) => {
    if (state === undefined)
        return {};
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TVSideBar);

