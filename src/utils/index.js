/* create common methods for app here*/

import {Platform, NetInfo} from 'react-native';

// use for check internet connection
const isNetworkConnected = () => {
    if (Platform.OS === 'ios') {
        return new Promise(resolve => {
            const handleFirstConnectivityChangeIOS = isConnected => {
                NetInfo.isConnected.removeEventListener('connectionChange', handleFirstConnectivityChangeIOS);
                resolve(isConnected);
            };
            NetInfo.isConnected.addEventListener('connectionChange', handleFirstConnectivityChangeIOS);
        });
    }

    return NetInfo.isConnected.fetch();

};



export default {
    isNetworkConnected
}

