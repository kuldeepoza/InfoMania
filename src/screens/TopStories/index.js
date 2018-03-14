import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Drawer from 'react-native-drawer';
import {Color} from "../../utils/color";
import RoundButton from "../../components/RoundButton";
import * as rssParser from "react-native-rss-parser";

export default class TopStories extends React.Component {
    closeControlPanel = () => {
        this._drawer.close()

    };

    openControlPanel = () => {
        this._drawer.open()
    };

    componentDidMount() {
        fetch('http://feeds.reuters.com/reuters/INhollywood')
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
                this.setState({
                    data: rss.items
                });
            })
    }

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            description: ''
        };
    }

    _renderListView = (item) => {
        console.log("====--------------", item.title);
        return (
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.listPopupClick(item)}>
                <View style={styles.listView}>
                    {/*    <Image style={styles.listImage}
                           source={{uri: (item.images)}}/>*/}
                    <View style={styles.detailView}>
                        <View style={styles.dropDateView}>
                            <Text style={styles.date}>Dropof : {item.title}</Text>
                        </View>
                        <Text style={styles.price}>${item.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    listPopupClick = () => {
        this.openControlPanel();
    };
    profileOpen = () => {
        this.props.navigation.navigate('Profile');
    };
    SavedOpen = () => {
        this.props.navigation.navigate('Saved');
    };
    FavouriteOpen = () => {
        this.props.navigation.navigate('Favourite');
    };
    YoutubeVideoOpen = () => {
        this.props.navigation.navigate('YoutubeVideo');
    };
    ChannelOpen = () => {
        this.props.navigation.navigate('Channel');
    };
    homeOpen = () => {
        this.props.navigation.navigate('TopStories');
    };

    render() {
        return (
            <Drawer
                type="overlay"
                tapToClose={true}
                openDrawerOffset={0.2}
                closedDrawerOffset={-3}
                ref={(ref) => this._drawer = ref}
                content={
                    <View style={{flex: 1, backgroundColor: Color.PRIMARY, padding: 40}}>
                        <RoundButton mt={10} click={this.homeOpen}>Home</RoundButton>
                        <RoundButton mt={10} click={this.profileOpen}>Profile</RoundButton>
                        <RoundButton mt={10} click={this.ChannelOpen}>Channel</RoundButton>
                        <RoundButton mt={10} click={this.YoutubeVideoOpen}> Youtube Trend</RoundButton>
                        <RoundButton mt={10} click={this.FavouriteOpen}> Favourite</RoundButton>
                        <RoundButton mt={10} click={this.SavedOpen}> Saved</RoundButton>
                        <RoundButton mt={10} click={this.SavedOpen}> Contact Us</RoundButton>
                    </View>}
            >
                <View style={styles.mainContainer}>

                    <FlatList
                        data={this.state.data}
                        renderItem={({item}) => this._renderListView(item)}
                    />
                </View>
            </Drawer>

        )
    }

}
