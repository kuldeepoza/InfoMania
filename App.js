import React from 'react';
import {AppNavigator} from "src/config/router";
import {Provider} from 'react-redux';
import store from 'src/redux/store';
import {persistStore} from "redux-persist";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isProjectCreated: false
        };
    }

    componentWillMount() {
        persistStore(store, {storage: AsyncStorage}, () => {

        });
    }

    render() {
        const Layout = AppNavigator();
        return (
            <Provider store={store}>
                <Layout/>
            </Provider>
        );
    }
}

export default App;