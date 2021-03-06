
import {Color} from "../utils/color";
import {DrawerNavigator, StackNavigator, TabNavigator} from "react-navigation";
import React from 'react';
import {Image, TouchableOpacity,Alert} from "react-native";
import TopStories from "../screens/TopStories";
import Trending from "../screens/Trending";
import Photos from "../screens/Photos";
import Videos from "../screens/Videos";
import Business from "../screens/Business";
import Sports from "../screens/Sports";
import Health from "../screens/Health";
import Science from "../screens/Science";
import Entertainment from "../screens/Entertainment";
import Education from "../screens/Education";
import Technology from "../screens/Technology";
import AppInformation from "../screens/AppInformation";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import ForgotPassword from "../screens/ForgotPassword";
import Channel from "../screens/Channel";
import Saved from "../screens/Saved";
import Favourite from "../screens/Favourite";
import YoutubeVideo from "../screens/YoutubeVideo";
import Profile from "../screens/Profile";
import TVSideBar from "src/components/TVDrawer";
import Icon from "react-native-vector-icons/RNIMigration";
import fontLarge from "src/utils/theme"
import {relativeWidth,fontXSmall} from "src/utils/dimensions"

const navigationTitle = {
    color: Color.WHITE,
    alignSelf: 'center',
    fontSize: fontLarge
};

const navigationStyle = {
    backgroundColor: Color.PRIMARY,
};

const drawerContentItems = {
    activeTintColor: Color.PRIMARY,
    inactiveTintColor: Color.BLACK,
};
export const tvStack = StackNavigator({
    TopStories: {
        screen: TopStories,
        navigationOptions: ({navigation}) => ({
            title:"Top",
            drawerLockMode: 'locked-closed',
        })
    },
}, {
    navigationOptions: ({navigation}) => ({
        headerVisible: true,
        headerTitleStyle: navigationTitle,
        headerStyle: navigationStyle,
        headerBackTitle: null,
        headerTintColor: Color.WHITE,
    }),
});
export const tvDrawer = DrawerNavigator({
        tvStack: {
            screen: tvStack

        }
    },
    {
        drawerWidth: relativeWidth(70),
        initialRouteName: 'tvStack',
        contentOptions: drawerContentItems,
        contentComponent: props => <TVSideBar {...props} />
    }
);


const tabRouteConfig = {
    TopStories: {
        screen: TopStories,
        navigationOptions: {
            tabBarLabel: "Top Stories",
            style: {
                backgroundColor: Color.STATUSBAR,
            },
        }
    },
    Trending: {
        screen: Trending,
        navigationOptions: {
            tabBarLabel: "Trending",
        }
    },
    Photos: {
        screen: Photos,
        navigationOptions: {
            tabBarLabel: "Photos",
            style: {
                backgroundColor: Color.STATUSBAR,
            },
        }
    },
    Videos: {
        screen: Videos,
        navigationOptions: {
            tabBarLabel: "Videos",
            style: {
                backgroundColor: Color.STATUSBAR,
            },
        }
    },
    Business: {
        screen: Business,
        navigationOptions: {
            tabBarLabel: "Business",
        }
    },
    Sports: {
        screen: Sports,
        navigationOptions: {
            tabBarLabel: "Sports",
        }
    },
    Health: {
        screen: Health,
        navigationOptions: {
            tabBarLabel: "Health",
        }
    },
    Science: {
        screen: Science,
        navigationOptions: {
            tabBarLabel: "Science",
        }
    },
    Entertainment: {
        screen: Entertainment,
        navigationOptions: {
            tabBarLabel: "Entertainment",
        }
    },
    Education: {
        screen: Education,
        navigationOptions: {
            tabBarLabel: "Education",
        }
    },
    Technology: {
        screen: Technology,
        navigationOptions: {
            tabBarLabel: "Technology",
        }
    }
};
export const tabConfig = {
    tabBarOptions: {
        animationEnabled: true,
        activeTintColor: 'white',
        swipeEnabled:true,
        scrollEnabled: true,
        labelStyle: {
            fontSize: 11,
            fontWeight:'bold'
        },
        style: {
            backgroundColor: Color.PRIMARY,
        },
        indicatorStyle: {
            backgroundColor: Color.WHITE,
        },
    }
};
export const homeTabBar = TabNavigator(tabRouteConfig, tabConfig);


manuClick=()=>
{
    Alert.alert("Drawer Open");
};



export const homeTab = TabNavigator({
    tvDrawer: {
        screen: tvDrawer,
        navigationOptions: ({navigation}) => ({
            title: "data",
            header: null,
            headerVisible: false,
            headerTitleStyle: navigationTitle,
            headerStyle: navigationStyle,
            headerBackTitle: null,
            headerTintColor: Color.WHITE,
            tabBarIcon: ({focused, tintColor}) => <Icon name='rented-movies' color={tintColor} size={25}/>,
           /* headerLeft: renderDrawerIcon(navigation)*/
        }),
    }
}, {

    ...TabNavigator.Presets.Default,
    tabBarOptions: {
        style: {
            backgroundColor: Color.PRIMARY,
            paddingVertical: 0
        },
        indicatorStyle: {
            height: 0
        },
        labelStyle: {
            marginVertical: 0,
            fontSize: fontXSmall
        },
        upperCaseLabel: false,
        showIcon: true,
        activeTintColor: Color.BLUE

    },
    initialRouteName: "tvDrawer",
    lazy: true,
    swipeEnabled: false,
    tabBarPosition: 'bottom',
    animationEnabled: false,

});


export const Authenticated = StackNavigator({
    homeTab: {
        screen: homeTab,
    }
});





export const AuthorizedNavigator = StackNavigator({
    Schedule: {
        screen: homeTabBar,
        navigationOptions: {
            title: 'InfoMania',
            statusBarBackgroundColor: Color.PRIMARY,
            tabBarLabel: "Schedule",
            headerTintColor: Color.WHITE,
            headerLeft:
                <TouchableOpacity activeOpacity={0.6} onPress={() => this.manuClick()} >
                    <Image source={{uri: 'http://www.vn2ny.com/image/menu.png'}}
                           style={{backgroundColor: Color.PRIMARY, height: 45, width: 45, marginLeft: 5}}
                           onPress={() => this.props.navigation.navigate('Schedule')}/>
                </TouchableOpacity>,
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                backgroundColor: Color.PRIMARY,
            },
        }

    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'navigationOptions',
            headerTintColor: Color.WHITE,
            header: null,
            headerStyle: {
                backgroundColor: Color.PRIMARY
            },
        }
    },
    Channel: {
        screen: Channel,
        navigationOptions: {
            title: 'navigationOptions',
            headerTintColor: Color.WHITE,
            header: null,
            headerStyle: {
                backgroundColor: Color.PRIMARY
            },
        }
    },
    YoutubeVideo: {
        screen: YoutubeVideo,
        navigationOptions: {
            title: 'navigationOptions',
            headerTintColor: Color.WHITE,
            header: null,
            headerStyle: {
                backgroundColor: Color.PRIMARY
            },
        }
    },
    Saved: {
        screen: Saved,
        navigationOptions: {
            title: 'navigationOptions',
            headerTintColor: Color.WHITE,
            header: null,
            headerStyle: {
                backgroundColor: Color.PRIMARY
            },
        }
    },
    Favourite: {
        screen: Favourite,
        navigationOptions: {
            title: 'navigationOptions',
            headerTintColor: Color.WHITE,
            header: null,
            headerStyle: {
                backgroundColor: Color.PRIMARY
            },
        }
    },

});
export const UnauthorizedNavigator = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
            headerTintColor: Color.WHITE,
            headerStyle: {
                backgroundColor: Color.PRIMARY
            },
        }
    },
    AppInformation: {
        screen: AppInformation,
        navigationOptions: {
            title: 'AppInformation',
            headerTintColor: Color.WHITE,
            header: null,
            headerStyle: {
                backgroundColor: Color.PRIMARY
            },
        }
    },

    Signup: {
        screen: SignUp,
        navigationOptions: {
            title: 'Signup',
            headerTintColor: Color.WHITE,
            headerStyle: {
                backgroundColor: Color.PRIMARY
            },
        }
    },

    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
            title: 'Forgot Password',
            headerTintColor: Color.WHITE,
            headerStyle: {
                backgroundColor: Color.PRIMARY
            },
        },
        initialRouteName: 'Main'
    },


});

export const AppNavigator = StackNavigator({
    Authorized: {
        screen: Authenticated, navigationOptions: {
            header: null
        }
    },
    Unauthorized: {
        screen: UnauthorizedNavigator, navigationOptions: {
            header: null
        },
    },

});