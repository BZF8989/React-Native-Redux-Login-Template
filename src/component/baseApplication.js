import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './pages/login';
import { Router, Scene, Reducer } from 'react-native-router-flux';
import { View } from 'react-native';
import NavBar from './nav';
import Home from './pages/home';


const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        return defaultReducer(state, action);
    };
};

class Application extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }

    render() {
        return (
            <Router createReducer={reducerCreate} >
                <Scene key="root">
                    <Scene key="start" hideNavBar={true}>
                        <Scene key="login" component={Login} title="Login" initial={true} renderBackButton={() => <View />} hideNavBar={false} />
                        <Scene key="register" component={Register} title="Register" hideNavBar={false} />
                    </Scene>
                    <Scene key="drawer" drawer contentComponent={NavBar} renderBackButton={() => <View />} hideNavBar={true}>
                        <Scene key="home" contentComponent={Home} renderBackButton={() => <View />} hideNavBar={false} />
                    </Scene>
                </Scene>
            </Router>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

export default connect(mapStateToProps)(Application);